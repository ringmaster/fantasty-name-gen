import { Editor, MarkdownView, Plugin } from 'obsidian';

interface FantasyNamePluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: FantasyNamePluginSettings = {
	mySetting: 'default'
}

const prefixes = "Ash, Bane, Blaze, Bolt, Dawn, Dusk, Ember, Frost, Gale, Gloom, Haze, Blaze, Mist, Moon, Night, Rain, Shade, Shine, Sky, Smoke, Snow, Storm, Sun, Swift, Thorn, Tide, Vex, Wind, Wisp, Abyss, Arc, Art, Brave, Brook, Chaos, Cliff, Dark, Death, Dream, Edge, Fear, Flame, Forest, Fury, Ghost, Gold, Hill, Ice, Iron, Jewel, Knight, Lake, Light, Misty, Ocean, Rage, River, Shadow, Silver, Sky, Stone, Thunder, Valley, Wolf, Aqua, Aurora, Blaze, Bronze, Canyon, Comet, Crimson, Crystal, Cyclone, Diamond, Dragon, Echo, Eclipse, Enigma, Flame, Flare, Forest, Fossil, Garnet, Granite, Gravity, Hawk, Hurricane, Hydra, Indigo, Inferno, Ivory, Jasper, Jester, Justice, Lava, Legacy, Lightning, Lumin, Magenta, Magnet, Marvel, Maze, Meteor, Midnight, Mirage, Mistral, Nebula, Nightfall, Oasis, Obsidian, Onyx, Opal, Oracle, Ozone, Panther, Paradise, Paragon, Phoenix, Plasma, Platinum, Prism, Pulse, Pyrite, Quartz, Rainbow, Raven, Regal, River, Ruby, Rust, Sapphire, Scarlet, Shadow, Silver, Solar, Spark, Sphinx, Spectrum, Sphinx, Spice, Star, Stealth, Steel, Stone, Suede, Surge, Swift, Tangerine, Tempest, Thistle, Thunderbolt, Tidal, Titan, Tundra, Twilight, Typhoon, Vandal, Vector, Velvet, Velocity, Venture, Vortex, Waterfall, Wildfire, Willow, Winter, Wraith, Xenon, Xylophone, Yellow, Zenith, Zephyr".split(/,\s*/)
const suffixes = "Blade, Bane, Busrt, Claw, Dawn, Dusk, Fang, Flame, Frost, Gale, Gloom, Glow, Haze, Heart, Hunt, Hunter, Light, Moon, Night, Rain, Shade, Shine, Sky, Smoke, Snow, Spark, Spirit, Storm, Sun, Surge, Swift, Thorn, Tide, Wing, Wind, Angel, Arrow, Bolt, Claw, Crown, Crystal, Dagger, Dragon, Fang, Feather, Flame, Flower, Heart, Hunter, Justice, Light, Mark, Moon, Queen, Rain, Shield, Silver, Song, Spark, Star, Steel, Stone, Storm, Sword, Thief, Thorn, Thunder, Wolf, Amber, Ash, Aurora, Blossom, Bolt, Burst, Canyon, Chill, Circle, Claw, Cloud, Crest, Crystal, Daisy, Dream, Edge, Ember, Enigma, Essence, Fang, Fern, Flame, Flare, Flora, Flower, Frost, Ghost, Gleam, Glory, Heart, Haze, Hunter, Hurricane, Ice, Ivory, Jewel, Lance, Leaf, Lightning, Lily, Luster, Maelstrom, Meadow, Mist, Nebula, Ocean, Opal, Panther, Peak, Pearl, Pebble, Phoenix, Quake, Quest, Quill, Radiance, Raven, Ray, Reef, Ripple, Roar, Rose, Sabre, Sapphire, Serpent, Shadow, Shard, Silver, Sinew, Sky, Slate, Snowflake, Sparkle, Sphere, Spirit, Star, Stone, Storm, Stream, Swirl, Tidal, Tornado, Trail, Tranquility, Tremor, Trinity, Tusk, Twilight, Unity, Veil, Vengeance, Vine, Vortex, Wave, Whirl, Wildflower, Willow, Windchaser, Winter, Wish, Wonder, Wood, Wyrm, Zenith, Zephyr, Zinc".toLowerCase().split(/,\s*/)

