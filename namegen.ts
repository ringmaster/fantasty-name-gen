/**
 *
 * @file A fantasy name generator library.
 * @version 1.0.1
 * @license Public Domain
 * @author Edgar Alvarado (pe1uca)
 *
 * This library is designed after the RinkWorks Fantasy Name Generator.
 * @see http://www.rinkworks.com/namegen/
 *
 * @example
 * import NameGen from "./utils/namegen";
 * let generator = new NameGen.Generator("sV'i");
 * generator.toString();  // Returns a new name each call with toString()
 * // => "entheu'loaf"
 *
 * ## Pattern Syntax
 *
 *   The toString() function creates a name generator based on an input
 * pattern. The letters s, v, V, c, B, C, i, m, M, D, and d represent
 * different types of random replacements. Everything else is produced
 * literally.
 *
 *   s - generic syllable
 *   v - vowel
 *   V - vowel or vowel combination
 *   c - consonant
 *   B - consonant or consonant combination suitable for beginning a word
 *   C - consonant or consonant combination suitable anywhere in a word
 *   i - insult
 *   m - mushy name
 *   M - mushy name ending
 *   D - consonant suited for a stupid person's name
 *   d - syllable suited for a stupid person's name (begins with a vowel)
 *
 *   All characters between parenthesis () are produced literally. For
 * example, the pattern "s(dim)", produces a random generic syllable
 * followed by "dim".
 *
 *   Characters between angle brackets <> produce patterns from the table
 * above. Imagine the entire pattern is wrapped in one of these.
 *
 *   In both types of groupings, a vertical bar | denotes a random
 * choice. Empty groups are allowed. For example, "(foo|bar)" produces
 * either "foo" or "bar". The pattern "<c|v|>" produces a constant,
 * vowel, or nothing at all.
 *
 *   An exclamation point ! means to capitalize the component that
 * follows it. For example, "!(foo)" will produce "Foo" and "v!s" will
 * produce a lowercase vowel followed by a capitalized syllable, like
 * "eRod".
 *
 *   A tilde ~ means to reverse the letters of the component that
 * follows it. For example, "~(foo)" will produce "oof". To reverse an
 * entire template, wrap it in brackets. For example, to reverse
 * "sV'i" as a whole use "~<sV'i>". The template "~sV'i" will only
 * reverse the initial syllable.
 */

namespace NameGen {

    // Middle Earth
    export let MIDDLE_EARTH = "(bil|bal|ban|hil|ham|hal|hol|hob|wil|me|or|ol|od|gor|for|fos|tol|ar|fin|ere|leo|vi|bi|bren|thor)(|go|orbis|apol|adur|mos|ri|i|na|ole|n)(|tur|axia|and|bo|gil|bin|bras|las|mac|grim|wise|l|lo|fo|co|ra|via|da|ne|ta|y|wen|thiel|phin|dir|dor|tor|rod|on|rdo|dis)";

    // Japanese Names (Constrained)
    export let JAPANESE_NAMES_CONSTRAINED = "(aka|aki|bashi|gawa|kawa|furu|fuku|fuji|hana|hara|haru|hashi|hira|hon|hoshi|ichi|iwa|kami|kawa|ki|kita|kuchi|kuro|marui|matsu|miya|mori|moto|mura|nabe|naka|nishi|no|da|ta|o|oo|oka|saka|saki|sawa|shita|shima|i|suzu|taka|take|to|toku|toyo|ue|wa|wara|wata|yama|yoshi|kei|ko|zawa|zen|sen|ao|gin|kin|ken|shiro|zaki|yuki|asa)(||||||||||bashi|gawa|kawa|furu|fuku|fuji|hana|hara|haru|hashi|hira|hon|hoshi|chi|wa|ka|kami|kawa|ki|kita|kuchi|kuro|marui|matsu|miya|mori|moto|mura|nabe|naka|nishi|no|da|ta|o|oo|oka|saka|saki|sawa|shita|shima|suzu|taka|take|to|toku|toyo|ue|wa|wara|wata|yama|yoshi|kei|ko|zawa|zen|sen|ao|gin|kin|ken|shiro|zaki|yuki|sa)";

    // Japanese Names (Diverse)
    export let JAPANESE_NAMES_DIVERSE = "(a|i|u|e|o|||||)(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)(|(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)|(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)(|(ka|ki|ki|ku|ku|ke|ke|ko|ko|sa|sa|sa|shi|shi|shi|su|su|se|so|ta|ta|chi|chi|tsu|te|to|na|ni|ni|nu|nu|ne|no|no|ha|hi|fu|fu|he|ho|ma|ma|ma|mi|mi|mi|mu|mu|mu|mu|me|mo|mo|mo|ya|yu|yu|yu|yo|ra|ra|ra|ri|ru|ru|ru|re|ro|ro|ro|wa|wa|wa|wa|wo|wo)))(|||n)";

