import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting, TFile } from 'obsidian';

import NameGen from 'namegen';
import { parse, stringify } from 'yaml'
import * as Handlebars from "handlebars";
import * as path from 'path'

interface FNPSettings {
    folder: string;
}

const DEFAULT_SETTINGS: FNPSettings = {
    folder: ''
}

export default class FantasyNamePlugin extends Plugin {
    settings: FNPSettings;
    statusBarItemEl: HTMLElement;
    
    async onload() {
        await this.loadSettings();
        
        // This adds an editor command that can perform some operation on the current editor instance
        this.addCommand({
            id: 'fantasy-name-gen-generate-name',
            name: 'Generate a name',
            editorCallback: (editor: Editor, view: MarkdownView) => {       
                let generator = new NameGen.Generator(NameGen.PH_WHOLENAME);
                let name = generator.toString();
                
                // Insert the text at the current cursor position
                editor.replaceSelection(name);
                
                // Get the current selection range
                this.app.workspace.activeEditor?.app
                let selectionRange = editor.getCursor()
                
                // Select the inserted text
                editor.setSelection({
                    line: selectionRange.line ,
                    ch: selectionRange.ch - name.length
                },
                {
                    line: selectionRange.line,
                    ch: selectionRange.ch
                });
                
            }
        });
        
        this.addCommand({
            id: 'fantasy-name-gen-create-template',
            name: 'Create an empty template',
            editorCallback: (editor: Editor, view: MarkdownView) => {       
                // Insert the text at the current cursor position
                editor.replaceSelection("```yamldata\nydtemplate:\n```");
            }
        });
        
        this.registerMarkdownCodeBlockProcessor("yamldata", (source, el, ctx) => {
            try {
                const data = parse(source);
                
                const markdownsrc = ctx.getSectionInfo(el);
                
                if (data['ydtemplate'] !== undefined) {
                    const filepath = path.join(this.settings.folder, data['ydtemplate'] + '.md')
                    const file = this.app.vault.getAbstractFileByPath(filepath)
                    if (file instanceof TFile) {
                        this.app.vault.cachedRead(file).then(contents => {
                            const template = Handlebars.compile(contents)
                            el.innerHTML = "" + template(data)
                        }).catch(err => {
                            el.innerHTML = `<b>The template file <i>${filepath}</i> could not be opened.`
                            + "</br>Error: " + err
                        })
                    }
                    else if(data['ydtemplate'] == null) {
                        el.innerHTML = `<b>You have not specified a template file name in the <code>ydtemplate</code> field.`
                        const files = this.app.vault.getMarkdownFiles()
                    }
                    else {
                        el.createEl('div').innerHTML = `<b>The template file <i>${filepath}</i> does not exist.`;
                        const button = el.createEl('button', {text: "Create This Template File"})
                        button.on('click', 'button', ()=>{
                            alert('button!');
                        })
                        const selectlabel = el.createEl('label', {text: "Choose an existing template:"})
                        const select = selectlabel.createEl('select');
                        select.createEl('option', {text: ''});
                        const files = this.app.vault.getMarkdownFiles();
                        files.forEach((file) => {
                            if (path.dirname(file.path) == this.settings.folder) {
                                select.createEl('option', {text: file.basename})
                            }
                        });
                        select.on('change', 'select', (option)=>{
                            // view contains the editor to change the markdown
                            const view = this.app.workspace.getActiveViewOfType(MarkdownView);
                            // the context contains the begin and end of the block in the markdown file
                            data['ydtemplate'] = select.value;
                            if(markdownsrc != null) {
                                const lineno = markdownsrc.lineStart + 1;                            
                                view?.editor.setLine(lineno, stringify(data));
                            }
                            else {
                                alert('source was null');
                            }
                        })
                    }
                }
                else {
                    const table = el.createEl("table");
                    const body = table.createEl("tbody");
                    
                    for (const property in data) {
                        const row = body.createEl("tr");
                        row.createEl("th", {text: property});
                        row.createEl("td", {text: data[property]});
                    }
                    const footnote = el.createEl("p");
                    footnote.createEl('small', {text: "Add a `ydtemplate` key to this YAML to specify a Handlebars template to render this data."})
                }
            }
            catch (err) { 
                const errmsg = el.createEl("div", err);
            }
            
        });
        
        // This adds a settings tab so the user can configure various aspects of the plugin
        this.addSettingTab(new FNPSettingTab(this.app, this));
    }
    
    onunload() {
        
    }
    
    async loadSettings() {
        console.log("loading settings")
        this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
        console.log("loaded settings")
    }
    
    async saveSettings() {
        console.log("saving settings")
        await this.saveData(this.settings);
        console.log("saved settings")
    }
}

class FNPSettingTab extends PluginSettingTab {
    plugin: FantasyNamePlugin;
    
    constructor(app: App, plugin: FantasyNamePlugin) {
        console.log('created settings tab')
        super(app, plugin);
        this.plugin = plugin;
    }
    
    display(): void {
        const {containerEl} = this;
        
        containerEl.empty();
        
        new Setting(containerEl)
        .setName('Template location')
        .setDesc('a location within your vault where template files are stored')
        .addText(text => text
            .setPlaceholder('path/with/slashes')
            .setValue(this.plugin.settings.folder)
            .onChange(async (value) => {
                this.plugin.settings.folder = value;
                await this.plugin.saveSettings();
            })
            );
        }
    }