function generateFantasySurname(prefixes: string[], suffixes: string[]) :string {
	const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
	const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
	const surname = prefix + suffix;
  
	// Check if the surname has more than three syllables
	const syllables = surname.match(/[aeiouy]+/gi)?.length;
	if (syllables != null && syllables > 3) {
	  return generateFantasySurname(prefixes, suffixes);
	}
  
	return surname;
  }

function generateName(namein: string){
	
	const malegiven = "m,male,Aiden, Alaric, Alden, Alphonse, Amadeus, Ambrose, Arcturus, Argus, Arin, Arlo, Asher, Ashton, Atticus, Augustus, Aurelian, Axel, Axl, Baird, Barrett, Bastian, Beowulf, Blaise, Balthazar, Caedmon, Caius, Callahan, Callum, Caspian, Castor, Cedric, Cian, Colton, Conrad, Cormac, Cyrus, Darian, Dante, Darion, Darius, Declan, Demetrius, Derek, Desmond, Dorian, Draco, Draven, Drexel, Easton, Edmund, Edward, Edwin, Eldon, Elric, Emery, Emrys, Endymion, Enzo, Ephraim, Eran, Eros, Eryx, Estevan, Ethan, Evander, Everett, Ezekiel, Falkor, Farley, Finnegan, Galen, Garrick, Gavin, Gavriel, Gideon, Godfrey, Granger, Greer, Gregory, Griffin, Gulliver, Hadrian, Hakon, Halcyon, Harper, Harrington, Harrison, Hawthorne, Heathcliff, Henrik, Holden, Horatio, Hunter, Ian, Ignatius, Ilias, Immanuel, Indigo, Ioan, Ira, Isaac, Isaias, Ishaq, Ivar, Ivor, Jagger, Jareth, Jarek, Jaron, Jasper, Jax, Jayce, Jayden, Jedidiah, Jensen, Jeremiah, Jericho, Jett, Jonas, Jonathan, Jorah, Jotham, Julian, Kaelan, Kaiden, Kain, Kaison, Kale, Kaleo, Kalen, Kameron, Kane, Kano, Karsten, Kasimir, Kato, Keanu, Keaton, Keir, Kellan, Keller, Kelton, Kelvin, Kemper, Kendrick, Kenji, Kenton, Keon, Kermit, Kestrel, Khalid, Kilian, Lachlan, Laird, Landon, Langdon, Leif, Lennox, Leo, Leon, Leopold, Lev, Levi, Liam, Linus, Llewellyn, Lochlan, Locke, Logan, Loran, Lorcan, Lorenzo, Lorne, Lucan, Lucian, Ludovic, Luka, Luther, Lysander, Macsen, Maddox, Magnus, Malachi, Malik, Maren, Marius, Marley, Marlon, Marsden, Maxim, Maximilian, Maxwell, Merle, Merrick, Micah, Michael, Miles, Miller, Milo, Mitchell, Montague, Montgomery, Morgan, Mordecai, Morgan, Morpheus, Mortimer, Murphy, Naoise, Napoleon, Nash, Nathaniel, Nemo, Nero, Nevan, Neville, Nico, Noah, Noble, Nolan, Norbert, Norman, Norton, Oisin, Oliver, Omar, Orion, Orson, Osborn, Oswald, Othello, Otis, Otto, Owen, Padraig, Paladin, Parker, Pascal, Patrick, Paul, Paxton, Peregrine, Perrin, Peter, Pierce, Piers, Porter, Preston, Price, Quade, Quinlan, Quinn, Quirin, Ragnar, Rainer, Raleigh, Ramsay, Ramson, Randall, Randolph, Ransom, Raphael, Raul, Rawley, Raynor, Reed, Reginald, Remington, Remy, Ren, Renley, Reuben, Rex, Rhett, Richard, Ridge, Ridley, Rio, Riven, River, Roarke, Robert, Robin, Roderick, Rodrigo, Roger, Roland, Roman, Ronan, Roosevelt, Roscoe, Ross, Rowan, Roy, Royce, Rupert, Rush, Russell, Ryan, Ryder, Sage, Salem, Salvatore, Sam, Samuel, Santiago, Sawyer, Saxon, Scott, Seamus, Sebastian, Seneca, Seth, Shane, Shaun, Sheldon, Shepard, Sherman, Silas, Simon, Sinclair, Skylar, Slade, Smith, Solomon, Spencer, Stellan, Sterling, Stone, Sullivan, Sven, Sylvester, Tadhg, Talon, Tarek, Tate, Tavian, Taylor, Teagan, Ted, Thaddeus, Theo, Theodore, Theron, Thomas, Thor, Thorin, Thorne, Tiernan, Tiger, Timothy, Titus, Tobias, Todd, Tom, Tommy, Torin, Torsten, Trace, Travis, Trent, Trey, Tristam, Tristan, Troy, Tucker, Turner, Ty, Tyler, Tyrone, Ulysses, Uriah, Uriel, Valen, Valentine, Vance, Vaughn, Victor, Vincent, Vincenzo, Virgil, Vlad, Wade, Walker, Wallace, Walt, Walter, Warren, Waylon, Webb, Wesley, Weston, Wheeler, Wiley, Wilfred, Will, William, Wilmer, Wilson, Winston, Wolfgang, Woodrow, Wyatt, Xander, Xavier, Yazan, York, Yves, Zachariah, Zane, Zavier, Zayne, Zeno, Zephyr, Zeus, Zigmund, Zoltan".split(/,\s?/)
	const femalegiven = "f,female,Aeliana, Aerin, Aida, Althea, Amara, Anara, Aria, Arwen, Asha, Aurora, Avalon, Brigid, Calantha, Calypso, Cassia, Celandine, Celestia, Cerys, Cordelia, Dariana, Delilah, Drusilla, Elara, Elena, Elowen, Elysia, Ember, Emrys, Enid, Eowyn, Esmeralda, Estelle, Evangeline, Fae, Faye, Freya, Galadriel, Ginevra, Gwendolyn, Halia, Harper, Hazel, Imogen, Isadora, Isolde, Jocasta, Kaida, Kaliyah, Katarina, Kiara, Lark, Lavinia, Lilith, Lorelei, Lucinda, Luna, Lyra, Maeve, Magnolia, Maren, Marigold, Melisande, Meridian, Merida, Minerva, Morgana, Nadia, Niamh, Nyx, Ophelia, Oriana, Pallas, Penelope, Persephone, Phoenix, Primrose, Quilla, Raine, Raven, Ravenna, Rosalind, Rosamund, Rowan, Sabrina, Salome, Seraphina, Sirena, Solstice, Suri, Tabitha, Tahlia, Thalia, Theodora, Titania, Vesper, Victoria, Violet, Vivienne, Winter, Zara, Abigail, Adalyn, Adelaide, Adeline, Adira, Agatha, Aisha, Akira, Alaina, Alaska, Aleah, Alessia, Alexia, Aliana, Aliza, Althea, Alyson, Amalia, Amaris, Ambrosia, Amelie, Amethyst, Anabelle, Anastasia, Andromeda, Angelica, Anika, Anora, Antoinette, Arabella, Arabelle, Arden, Ariadne, Arianna, Artemis, Arya, Ashlyn, Aspasia, Asteria, Athena, Audrey, Aurelia, Aurielle, Aurora, Autumn, Aveline, Averie, Azalea, Briar, Briella, Brinley, Bronte, Brynn, Cadence, Calla, Calliope, Calypso, Camila, Camille, Candace, Caoimhe, Cara, Carina, Carmen, Carolina, Casey, Cassidy, Catalina, Cate, Cecelia, Celeste, Celia, Charity, Charlotte, Chelsea, Cherise, Chiara, Chloe, Christa, Ciel, Cilla, Claire, Clara, Clarissa, Claudette, Cleo, Coco, Colette, Colleen, Constance, Coralie, Cordelia, Corinna, Cornelia, Cosette, Crescent, Crystal, Cynthia, Dahlia, Daisy, Dakota, Dale, Dalia, Dallas, Dana, Daniella, Daphne, Darcy, Daria, Darla, Davina, Daya, Dayna, Deanna, Deborah, Delaney, Demeter, Denise, Desirae, Destiny, Devyn, Diana, Dido, Dione, Dixie, Dominique, Dora, Doreen, Dorothea, Dove, Drucilla, Dulce, Dune, Eabha, Ebony, Eden, Edie, Edith, Edna, Effie, Eileen, Eira, Elaina, Elaine, Elayne, Eleanor, Eleanora, Eleni, Eleri, Elfie, Elia, Elina, Elisa, Elisabeth, Elise, Eliza, Elizabeth, Elke, Ella, Elle, Ellen, Ellie, Elsa, Elsie, Elvira, Emberly, Emerald, Emilia, Emily, Emma, Emmalyn, Emmy, Ena, Enid, Enya, Erica, Erinn, Eris, Erza, Esme, Esperanza, Esther, Estrella, Ethel, Eudora, Eugenia, Eulalia, Eunice, Eva, Evalina, Evangelina, Evelyn, Evie, Fara, Farah, Farrah, Fatima, Fawn, Fay, Felicity, Fern, Fidelia, Fiona, Flavia, Fleur, Flora, Florence, Florrie, Fran, Francesca, Frida, Gabriela, Gabriella, Gail, Galiana, Gemma, Genevieve, Georgiana, Geraldine, Gia, Gilda, Gillian, Ginevra, Ginger, Giselle, Glenda, Gloria, Grace, Gracelyn, Greta, Gretchen, Guinevere, Gwen, Gwyneth, Hadassah, Hadley, Haleigh, Hana, Hannah, Harper, Harriet, Hazel, Heather, Hedda, Heidi, Helen, Helene, Helga, Hera, Hermione, Hester, Hilary, Hilda, Holland, Holly, Honora, Hope, Hulda, Ida, Iliana, Imelda, Inara, Ines, Ingrid, Iona, Irene, Iris, Isabeau, Isadora, Isla, Itzel, Ivanna, Ivory, Ivy, Izabella, Jacqueline, Jade, Jaida, Jana, Jane, Janelle, Janet, Janice, Janine, Jasmine, Jayla, Jazmin, Jean, Jeanette, Jemima, Jenna, Jennifer, Jenny, Jessa, Jessamine, Jesse, Jessica, Jewel, Jillian, Jocelyn, Johanna, Jolie, Jordan, Josephine, Josie, Joy, Joyce, Juanita, Judith, Judy, Julia, Juliana, Julie, Juliet, Juniper, Justine, Kaida, Kailani, Kailey, Kaira, Kaitlyn, Kalina, Kalista, Kallie, Kalyani, Kamila, Kandace, Kandice, Kandra, Karina, Karissa, Karla, Kassandra, Kate, Katelyn, Katerina, Katharine, Katherine, Kathleen, Kathryn, Kathy, Katie, Katrina, Kay, Kaydence, Kayla, Kaylee, Kayleigh, Keira, Kelli, Kellie, Kelly, Kelsey, Kendall, Kenley, Kennedy, Kenzie, Kerensa, Kerri, Kerry, Kiera, Kiki, Kim, Kimberly, Kinley, Kinsley, Kirsten, Kirstin, Kit, Kora, Krista, Kristen, Kristin, Kristina, Kristine, Kylie, Kyra, Lacey, Lacie, Laila, Lana, Lara, Larissa, Latasha, Laura, Laurel, Lauren, Laurie, Lavender, Lavinia, Layla, Lea, Leah, Leandra, Leann, Leanna, Lee, Leela, Leena, Leila, Lela, Lena, Lenora, Leona, Leslie, Leticia, Letitia, Lexi, Liana, Lila, Liliana, Lilia, Lilian, Lilith, Lillian, Lillie, Lily, Linda, Lindsay, Lindsey, Lisa, Lise, Liv, Livia, Lizbeth, Lizzie, Lois, Lola, Lorraine, Lottie, Louisa, Louise, Lucia, Luciana, Lucie, Lucienne, Lucinda, Lucretia, Lucy, Ludmila, Lulu, Luna, Lydia, Lyra, Lyric, Mabel, Macie, Maddison, Madeleine, Madeline, Madelyn, Madilyn, Madison, Mae, Maegan, Magdalena, Maggie, Magnolia, Maia, Maira, Maisie, Malia, Malina, Mallory, Mandy, Mara, Marcella, Margaret, Margot, Maria, Mariam, Marian, Maribel, Marie, Marielle, Marilyn, Marisa, Marisol, Marissa, Marjorie, Markie, Marla, Marlee, Marlene, Marnie, Marsha, Marta, Martha, Mary, Maryam, Matilda, Mattie, Maud, Maureen, Maxine, Maya, Mckenna, Meagan, Mechelle, Megan, Meilani, Melinda, Melissa, Melody, Meredith, Merissa, Meryl, Mia, Michaela, Micheala, Michelle, Mila, Milana, Mildred, Milena, Miley, Millicent, Millie, Mimi, Mindy, Minerva, Miranda, Miriam, Missy, Misty, Moira, Molly, Mona, Monique, Montana, Morgan, Muriel, Mya, Myah, Myla, Myra, Nadia, Nadine, Nahla, Nancy, Naomi, Natalia, Natalie, Natasha, Naya, Neva, Neve, Nevaeh, Nevada, Nichole, Nicki, Nicola, Nicole, Nika, Nikita, Nikki, Nina, Nola, Noor, Noelle, Noemi, Nola, Noor, Norah, Nova, Novalee, Nyla, Octavia, Odessa, Olivia, Oliwia, Olympia, Oona, Opal, Oprah, Orianna, Paige, Paloma, Pamela, Pandora, Paola, Paris, Patience, Patricia, Patsy, Patti, Paula, Paulina, Pearl, Peggy, Penelope, Penny, Perla, Petra, Peyton, Philomena, Phoebe, Phoenix, Piper, Polly, Poppy, Portia, Precious, Presley, Primrose, Priscilla, Priya, Promise, Prudence, Queenie, Quiana, Quinn, Rachel, Raegan, Raelynn, Raegan, Raina, Ramona, Raven, Rayna, Rayne, Reagan, Rebekah, Regina, Reina, Renee, Rhea, Rhonda, Ria, Rhiannon, Rhoda, Rhonda, Richelle, Ricki, Rikki, Riley, Rita, River, Roberta, Rochelle, Rocio, Roma, Romina, Roni, Ronni, Rory, Rosa, Rosalie, Rosalind, Rosalyn, Rosanna, Rose, Roselyn, Rosemarie, Rosemary, Rowan, Rowena, Roxana, Roxanne, Ruby, Rumi, Rylee, Sabina, Sabrina, Sadie, Saffron, Sage, Saige, Salma, Samara, Sammie, Sandra, Sandy, Santana, Sapphire, Sara, Sarah, Sarai, Sariyah, Sasha, Saylor, Scarlett, Scottie, Selah, Selena, Selene, Selina, Semaj, Serenity, Serina, Shae, Shaina, Shana, Shania, Shaniya, Shannon, Shari, Sharlene, Sharon, Shauna, Shawn, Shawna, Shay, Shayla, Shea, Sheena, Shelby, Shelley, Shelly, Sherri, Sherrie, Sherry, Sheryl, Shirley, Shreya, Shyla, Siena, Sienna, Sierra, Sigrid, Silvana, Silvia, Simone, Sinead, Skylar, Skyler, Sloane, Sofia, Solana, Solange, Sonja, Sophia, Sophie, Soraya, Sparkle, Spencer, Stacey, Staci, Stacy, Star, Starla, Stella, Stephanie, Stephany, Stevie, Stormy, Sue, Summer, Susan, Susanna, Susannah, Susie, Sutton, Suzanna, Suzanne, Suzette, Suzie, Suzy, Sydney, Sylvie, Sylvia, Tabatha, Tabitha, Talia, Tamara, Tamera, Tami, Tamia, Tamika, Tammi, Tammie, Tammy, Tamsin, Tania, Tanisha, Tanya, Tara, Taryn, Tasha, Tasia, Tatiana, Tatum, Tawny, Taylor, Teagan, Tenley, Teresa, Teri, Terra, Terri, Terry, Tessa, Thalia, Thea, Thelma, Theodora, Theresa, Thora, Tiffany, Tilly, Tina, Tinsley, Tisha, Titania, Toni, Tonya, Topaz, Tori, Tracey, Traci, Tracy, Tricia, Trinity, Trisha, Trixie, Trudy, Tuesday, Twyla, Tyler, Uma, Una, Unique, Unity, Ursula, Valentina, Valeria, Valerie, Valery, Vanessa, Veda, Vega, Velvet, Venus, Vera, Verity, Veronica, Vesper, Vicki, Vickie, Vicky, Victoria, Vienna, Vina, Viola, Violet, Virginia, Vita, Viva, Vivian, Viviana, Vivien, Wanda, Wendy, Whitney, Willow, Wilma, Winifred, Winnie, Winter, Xenia, Ximena, Xochitl, Yara, Yasmin, Yasmine, Yolanda, Ysabel, Yvette, Yvonne, Zainab, Zara, Zaria, Zarina, Zayla, Zelda, Zella, Zelma, Zena, Zenaida, Zia, Zina, Zion, Ziva, Zoe, Zoey, Zola, Zora, Zoya, Zula".split(/,\s?/)

	let firstname = namein.split(' ', 1).first();
	let given

	if(firstname == undefined || femalegiven.indexOf(firstname) == -1) {
		given = malegiven.slice(2).shuffle().first();
	}
	else {
		given = femalegiven.slice(2).shuffle().first();
	}

	return `${given} ${generateFantasySurname(prefixes, suffixes)}`;
}

export default class FantasyNamePlugin extends Plugin {
	settings: FantasyNamePluginSettings;
	
	
	
	async onload() {
		await this.loadSettings();
		
		// This adds an editor command that can perform some operation on the current editor instance
		this.addCommand({
			id: 'sample-editor-command',
			name: 'Generate a name',
			editorCallback: (editor: Editor, view: MarkdownView) => {		
				let name = generateName(editor.getSelection());
				
				// Insert the text at the current cursor position
				editor.replaceSelection(name);
				
				// Get the current selection range
				this.app.workspace.activeEditor?.app
				let selectionRange = editor.getCursor()
				
				// Select the inserted text
				editor.setSelection(
					{
						line: selectionRange.line ,
						ch: selectionRange.ch - name.length
					},
					{
						line: selectionRange.line,
						ch: selectionRange.ch
					}
				);
				
			}
		});
	}
	
	onunload() {
		
	}
	
	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}
	
	async saveSettings() {
		await this.saveData(this.settings);
	}
}