    // Chinese Names
    export let CHINESE_NAMES = "(zh|x|q|sh|h)(ao|ian|uo|ou|ia)(|(l|w|c|p|b|m)(ao|ian|uo|ou|ia)(|n)|-(l|w|c|p|b|m)(ao|ian|uo|ou|ia)(|(d|j|q|l)(a|ai|iu|ao|i)))";

    // Greek Names
    export let GREEK_NAMES = "<s<v|V>(tia)|s<v|V>(os)|B<v|V>c(ios)|B<v|V><c|C>v(ios|os)>";

    // Hawaiian Names (1)
    export let HAWAIIAN_NAMES_1 = "((h|k|l|m|n|p|w|')|)(a|e|i|o|u)((h|k|l|m|n|p|w|')|)(a|e|i|o|u)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)(((h|k|l|m|n|p|w|')|)(a|e|i|o|u)|)";

    // Hawaiian Names (2)
    export let HAWAIIAN_NAMES_2 = "((h|k|l|m|n|p|w|)(a|e|i|o|u|a'|e'|i'|o'|u'|ae|ai|ao|au|oi|ou|eu|ei)(k|l|m|n|p|)|)(h|k|l|m|n|p|w|)(a|e|i|o|u|a'|e'|i'|o'|u'|ae|ai|ao|au|oi|ou|eu|ei)(k|l|m|n|p|)";

    // Old Latin Place Names
    export let OLD_LATIN_PLACE_NAMES = "sv(nia|lia|cia|sia)";

    // Dragons (Pern)
    export let DRAGONS_PERN = "<<s|ss>|<VC|vC|B|BVs|Vs>><v|V|v|<v(l|n|r)|vc>>(th)";

    // Dragon Riders
    export let DRAGON_RIDERS = "c'<s|cvc>";

    // Pokemon
    export let POKEMON = "<i|s>v(mon|chu|zard|rtle)";

    // Fantasy (Vowels, R, etc.)
    export let FANTASY_VOWELS_R = "(|(<B>|s|h|ty|ph|r))(i|ae|ya|ae|eu|ia|i|eo|ai|a)(lo|la|sri|da|dai|the|sty|lae|due|li|lly|ri|na|ral|sur|rith)(|(su|nu|sti|llo|ria|))(|(n|ra|p|m|lis|cal|deu|dil|suir|phos|ru|dru|rin|raap|rgue))";

    // Fantasy (S, A, etc.)
    export let FANTASY_S_A = "(cham|chan|jisk|lis|frich|isk|lass|mind|sond|sund|ass|chad|lirt|und|mar|lis|il|<BVC>)(jask|ast|ista|adar|irra|im|ossa|assa|osia|ilsa|<vCv>)(|(an|ya|la|sta|sda|sya|st|nya))";

    // Fantasy (H, L, etc.)
    export let FANTASY_H_L = "(ch|ch't|sh|cal|val|ell|har|shar|shal|rel|laen|ral|jh't|alr|ch|ch't|av)(|(is|al|ow|ish|ul|el|ar|iel))(aren|aeish|aith|even|adur|ulash|alith|atar|aia|erin|aera|ael|ira|iel|ahur|ishul)";

    // Fantasy (N, L, etc.)
    export let FANTASY_N_L = "(ethr|qil|mal|er|eal|far|fil|fir|ing|ind|il|lam|quel|quar|quan|qar|pal|mal|yar|um|ard|enn|ey)(|(<vc>|on|us|un|ar|as|en|ir|ur|at|ol|al|an))(uard|wen|arn|on|il|ie|on|iel|rion|rian|an|ista|rion|rian|cil|mol|yon)";

    // Fantasy (K, N, etc.)
    export let FANTASY_K_N = "(taith|kach|chak|kank|kjar|rak|kan|kaj|tach|rskal|kjol|jok|jor|jad|kot|kon|knir|kror|kol|tul|rhaok|rhak|krol|jan|kag|ryr)(<vc>|in|or|an|ar|och|un|mar|yk|ja|arn|ir|ros|ror)(|(mund|ard|arn|karr|chim|kos|rir|arl|kni|var|an|in|ir|a|i|as))";

    // Fantasy (J, G, Z, etc.)
    export let FANTASY_J_G_Z = "(aj|ch|etz|etzl|tz|kal|gahn|kab|aj|izl|ts|jaj|lan|kach|chaj|qaq|jol|ix|az|biq|nam)(|(<vc>|aw|al|yes|il|ay|en|tom||oj|im|ol|aj|an|as))(aj|am|al|aqa|ende|elja|ich|ak|ix|in|ak|al|il|ek|ij|os|al|im)";

    // Fantasy (K, J, Y, etc.)
    export let FANTASY_K_J_Y = "(yi|shu|a|be|na|chi|cha|cho|ksa|yi|shu)(th|dd|jj|sh|rr|mk|n|rk|y|jj|th)(us|ash|eni|akra|nai|ral|ect|are|el|urru|aja|al|uz|ict|arja|ichi|ural|iru|aki|esh)";

    // Fantasy (S, E, etc.)
    export let FANTASY_S_E = "(syth|sith|srr|sen|yth|ssen|then|fen|ssth|kel|syn|est|bess|inth|nen|tin|cor|sv|iss|ith|sen|slar|ssil|sthen|svis|s|ss|s|ss)(|(tys|eus|yn|of|es|en|ath|elth|al|ell|ka|ith|yrrl|is|isl|yr|ast|iy))(us|yn|en|ens|ra|rg|le|en|ith|ast|zon|in|yn|ys)";

    export const PH_PREFIXES = "(ash|bane|blaze|bolt|dawn|dusk|ember|frost|gale|gloom|haze|blaze|mist|moon|night|rain|shade|shine|sky|smoke|snow|storm|sun|swift|thorn|tide|vex|wind|wisp|abyss|arc|art|brave|brook|chaos|cliff|dark|death|dream|edge|fear|flame|forest|fury|ghost|gold|hill|ice|iron|jewel|knight|lake|light|misty|ocean|rage|river|shadow|silver|sky|stone|thunder|valley|wolf|aqua|aurora|blaze|bronze|canyon|comet|crimson|crystal|cyclone|diamond|dragon|echo|eclipse|enigma|flame|flare|forest|fossil|garnet|granite|gravity|hawk|hurricane|hydra|indigo|inferno|ivory|jasper|jester|justice|lava|legacy|lightning|lumin|magenta|magnet|marvel|maze|meteor|midnight|mirage|mistral|nebula|nightfall|oasis|obsidian|onyx|opal|oracle|ozone|panther|paradise|paragon|phoenix|plasma|platinum|prism|pulse|pyrite|quartz|rainbow|raven|regal|river|ruby|rust|sapphire|scarlet|shadow|silver|solar|spark|sphinx|spectrum|sphinx|spice|star|stealth|steel|stone|suede|surge|swift|tangerine|tempest|thistle|thunderbolt|tidal|titan|tundra|twilight|typhoon|vandal|vector|velvet|velocity|venture|vortex|waterfall|wildfire|willow|winter|wraith|xenon|xylophone|yellow|zenith|zephyr)"
    export const PH_SUFFIXES = "(blade|bane|busrt|claw|dawn|dusk|fang|flame|frost|gale|gloom|glow|haze|heart|hunt|hunter|light|moon|night|rain|shade|shine|sky|smoke|snow|spark|spirit|storm|sun|surge|swift|thorn|tide|wing|wind|angel|arrow|bolt|claw|crown|crystal|dagger|dragon|fang|feather|flame|flower|heart|hunter|justice|light|mark|moon|queen|rain|shield|silver|song|spark|star|steel|stone|storm|sword|thief|thorn|thunder|wolf|amber|ash|aurora|blossom|bolt|burst|canyon|chill|circle|claw|cloud|crest|crystal|daisy|dream|edge|ember|enigma|essence|fang|fern|flame|flare|flora|flower|frost|ghost|gleam|glory|heart|haze|hunter|hurricane|ice|ivory|jewel|lance|leaf|lightning|lily|luster|maelstrom|meadow|mist|nebula|ocean|opal|panther|peak|pearl|pebble|phoenix|quake|quest|quill|radiance|raven|ray|reef|ripple|roar|rose|sabre|sapphire|serpent|shadow|shard|silver|sinew|sky|slate|snowflake|sparkle|sphere|spirit|star|stone|storm|stream|swirl|tidal|tornado|trail|tranquility|tremor|trinity|tusk|twilight|unity|veil|vengeance|vine|vortex|wave|whirl|wildflower|willow|windchaser|winter|wish|wonder|wood|wyrm|zenith|zephyr|zinc)"
    
    export const PH_MALEGIVEN = "(aiden|alaric|alden|alphonse|amadeus|ambrose|arcturus|argus|arin|arlo|asher|ashton|atticus|augustus|aurelian|axel|axl|baird|barrett|bastian|beowulf|blaise|balthazar|caedmon|caius|callahan|callum|caspian|castor|cedric|cian|colton|conrad|cormac|cyrus|darian|dante|darion|darius|declan|demetrius|derek|desmond|dorian|draco|draven|drexel|easton|edmund|edward|edwin|eldon|elric|emery|emrys|endymion|enzo|ephraim|eran|eros|eryx|estevan|ethan|evander|everett|ezekiel|falkor|farley|finnegan|galen|garrick|gavin|gavriel|gideon|godfrey|granger|greer|gregory|griffin|gulliver|hadrian|hakon|halcyon|harper|harrington|harrison|hawthorne|heathcliff|henrik|holden|horatio|hunter|ian|ignatius|ilias|immanuel|indigo|ioan|ira|isaac|isaias|ishaq|ivar|ivor|jagger|jareth|jarek|jaron|jasper|jax|jayce|jayden|jedidiah|jensen|jeremiah|jericho|jett|jonas|jonathan|jorah|jotham|julian|kaelan|kaiden|kain|kaison|kale|kaleo|kalen|kameron|kane|kano|karsten|kasimir|kato|keanu|keaton|keir|kellan|keller|kelton|kelvin|kemper|kendrick|kenji|kenton|keon|kermit|kestrel|khalid|kilian|lachlan|laird|landon|langdon|leif|lennox|leo|leon|leopold|lev|levi|liam|linus|llewellyn|lochlan|locke|logan|loran|lorcan|lorenzo|lorne|lucan|lucian|ludovic|luka|luther|lysander|macsen|maddox|magnus|malachi|malik|maren|marius|marley|marlon|marsden|maxim|maximilian|maxwell|merle|merrick|micah|michael|miles|miller|milo|mitchell|montague|montgomery|morgan|mordecai|morgan|morpheus|mortimer|murphy|naoise|napoleon|nash|nathaniel|nemo|nero|nevan|neville|nico|noah|noble|nolan|norbert|norman|norton|oisin|oliver|omar|orion|orson|osborn|oswald|othello|otis|otto|owen|padraig|paladin|parker|pascal|patrick|paul|paxton|peregrine|perrin|peter|pierce|piers|porter|preston|price|quade|quinlan|quinn|quirin|ragnar|rainer|raleigh|ramsay|ramson|randall|randolph|ransom|raphael|raul|rawley|raynor|reed|reginald|remington|remy|ren|renley|reuben|rex|rhett|richard|ridge|ridley|rio|riven|river|roarke|robert|robin|roderick|rodrigo|roger|roland|roman|ronan|roosevelt|roscoe|ross|rowan|roy|royce|rupert|rush|russell|ryan|ryder|sage|salem|salvatore|sam|samuel|santiago|sawyer|saxon|scott|seamus|sebastian|seneca|seth|shane|shaun|sheldon|shepard|sherman|silas|simon|sinclair|skylar|slade|smith|solomon|spencer|stellan|sterling|stone|sullivan|sven|sylvester|tadhg|talon|tarek|tate|tavian|taylor|teagan|ted|thaddeus|theo|theodore|theron|thomas|thor|thorin|thorne|tiernan|tiger|timothy|titus|tobias|todd|tom|tommy|torin|torsten|trace|travis|trent|trey|tristam|tristan|troy|tucker|turner|ty|tyler|tyrone|ulysses|uriah|uriel|valen|valentine|vance|vaughn|victor|vincent|vincenzo|virgil|vlad|wade|walker|wallace|walt|walter|warren|waylon|webb|wesley|weston|wheeler|wiley|wilfred|will|william|wilmer|wilson|winston|wolfgang|woodrow|wyatt|xander|xavier|yazan|york|yves|zachariah|zane|zavier|zayne|zeno|zephyr|zeus|zigmund|zoltan)"
    export const PH_FEMALEGIVEN = "(aeliana|aerin|aida|althea|amara|anara|aria|arwen|asha|aurora|avalon|brigid|calantha|calypso|cassia|celandine|celestia|cerys|cordelia|dariana|delilah|drusilla|elara|elena|elowen|elysia|ember|emrys|enid|eowyn|esmeralda|estelle|evangeline|fae|faye|freya|galadriel|ginevra|gwendolyn|halia|harper|hazel|imogen|isadora|isolde|jocasta|kaida|kaliyah|katarina|kiara|lark|lavinia|lilith|lorelei|lucinda|luna|lyra|maeve|magnolia|maren|marigold|melisande|meridian|merida|minerva|morgana|nadia|niamh|nyx|ophelia|oriana|pallas|penelope|persephone|phoenix|primrose|quilla|raine|raven|ravenna|rosalind|rosamund|rowan|sabrina|salome|seraphina|sirena|solstice|suri|tabitha|tahlia|thalia|theodora|titania|vesper|victoria|violet|vivienne|winter|zara|abigail|adalyn|adelaide|adeline|adira|agatha|aisha|akira|alaina|alaska|aleah|alessia|alexia|aliana|aliza|althea|alyson|amalia|amaris|ambrosia|amelie|amethyst|anabelle|anastasia|andromeda|angelica|anika|anora|antoinette|arabella|arabelle|arden|ariadne|arianna|artemis|arya|ashlyn|aspasia|asteria|athena|audrey|aurelia|aurielle|aurora|autumn|aveline|averie|azalea|briar|briella|brinley|bronte|brynn|cadence|calla|calliope|calypso|camila|camille|candace|caoimhe|cara|carina|carmen|carolina|casey|cassidy|catalina|cate|cecelia|celeste|celia|charity|charlotte|chelsea|cherise|chiara|chloe|christa|ciel|cilla|claire|clara|clarissa|claudette|cleo|coco|colette|colleen|constance|coralie|cordelia|corinna|cornelia|cosette|crescent|crystal|cynthia|dahlia|daisy|dakota|dale|dalia|dallas|dana|daniella|daphne|darcy|daria|darla|davina|daya|dayna|deanna|deborah|delaney|demeter|denise|desirae|destiny|devyn|diana|dido|dione|dixie|dominique|dora|doreen|dorothea|dove|drucilla|dulce|dune|eabha|ebony|eden|edie|edith|edna|effie|eileen|eira|elaina|elaine|elayne|eleanor|eleanora|eleni|eleri|elfie|elia|elina|elisa|elisabeth|elise|eliza|elizabeth|elke|ella|elle|ellen|ellie|elsa|elsie|elvira|emberly|emerald|emilia|emily|emma|emmalyn|emmy|ena|enid|enya|erica|erinn|eris|erza|esme|esperanza|esther|estrella|ethel|eudora|eugenia|eulalia|eunice|eva|evalina|evangelina|evelyn|evie|fara|farah|farrah|fatima|fawn|fay|felicity|fern|fidelia|fiona|flavia|fleur|flora|florence|florrie|fran|francesca|frida|gabriela|gabriella|gail|galiana|gemma|genevieve|georgiana|geraldine|gia|gilda|gillian|ginevra|ginger|giselle|glenda|gloria|grace|gracelyn|greta|gretchen|guinevere|gwen|gwyneth|hadassah|hadley|haleigh|hana|hannah|harper|harriet|hazel|heather|hedda|heidi|helen|helene|helga|hera|hermione|hester|hilary|hilda|holland|holly|honora|hope|hulda|ida|iliana|imelda|inara|ines|ingrid|iona|irene|iris|isabeau|isadora|isla|itzel|ivanna|ivory|ivy|izabella|jacqueline|jade|jaida|jana|jane|janelle|janet|janice|janine|jasmine|jayla|jazmin|jean|jeanette|jemima|jenna|jennifer|jenny|jessa|jessamine|jesse|jessica|jewel|jillian|jocelyn|johanna|jolie|jordan|josephine|josie|joy|joyce|juanita|judith|judy|julia|juliana|julie|juliet|juniper|justine|kaida|kailani|kailey|kaira|kaitlyn|kalina|kalista|kallie|kalyani|kamila|kandace|kandice|kandra|karina|karissa|karla|kassandra|kate|katelyn|katerina|katharine|katherine|kathleen|kathryn|kathy|katie|katrina|kay|kaydence|kayla|kaylee|kayleigh|keira|kelli|kellie|kelly|kelsey|kendall|kenley|kennedy|kenzie|kerensa|kerri|kerry|kiera|kiki|kim|kimberly|kinley|kinsley|kirsten|kirstin|kit|kora|krista|kristen|kristin|kristina|kristine|kylie|kyra|lacey|lacie|laila|lana|lara|larissa|latasha|laura|laurel|lauren|laurie|lavender|lavinia|layla|lea|leah|leandra|leann|leanna|lee|leela|leena|leila|lela|lena|lenora|leona|leslie|leticia|letitia|lexi|liana|lila|liliana|lilia|lilian|lilith|lillian|lillie|lily|linda|lindsay|lindsey|lisa|lise|liv|livia|lizbeth|lizzie|lois|lola|lorraine|lottie|louisa|louise|lucia|luciana|lucie|lucienne|lucinda|lucretia|lucy|ludmila|lulu|luna|lydia|lyra|lyric|mabel|macie|maddison|madeleine|madeline|madelyn|madilyn|madison|mae|maegan|magdalena|maggie|magnolia|maia|maira|maisie|malia|malina|mallory|mandy|mara|marcella|margaret|margot|maria|mariam|marian|maribel|marie|marielle|marilyn|marisa|marisol|marissa|marjorie|markie|marla|marlee|marlene|marnie|marsha|marta|martha|mary|maryam|matilda|mattie|maud|maureen|maxine|maya|mckenna|meagan|mechelle|megan|meilani|melinda|melissa|melody|meredith|merissa|meryl|mia|michaela|micheala|michelle|mila|milana|mildred|milena|miley|millicent|millie|mimi|mindy|minerva|miranda|miriam|missy|misty|moira|molly|mona|monique|montana|morgan|muriel|mya|myah|myla|myra|nadia|nadine|nahla|nancy|naomi|natalia|natalie|natasha|naya|neva|neve|nevaeh|nevada|nichole|nicki|nicola|nicole|nika|nikita|nikki|nina|nola|noor|noelle|noemi|nola|noor|norah|nova|novalee|nyla|octavia|odessa|olivia|oliwia|olympia|oona|opal|oprah|orianna|paige|paloma|pamela|pandora|paola|paris|patience|patricia|patsy|patti|paula|paulina|pearl|peggy|penelope|penny|perla|petra|peyton|philomena|phoebe|phoenix|piper|polly|poppy|portia|precious|presley|primrose|priscilla|priya|promise|prudence|queenie|quiana|quinn|rachel|raegan|raelynn|raegan|raina|ramona|raven|rayna|rayne|reagan|rebekah|regina|reina|renee|rhea|rhonda|ria|rhiannon|rhoda|rhonda|richelle|ricki|rikki|riley|rita|river|roberta|rochelle|rocio|roma|romina|roni|ronni|rory|rosa|rosalie|rosalind|rosalyn|rosanna|rose|roselyn|rosemarie|rosemary|rowan|rowena|roxana|roxanne|ruby|rumi|rylee|sabina|sabrina|sadie|saffron|sage|saige|salma|samara|sammie|sandra|sandy|santana|sapphire|sara|sarah|sarai|sariyah|sasha|saylor|scarlett|scottie|selah|selena|selene|selina|semaj|serenity|serina|shae|shaina|shana|shania|shaniya|shannon|shari|sharlene|sharon|shauna|shawn|shawna|shay|shayla|shea|sheena|shelby|shelley|shelly|sherri|sherrie|sherry|sheryl|shirley|shreya|shyla|siena|sienna|sierra|sigrid|silvana|silvia|simone|sinead|skylar|skyler|sloane|sofia|solana|solange|sonja|sophia|sophie|soraya|sparkle|spencer|stacey|staci|stacy|star|starla|stella|stephanie|stephany|stevie|stormy|sue|summer|susan|susanna|susannah|susie|sutton|suzanna|suzanne|suzette|suzie|suzy|sydney|sylvie|sylvia|tabatha|tabitha|talia|tamara|tamera|tami|tamia|tamika|tammi|tammie|tammy|tamsin|tania|tanisha|tanya|tara|taryn|tasha|tasia|tatiana|tatum|tawny|taylor|teagan|tenley|teresa|teri|terra|terri|terry|tessa|thalia|thea|thelma|theodora|theresa|thora|tiffany|tilly|tina|tinsley|tisha|titania|toni|tonya|topaz|tori|tracey|traci|tracy|tricia|trinity|trisha|trixie|trudy|tuesday|twyla|tyler|uma|una|unique|unity|ursula|valentina|valeria|valerie|valery|vanessa|veda|vega|velvet|venus|vera|verity|veronica|vesper|vicki|vickie|vicky|victoria|vienna|vina|viola|violet|virginia|vita|viva|vivian|viviana|vivien|wanda|wendy|whitney|willow|wilma|winifred|winnie|winter|xenia|ximena|xochitl|yara|yasmin|yasmine|yolanda|ysabel|yvette|yvonne|zainab|zara|zaria|zarina|zayla|zelda|zella|zelma|zena|zenaida|zia|zina|zion|ziva|zoe|zoey|zola|zora|zoya|zula)";
    
    export const PH_WHOLENAME = `!<${PH_MALEGIVEN}|${PH_FEMALEGIVEN}> !${PH_PREFIXES}${PH_SUFFIXES}`;
    export const PH_MALENAME = `!${PH_MALEGIVEN} !${PH_PREFIXES}${PH_SUFFIXES}`;
    export const PH_FEMALENAME = `!${PH_FEMALEGIVEN} !${PH_PREFIXES}${PH_SUFFIXES}`;

    const symbolIDs = 'svVcBCimMDd';

    type SymbolID = typeof symbolIDs[number];

    const symbolMap: Record<SymbolID, string[]> = {
        s: ['ach', 'ack', 'ad', 'age', 'ald', 'ale', 'an', 'ang', 'ar', 'ard',
            'as', 'ash', 'at', 'ath', 'augh', 'aw', 'ban', 'bel', 'bur', 'cer',
            'cha', 'che', 'dan', 'dar', 'del', 'den', 'dra', 'dyn', 'ech', 'eld',
            'elm', 'em', 'en', 'end', 'eng', 'enth', 'er', 'ess', 'est', 'et',
            'gar', 'gha', 'hat', 'hin', 'hon', 'ia', 'ight', 'ild', 'im', 'ina',
            'ine', 'ing', 'ir', 'is', 'iss', 'it', 'kal', 'kel', 'kim', 'kin',
            'ler', 'lor', 'lye', 'mor', 'mos', 'nal', 'ny', 'nys', 'old', 'om',
            'on', 'or', 'orm', 'os', 'ough', 'per', 'pol', 'qua', 'que', 'rad',
            'rak', 'ran', 'ray', 'ril', 'ris', 'rod', 'roth', 'ryn', 'sam',
            'say', 'ser', 'shy', 'skel', 'sul', 'tai', 'tan', 'tas', 'ther',
            'tia', 'tin', 'ton', 'tor', 'tur', 'um', 'und', 'unt', 'urn', 'usk',
            'ust', 'ver', 'ves', 'vor', 'war', 'wor', 'yer'],
        v: ['a', 'e', 'i', 'o', 'u', 'y'],
        V: ['a', 'e', 'i', 'o', 'u', 'y', 'ae', 'ai', 'au', 'ay', 'ea', 'ee',
            'ei', 'eu', 'ey', 'ia', 'ie', 'oe', 'oi', 'oo', 'ou', 'ui'],
        c: ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r',
            's', 't', 'v', 'w', 'x', 'y', 'z'],
        B: ['b', 'bl', 'br', 'c', 'ch', 'chr', 'cl', 'cr', 'd', 'dr', 'f', 'g',
            'h', 'j', 'k', 'l', 'll', 'm', 'n', 'p', 'ph', 'qu', 'r', 'rh', 's',
            'sch', 'sh', 'sl', 'sm', 'sn', 'st', 'str', 'sw', 't', 'th', 'thr',
            'tr', 'v', 'w', 'wh', 'y', 'z', 'zh'],
        C: ['b', 'c', 'ch', 'ck', 'd', 'f', 'g', 'gh', 'h', 'k', 'l', 'ld', 'll',
            'lt', 'm', 'n', 'nd', 'nn', 'nt', 'p', 'ph', 'q', 'r', 'rd', 'rr',
            'rt', 's', 'sh', 'ss', 'st', 't', 'th', 'v', 'w', 'y', 'z'],
        i: ['air', 'ankle', 'ball', 'beef', 'bone', 'bum', 'bumble', 'bump',
            'cheese', 'clod', 'clot', 'clown', 'corn', 'dip', 'dolt', 'doof',
            'dork', 'dumb', 'face', 'finger', 'foot', 'fumble', 'goof',
            'grumble', 'head', 'knock', 'knocker', 'knuckle', 'loaf', 'lump',
            'lunk', 'meat', 'muck', 'munch', 'nit', 'numb', 'pin', 'puff',
            'skull', 'snark', 'sneeze', 'thimble', 'twerp', 'twit', 'wad',
            'wimp', 'wipe'],
        m: ['baby', 'booble', 'bunker', 'cuddle', 'cuddly', 'cutie', 'doodle',
            'foofie', 'gooble', 'honey', 'kissie', 'lover', 'lovey', 'moofie',
            'mooglie', 'moopie', 'moopsie', 'nookum', 'poochie', 'poof',
            'poofie', 'pookie', 'schmoopie', 'schnoogle', 'schnookie',
            'schnookum', 'smooch', 'smoochie', 'smoosh', 'snoogle', 'snoogy',
            'snookie', 'snookum', 'snuggy', 'sweetie', 'woogle', 'woogy',
            'wookie', 'wookum', 'wuddle', 'wuddly', 'wuggy', 'wunny'],
        M: ['boo', 'bunch', 'bunny', 'cake', 'cakes', 'cute', 'darling',
            'dumpling', 'dumplings', 'face', 'foof', 'goo', 'head', 'kin',
            'kins', 'lips', 'love', 'mush', 'pie', 'poo', 'pooh', 'pook', 'pums'],
        D: ['b', 'bl', 'br', 'cl', 'd', 'f', 'fl', 'fr', 'g', 'gh', 'gl', 'gr',
            'h', 'j', 'k', 'kl', 'm', 'n', 'p', 'th', 'w'],
        d: ['elch', 'idiot', 'ob', 'og', 'ok', 'olph', 'olt', 'omph', 'ong',
            'onk', 'oo', 'oob', 'oof', 'oog', 'ook', 'ooz', 'org', 'ork', 'orm',
            'oron', 'ub', 'uck', 'ug', 'ulf', 'ult', 'um', 'umb', 'ump', 'umph',
            'un', 'unb', 'ung', 'unk', 'unph', 'unt', 'uzz']
    };

    enum Wrappers {
        capitalizer,
        reverser
    }

    enum GroupTypes {
        symbol,
        literal
    }

    class Group {
        private wrappers: Wrappers[] = [];
        private set: Generator[] = [];

        public type: GroupTypes;

        constructor(type: GroupTypes) {
            this.type = type;
        }

        public produce(): Generator {
            switch (this.set.length) {
                case 0:
                    return new Literal('');
                case 1:
                    return this.set[0];
                default:
                    return new Random(this.set);
            }
        }

        public split(): void {
            if (this.set.length == 0) {
                this.set.push(new Sequence([]));
            }
            this.set.push(new Sequence([]));
        }

        public wrap(type: Wrappers): void {
            this.wrappers.push(type);
        }

        public add(a: Generator | string): void {
            if ((typeof a) === 'object') {
                let g = <Generator>a;
                while (this.wrappers.length > 0) {
                    switch (this.wrappers.pop()) {
                        case Wrappers.reverser:
                            g = new Reverser(g);
                            break;
                        case Wrappers.capitalizer:
                            g = new Capitalizer(g);
                            break;
                    }
                }
                if (this.set.length == 0) {
                    this.set.push(new Sequence([]));
                }
                this.set[this.set.length - 1].add(g);
                return;
            }
            let chr = <string>a;
            let g = new Random([]);
            g.add(new Literal(chr));
            this.add(g);
        }
    }

    class GroupSymbol extends Group {
        constructor() {
            super(GroupTypes.symbol);
        }

        public add(a: string): void {
            let g = new Random([]);
            let symbols = symbolMap[a];
            if (symbols) {
                for (const key in symbols) {
                    g.add(new Literal(symbols[key]));
                }
            } else {
                g.add(new Literal(a));
            }
            super.add(g);
        }
    }

    class GroupLiteral extends Group {
        constructor() {
            super(GroupTypes.literal);
        }
    }

    export class Generator {

        protected generators: Generator[] = [];

        constructor(pattern: null | string | Generator[] = null, collapse_triples: boolean = true) {
            if ((typeof pattern) === 'object') {
                this.generators = <Generator[]>pattern;
                return;
            }

            let last: Generator;
            let stack: Group[] = [];
            let top: Group = new GroupSymbol();

            let patternStr = <string>pattern;

            for (let i = 0; i < patternStr.length; i++) {
                const chr = patternStr[i];
                switch (chr) {
                    case '<':
                        stack.push(top);
                        top = new GroupSymbol();
                        break;
                    case '(':
                        stack.push(top);
                        top = new GroupLiteral();
                        break;
                    case '>':
                    case ')':
                        if (stack.length == 0) {
                            throw new Error('Unbalanced brackets');
                        } else if (chr === '>' && top.type != GroupTypes.symbol) {
                            throw new Error('Unexpected \'>\' in pattern');
                        } else if (chr === ')' && top.type != GroupTypes.literal) {
                            throw new Error('Unexpected \')\' in pattern');
                        }
                        last = top.produce();
                        top = stack.pop()!;
                        top.add(last);
                        break;
                    case '|':
                        top.split();
                        break;
                    case '!':
                        if (top.type == GroupTypes.symbol) {
                            top.wrap(Wrappers.capitalizer);
                        } else {
                            top.add(chr);
                        }
                        break;
                    case '~':
                        if (top.type == GroupTypes.symbol) {
                            top.wrap(Wrappers.reverser);
                        } else {
                            top.add(chr);
                        }
                        break;
                    default:
                        top.add(chr);
                        break;
                }
            }

            if (stack.length != 0) {
                throw new Error('Missing closing brackets');
            }

            let g: Generator = top.produce();
            if (collapse_triples) {
                g = new Collapser(g);
            }
            this.add(g);
        }

        public combinations(): number {
            let total = 1;
            this.generators.forEach((g, i, a) => {
                total *= g.combinations();
            });
            return total;
        }

        public min(): number {
            let final = 0;
            this.generators.forEach((g, i, a) => {
                final += g.min();
            });
            return final;
        }

        public max(): number {
            let final = 0;
            this.generators.forEach((g, i, a) => {
                final += g.max();
            });
            return final;
        }

        public toString(): string {
            let str = '';
            this.generators.forEach((g, i, a) => {
                str += g.toString();
            });
            return str;
        }

        public add(g: Generator): void {
            this.generators.push(g);
        }
    }

    class Random extends Generator {
        constructor(generators: Generator[]) {
            super(generators);
        }

        public combinations(): number {
            let total = 0;
            this.generators.forEach((g, i, a) => {
                total += g.combinations();
            });
            return total ? total : 1;
        }

        public min(): number {
            let final = -1;
            this.generators.forEach((g, i, a) => {
                let curr = g.min();
                if (curr < final) {
                    final = curr;
                }
            });
            return final;
        }

        public max(): number {
            let final = 0;
            this.generators.forEach((g, i, a) => {
                let curr = g.max();
                if (curr > final) {
                    final = curr;
                }
            });
            return final;
        }

        public toString(): string {
            if (!this.generators) {
                return '';
            }
            let rnd = Math.floor(Math.random() * this.generators.length);
            return this.generators[rnd].toString();
        }
    }

    class Sequence extends Generator {
        constructor(generators: Generator[]) {
            super(generators);
        }
    }

    class Literal extends Generator {
        private value: string;
        constructor(value: string) {
            super();
            this.value = value;
        }

        public combinations(): number {
            return 1;
        }

        public min(): number {
            return this.value.length;
        }

        public max(): number {
            return this.value.length;
        }

        public toString(): string {
            return this.value;
        }
    }

    class Reverser extends Generator {
        constructor(generator: Generator) {
            super([generator]);
        }

        public toString(): string {
            return super.toString().split('').reverse().join('');
        }
    }

    class Capitalizer extends Generator {
        constructor(generator: Generator) {
            super([generator]);
        }

        public toString(): string {
            let str = super.toString();
            if (!str) return '';
            return str[0].toUpperCase() + str.substr(1).toLowerCase();
        }
    }

    class Collapser extends Generator {
        constructor(generator: Generator) {
            super([generator]);
        }

        public toString(): string {
            let str = super.toString();
            let out = '';
            let cnt = 0;
            let pch = '';
            for (let i = 0; i < str.length; i++) {
                const chr = str[i];
                if (chr === pch) {
                    cnt++;
                } else {
                    cnt = 0;
                }
                let mch = 2;
                switch (chr) {
                    case 'a':
                    case 'h':
                    case 'i':
                    case 'j':
                    case 'q':
                    case 'u':
                    case 'v':
                    case 'w':
                    case 'x':
                    case 'y':
                        mch = 1;
                }
                if (cnt < mch) {
                    out += chr;
                }
                pch = chr;
            }
            return out;
        }
    }
}

export default NameGen;