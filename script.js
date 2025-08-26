const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const imageInput = document.getElementById('imageInput');

const botReplies = {
    "hi": ["Hi! Kaso aasay bhai? 😄", "Hello! Kay mhantoy? 🤗", "Hi there! Changala aahes ka? 😎"],
    "Hi": ["Hi! Kaso aasay bhai? 😄", "Hello! Kay mhantoy? 🤗", "ky baki mhanty 😎"],
    "hello": ["Hello! Kaso aahes? 😄", "Hello! Masto aahes ka? 😃"],
    "Hello": ["Hello! Kaso aahes? 😄", "Hello! Masto aahes ka? 😃"],
    "bye": ["chal tr! Pudhe boluya. 👋", "Bye! pure zala chal tr! 😅"],
    "tu sang":["Me ky saangu baba, tuch snag ky ta😅","Baro aasy ky baki mhanty"],
    "ky mhanty":["Aassy jito tiyach sang ky ta sang","ky mhantaly baba"],
    "bye": ["chal tr! Pudhe boluya. 👋", "Bye! pure zala chal tr! 😅"],
    "Tu sang":["Me ky saangu baba, tuch snag ky ta😅","Baro aasy ky mhanty"],
    "Ky mhanty":["Aassy jito tiyach sang ky ta sang","ky mhantaly baba"],
    "Kaso assay":[" ky saangu baba","Baro aasy ky mhanty"],
    "kaso assay":[" ky saangu baba","Baro aasy ky mhanty"],
    "sang ky tari":["melo hyo mazya patsunach laglo","baro ma tu"],
    "baro ma": ["aasy jito khup zala baro ky hoyo 👋", "hoi re bab😅"],
      "zala ka": ["zalo re bhau, tuch kasa?","hoi zale mhantat","pura zale bhau","khoop zale mhanto","ho re, tuka kay?"],
    "kuthay ahes": ["mi ghari asaay re","ya, bazarat asaay mi","office madhye ata","gaonat jhalo bhau","ghari baslo net vaparta"],
    "kay kartoy": ["aisach baslo re","mobail vaparta 😅","net surfing karto","ghari relax karto","kuthecha special na, asaach"],
    "khoop divas zale": ["hoi re, khoop divas zale bhetlo na","ya na bhau, meeting kara ek","khara mhanty, time nighalaach na","mala pan vatla tuka sangava","bhetuchya planning kara"],
    "khau kay": ["vadapav khaun zale 😋","misal pav mast hoti","chaha baslo ata","fish curry rice khata","shebachi poli khata"],
    "pahila ka": ["hoi re, pahilo ata","nako re, ajun pahilo na","pahinyacha plan ahe","ajun kay tari baki ahe","mi pahilo re kal"],
    "ghar kay zala": ["gharat sarva mast ahet","barobar mhanty, kuthech problem na","aai-baba chan ahet","bai khup mast mood madhe","gharacha vatavaran chan ahe"],
    "vale": ["vale bhau 👋","chala, pudhe boluya","mala ata nighaycha","bye re mhantat","mi off karto, vale"],
    "bhetuya": ["ya na kal paryant","thik ahe, udya bhetuya","bhetuchya planning kara","kiti divas zale, bhetuya re","mala pan vatla bhetaych"],
    "thik ahe": ["mast re thik ahe","barobar mhanty","mala pan thik vatata","chan mood ahe ata","ho re, thik ahe"],
    "sang na": ["kai special sangaych ka?","mhant mhant mhant, sang!","kay secret aahe ka?","me aiku re, sang","jaldi sang re"],
    "kitem zata": ["kai khas na, asaach","aisach timepass","kaam hota thoda","mala tar relax vatata","mala boredom vatata"],
    "oy": ["oy bhau! kay mhantoy?","oy re kasa aahes?","oy mhanto mhanto kiti vela","oy chal bhetuya","oy kay zala?"],
    "kay zala": ["kai nahi re, asaach","aisach tension","jhakaas vatata","kay tari problem ahe","barobar jhalay"],
    "chal na": ["ya re, plan karuya","kiti divas zale, ya na","chal bhetuya bazarat","mala pan yavyach vatata","chal re movie la jau"],
    "maka jamna": ["jamta re bhau","mala jamna khoop chan vatata","jamaych plan kara","jamlo tar mast hoil","jamayla maza yeil"],
    "udya": ["udya bhetuya re","udya call karu","udya jamu ka?","udya special ahe","udya sangto"],
    "aata kay": ["aata asaach baslo re","mala tari off vatata","aata movie baghto","aata game kheltoy","aata pan chat karto"],
    "khoop kam": ["hoi re, kamach bhar ahe","mala pan kamacha stress","khoop kam jhalay office madhe","tukach help kara re","kam jhalay pan urlela"],
    "barobar": ["barobar mhanty bhau","ho re, barobar aahe","barobar asaay mhanto","barobar barobar 😅","sach mhanty tu"],
    "khoop jhala": ["hoi re, khoop jhalay","pura jhalay bhau","kai tari jhalay ata","jhala mhanto mhanto","bas ata jhala"],
    "kitla vel": ["khop vel jhalay","ajun kay tari urla ahe","pura vel nighala","khara mhanty, timepass zhala","vel fast jato re"],
    "jamna zala": ["hoi jamna zala","mala tari mast vatla","jamlo re khoop","jamaycha khup anand zala","jamna khara mast hota"],
    "game kay": ["pubg kheltoy re","ludo jamtoy","freefire mast hota","carrom kheltoy","mobile game la laglo"],
    "movie kay": ["mi movie baghtoy","mast cinema hota","ajun half movie urla","movie mast comedy hoti","paisa vasool hota"],
    "pahije": ["kay pahije tula?","mi ahe na, sang","pahije mhantat tar dya","tula pahije tar karuya","pahije tar sang"],
    "thamb": ["thamb re bhau","thamb zara","thambto mi ata","thambu ka thoda","thambto mi reply"],
    "jhopla": ["ajun jhoplo na","mala tari nid aali","jhopayla gelo re","ajun movie chalu ahe","thodi vel jhopto"],
    "utla": ["utlo re mi","ajun utlo nahi","bara utlo na","utun breakfasht kela","utun net vaparto"],
    "chaha": ["chaha banavtoy","chaha khup mast hota","chaha pila re ata","chaha jamtoy","chaha pahije ka?"],
    "pila": ["pila re ata","ajun pila nahi","kal pila hota","pila re thodya vel","mala tari pila bhau"],
    "bhuk lagli": ["vadapav khaycha vatata","bhakri zali hoti","rice curry khata","khau jamtoy","fast food khato"],
    "jaldi": ["jaldi re kar","jaldi reply de","jaldi sang","jaldi bol na","jaldi jamu"],
    "acha": ["acha mhanto?","acha barobar","acha changla vatata","acha tari kay","acha re mast"],
    "aika": ["aikatoy re","mhanto mhanto aik","aika re bhau","ajun aiktoy","aika mhantat sagle"],
    "khoop maja": ["hoi re, khup maja aali","mala tari chan vatla","maja jhala bhau","mala pan khup maja aali","maja jhala mast"],
    "khoop bore": ["bore vatata re","mala pan boredom","aisach bore jhalo","bore mood ahe","bore vatata bhau"],
    "nighu ata": ["mi nighato re","ata nighayla havay","nighu ata bhau","bye re mi gelo","pudha boluya"],
    "jamla na": ["jamla re mast","jamla bhau","jamla barobar","jamayla maja aali","jamlo tari mast"],
    "mala vatla": ["mala tari asa vatla","mala vatla tuka sangaych","mala vatla ki tu sangto","mala vatla khara mhanty","mala vatla bhau"],
    "kuthe": ["kuthe gelo re?","kuthe ahes tu?","kuthe bhettoy","kuthe zala hotas?","kuthe plan kartoy?"],
    "masta": ["masta re bhau","mala mast vatata","masta ahe situation","masta plan vatata","masta mood ahe"],
    "khoop chan": ["hoi re, khup chan ahe","chan vatata bhau","khoop chan mhanto tu","mala pan chan vatata","chan khup jhalay"],
    "ha": ["ha re barobar","ha mhanto tu","ha mhantla re","ho ho barobar","ha ahe"],
    "nai": ["nai re mhanto","nai mhanto mi","nai tari barobar","nai mhantat sagle","nai nai asa kay"],
    "yes": ["yes bhau","yes re barobar","yes mhanto","yes mhantla mi","yes barobar"],
    "no": ["no re mhanto","no mhantla mi","no nai barobar","no mhantat sagle","no mhanto mi"],
    "acha kay": ["acha kay mhanto tu","acha kay vatla","acha kay mhantat","acha kay re","acha kay jhala"],
    "thoda": ["thoda jhala re","thoda kam urla","thoda thamb","thoda jamaycha ahe","thoda relax karto"],
    "mala na": ["mala na asa vatla","mala na kay tari mhantaych","mala na sangaych hota","mala na jamtoy","mala na bhau"],
    "sahi": ["sahi re mast","sahi mhanty tu","sahi barobar","sahi vatata","sahi mast hota"],
    "kiti": ["kiti divas zale","kiti vel jhala","kiti kam urla","kiti bore vatata","kiti maja aali"],
    "jamtoy": ["jamtoy re bhau","jamtoy khup mast","jamtoy jhakaas","jamtoy mast vatata","jamtoy barobar"],
    "bhari": ["bhari re bhau","bhari mast","bhari vatata","bhari hota","bhari barobar"],
    "heavy": ["heavy re bhau","heavy mast hota","heavy vatata","heavy barobar","heavy jhala"],
    "khoop divas": ["khoop divas zale","khoop divas hota bhetlo na","khoop divas pass zhala","khoop divas jamla nahi","khoop divas asaay"],
    "ajun": ["ajun zala nahi","ajun kay tari baki","ajun jamtoy","ajun bhetlo nahi","ajun chaltoy"],
    "kal": ["kal jamlo hota","kal bhetlo","kal movie baghitle","kal mast hota","kal special hota"],
    "aaj": ["aaj khup maja aali","aaj special ahe","aaj jamaycha plan","aaj movie baghtoy","aaj ghari baslo"],
    "udya": ["udya jamayla","udya bhetuya","udya plan ahe","udya mast hoil","udya sangto"],
    "bas": ["bas re bhau","bas mhanto","bas ata kay","bas jhalay","bas thoda"],
    "chala": ["chala re jamuya","chala movie la","chala ghari","chala khayla","chala bazarat"],
    "jamaya": ["jamaycha plan kara","jamaycha hota","jamaycha urla","jamaycha mast vatata","jamaycha khoop"],
    "karu": ["karu re bhau","karu na plan","karu movie baghu","karu bhet","karu ka game"],
    "kar": ["kar re ata","kar mhantla mi","kar mhanto tu","kar barobar","kar jamtoy"],
    "mala": ["mala tari baro vatata","mala asa vatla","mala maja aali","mala tension ahe","mala khau pahije"],
    "tula": ["tula asa vatata ka?","tula jamtoy ka?","tula maja aali ka?","tula baro vatata ka?","tula khau pahije ka?"],
    "tu": ["tu kasa ahes?","tu kay mhantoy?","tu kuthe ahes?","tu bhettoy ka?","tu kay karto?"],
    "mi": ["mi baro asaay","mi asa vatato","mi asa karto","mi asa mhanto","mi game kheltoy"],
    "apan": ["apan jamuya","apan movie baghu","apan game khelaya","apan ghari basu","apan bazarat jau"],
    "sagle": ["sagle baro ahet","sagle jamtoy","sagle mast hota","sagle barobar","sagle maja kartoy"],
    "kon": ["kon hota to?","kon mhantla?","kon jhala re?","kon bhettoy?","kon barobar hota?"],
    "kuthlya": ["kuthla plan?","kuthla game?","kuthla movie?","kuthla khau?","kuthla mood?"],
    "kay": ["kay re bhau?","kay mhanto tu?","kay jhala?","kay zala re?","kay vatata?"],
    "acha re": ["acha re bhau","acha re barobar","acha re mhanty","acha re vatata","acha re jhala"],
    "ho": ["ho re bhau","ho mhanto mi","ho barobar","ho ho mast","ho jhala"],
    "are": ["are bhau","are mast vatata","are barobar","are kay re","are mhanty"],
    "oii": ["oy re bhau","oy re kay mhanty","oy re mast","oy re barobar","oy re vatata"],
    "vala": ["vala re bhau","vala mhanto","vala barobar","vala vatata","vala mast"],
    "jamala re": ["jamal re mast","jamal hota","jamal barobar","jamal vatata","jamal jhala"],
    "jamala": ["jamal re mast","jamal hota","jamal barobar","jamal vatata","jamal jhala"],
    "Hi": ["Hi! Kaso aasay bhai? 😄", "Hello! Kay mhantoy? 🤗", "Hi there! Changala aahes ka? 😎"],
    "Hi": ["Hi! Kaso aasay bhai? 😄", "Hello! Kay mhantoy? 🤗", "ky baki mhanty 😎"],
    "Hello": ["Hello! Kaso aahes? 😄", "Hello! Masto aahes ka? 😃"],
    "Hello": ["Hello! Kaso aahes? 😄", "Hello! Masto aahes ka? 😃"],
    "Bye": ["chal tr! Pudhe boluya. 👋", "Bye! pure zala chal tr! 😅"],
    "Tu sang": ["Me ky saangu baba, tuch snag ky ta😅","Baro aasy ky baki mhanty"],
    "Ky mhanty": ["Aassy jito tiyach sang ky ta sang","ky mhantaly baba"],
    "Bye": ["chal tr! Pudhe boluya. 👋", "Bye! pure zala chal tr! 😅"],
    "Tu sang": ["Me ky saangu baba, tuch snag ky ta😅","Baro aasy ky mhanty"],
    "Ky mhanty": ["Aassy jito tiyach sang ky ta sang","ky mhantaly baba"],
    "Kaso assay": [" ky saangu baba","Baro aasy ky mhanty"],
    "Kaso assay": [" ky saangu baba","Baro aasy ky mhanty"],
    "Sang ky tari": ["melo hyo mazya patsunach laglo","baro ma tu"],
    "Baro ma": ["aasy jito khup zala baro ky hoyo 👋", "hoi re bab😅"],
    "Zala ka": ["zalo re bhau, tuch kasa?","hoi zale mhantat","pura zale bhau","khoop zale mhanto","ho re, tuka kay?"],
    "Kuthay ahes": ["mi ghari asaay re","ya, bazarat asaay mi","office madhye ata","gaonat jhalo bhau","ghari baslo net vaparta"],
    "Kay kartoy": ["aisach baslo re","mobail vaparta 😅","net surfing karto","ghari relax karto","kuthecha special na, asaach"],
    "Khoop divas zale": ["hoi re, khoop divas zale bhetlo na","ya na bhau, meeting kara ek","khara mhanty, time nighalaach na","mala pan vatla tuka sangava","bhetuchya planning kara"],
    "Khau kay": ["vadapav khaun zale 😋","misal pav mast hoti","chaha baslo ata","fish curry rice khata","shebachi poli khata"],
    "Pahila ka": ["hoi re, pahilo ata","nako re, ajun pahilo na","pahinyacha plan ahe","ajun kay tari baki ahe","mi pahilo re kal"],
    "Ghar kay zala": ["gharat sarva mast ahet","barobar mhanty, kuthech problem na","aai-baba chan ahet","bai khup mast mood madhe","gharacha vatavaran chan ahe"],
    "Vale": ["vale bhau 👋","chala, pudhe boluya","mala ata nighaycha","bye re mhantat","mi off karto, vale"],
    "Bhetuya": ["ya na kal paryant","thik ahe, udya bhetuya","bhetuchya planning kara","kiti divas zale, bhetuya re","mala pan vatla bhetaych"],
    "Thik ahe": ["mast re thik ahe","barobar mhanty","mala pan thik vatata","chan mood ahe ata","ho re, thik ahe"],
    "Sang na": ["kai special sangaych ka?","mhant mhant mhant, sang!","kay secret aahe ka?","me aiku re, sang","jaldi sang re"],
    "Kitem zata": ["kai khas na, asaach","aisach timepass","kaam hota thoda","mala tar relax vatata","mala boredom vatata"],
    "Oy": ["oy bhau! kay mhantoy?","oy re kasa aahes?","oy mhanto mhanto kiti vela","oy chal bhetuya","oy kay zala?"],
    "Kay zala": ["kai nahi re, asaach","aisach tension","jhakaas vatata","kay tari problem ahe","barobar jhalay"],
    "Chal na": ["ya re, plan karuya","kiti divas zale, ya na","chal bhetuya bazarat","mala pan yavyach vatata","chal re movie la jau"],
    "Maka jamna": ["jamta re bhau","mala jamna khoop chan vatata","jamaych plan kara","jamlo tar mast hoil","jamayla maza yeil"],
    "Udya": ["udya bhetuya re","udya call karu","udya jamu ka?","udya special ahe","udya sangto"],
    "Aata kay": ["aata asaach baslo re","mala tari off vatata","aata movie baghto","aata game kheltoy","aata pan chat karto"],
    "Khoop kam": ["hoi re, kamach bhar ahe","mala pan kamacha stress","khoop kam jhalay office madhe","tukach help kara re","kam jhalay pan urlela"],
    "Barobar": ["barobar mhanty bhau","ho re, barobar aahe","barobar asaay mhanto","barobar barobar 😅","sach mhanty tu"],
    "Khoop jhala": ["hoi re, khoop jhalay","pura jhalay bhau","kai tari jhalay ata","jhala mhanto mhanto","bas ata jhala"],
    "Kitla vel": ["khop vel jhalay","ajun kay tari urla ahe","pura vel nighala","khara mhanty, timepass zhala","vel fast jato re"],
    "Jamna zala": ["hoi jamna zala","mala tari mast vatla","jamlo re khoop","jamaycha khup anand zala","jamna khara mast hota"],
    "Game kay": ["pubg kheltoy re","ludo jamtoy","freefire mast hota","carrom kheltoy","mobile game la laglo"],
    "Movie kay": ["mi movie baghtoy","mast cinema hota","ajun half movie urla","movie mast comedy hoti","paisa vasool hota"],
    "Pahije": ["kay pahije tula?","mi ahe na, sang","pahije mhantat tar dya","tula pahije tar karuya","pahije tar sang"],
    "Thamb": ["thamb re bhau","thamb zara","thambto mi ata","thambu ka thoda","thambto mi reply"],
    "Jhopla": ["ajun jhoplo na","mala tari nid aali","jhopayla gelo re","ajun movie chalu ahe","thodi vel jhopto"],
    "Utla": ["utlo re mi","ajun utlo nahi","bara utlo na","utun breakfasht kela","utun net vaparto"],
    "Chaha": ["chaha banavtoy","chaha khup mast hota","chaha pila re ata","chaha jamtoy","chaha pahije ka?"],
    "Pila": ["pila re ata","ajun pila nahi","kal pila hota","pila re thodya vel","mala tari pila bhau"],
    "Bhuk lagli": ["vadapav khaycha vatata","bhakri zali hoti","rice curry khata","khau jamtoy","fast food khato"],
    "Jaldi": ["jaldi re kar","jaldi reply de","jaldi sang","jaldi bol na","jaldi jamu"],
    "Acha": ["acha mhanto?","acha barobar","acha changla vatata","acha tari kay","acha re mast"],
    "Aika": ["aikatoy re","mhanto mhanto aik","aika re bhau","ajun aiktoy","aika mhantat sagle"],
    "Khoop maja": ["hoi re, khup maja aali","mala tari chan vatla","maja jhala bhau","mala pan khup maja aali","maja jhala mast"],
    "Khoop bore": ["bore vatata re","mala pan boredom","aisach bore jhalo","bore mood ahe","bore vatata bhau"],
    "Nighu ata": ["mi nighato re","ata nighayla havay","nighu ata bhau","bye re mi gelo","pudha boluya"],
    "Jamla na": ["jamla re mast","jamla bhau","jamla barobar","jamayla maja aali","jamlo tari mast"],
    "Mala vatla": ["mala tari asa vatla","mala vatla tuka sangaych","mala vatla ki tu sangto","mala vatla khara mhanty","mala vatla bhau"],
    "Kuthe": ["kuthe gelo re?","kuthe ahes tu?","kuthe bhettoy","kuthe zala hotas?","kuthe plan kartoy?"],
    "Masta": ["masta re bhau","mala mast vatata","masta ahe situation","masta plan vatata","masta mood ahe"],
    "Khoop chan": ["hoi re, khup chan ahe","chan vatata bhau","khoop chan mhanto tu","mala pan chan vatata","chan khup jhalay"],
    "Ha": ["ha re barobar","ha mhanto tu","ha mhantla re","ho ho barobar","ha ahe"],
    "Nai": ["nai re mhanto","nai mhanto mi","nai tari barobar","nai mhantat sagle","nai nai asa kay"],
    "Yes": ["yes bhau","yes re barobar","yes mhanto","yes mhantla mi","yes barobar"],
    "No": ["no re mhanto","no mhantla mi","no nai barobar","no mhantat sagle","no mhanto mi"],
    "Acha kay": ["acha kay mhanto tu","acha kay vatla","acha kay mhantat","acha kay re","acha kay jhala"],
    "Thoda": ["thoda jhala re","thoda kam urla","thoda thamb","thoda jamaycha ahe","thoda relax karto"],
    "Mala na": ["mala na asa vatla","mala na kay tari mhantaych","mala na sangaych hota","mala na jamtoy","mala na bhau"],
    "Sahi": ["sahi re mast","sahi mhanty tu","sahi barobar","sahi vatata","sahi mast hota"],
    "Kiti": ["kiti divas zale","kiti vel jhala","kiti kam urla","kiti bore vatata","kiti maja aali"],
    "Jamtoy": ["jamtoy re bhau","jamtoy khup mast","jamtoy jhakaas","jamtoy mast vatata","jamtoy barobar"],
    "Bhari": ["bhari re bhau","bhari mast","bhari vatata","bhari hota","bhari barobar"],
    "Heavy": ["heavy re bhau","heavy mast hota","heavy vatata","heavy barobar","heavy jhala"],
    "Khoop divas": ["khoop divas zale","khoop divas hota bhetlo na","khoop divas pass zhala","khoop divas jamla nahi","khoop divas asa"],
    "Ajun": ["ajun zala nahi","ajun kay tari baki","ajun jamtoy","ajun bhetlo nahi","ajun chaltoy"], 
"Kal": ["kal jamlo hota","kal bhetlo","kal movie baghitle","kal mast hota","kal special hota"], 
"Aaj": ["aaj khup maja aali","aaj special ahe","aaj jamaycha plan","aaj movie baghtoy","aaj ghari baslo"], 
"Udya": ["udya jamayla","udya bhetuya","udya plan ahe","udya mast hoil","udya sangto"], 
"Bas": ["bas re bhau","bas mhanto","bas ata kay","bas jhalay","bas thoda"], 
"Chala": ["chala re jamuya","chala movie la","chala ghari","chala khayla","chala bazarat"], 
"Jamaya": ["jamaycha plan kara","jamaycha hota","jamaycha urla","jamaycha mast vatata","jamaycha khoop"], 
"Karu": ["karu re bhau","karu na plan","karu movie baghu","karu bhet","karu ka game"], 
"Kar": ["kar re ata","kar mhantla mi","kar mhanto tu","kar barobar","kar jamtoy"], 
"Mala": ["mala tari baro vatata","mala asa vatla","mala maja aali","mala tension ahe","mala khau pahije"], 
"Tula": ["tula asa vatata ka?","tula jamtoy ka?","tula maja aali ka?","tula baro vatata ka?","tula khau pahije ka?"], 
"Tu": ["tu kasa ahes?","tu kay mhantoy?","tu kuthe ahes?","tu bhettoy ka?","tu kay karto?"], 
"Mi": ["mi baro asaay","mi asa vatato","mi asa karto","mi asa mhanto","mi game kheltoy"], 
"Apan": ["apan jamuya","apan movie baghu","apan game khelaya","apan ghari basu","apan bazarat jau"], 
"Sagle": ["sagle baro ahet","sagle jamtoy","sagle mast hota","sagle barobar","sagle maja kartoy"], 
"Kon": ["kon hota to?","kon mhantla?","kon jhala re?","kon bhettoy?","kon barobar hota?"], 
"Kuthlya": ["kuthla plan?","kuthla game?","kuthla movie?","kuthla khau?","kuthla mood?"], 
"Kay": ["kay re bhau?","kay mhanto tu?","kay jhala?","kay zala re?","kay vatata?"], 
"Acha re": ["acha re bhau","acha re barobar","acha re mhanty","acha re vatata","acha re jhala"], 
"Ho": ["ho re bhau","ho mhanto mi","ho barobar","ho ho mast","ho jhala"], 
"Are": ["are bhau","are mast vatata","are barobar","are kay re","are mhanty"], 
"Oii": ["oy re bhau","oy re kay mhanty","oy re mast","oy re barobar","oy re vatata"], 
"Vala": ["vala re bhau","vala mhanto","vala barobar","vala vatata","vala mast"], 
"Jamala re": ["jamal re mast","jamal hota","jamal barobar","jamal vatata","jamal jhala"], 
"Jamala": ["jamal re mast","jamal hota","jamal barobar","jamal vatata","jamal jhala"],
"Did it happen yet": ["ajun zala nahi","ajun kay tari baki","ajun jamtoy","ajun bhetlo nahi","ajun chaltoy"],
"Did you eat yesterday": ["kal jamlo hota","kal bhetlo","kal movie baghitle","kal mast hota","kal special hota"],
"Did you enjoy today": ["aaj khup maja aali","aaj special ahe","aaj jamaycha plan","aaj movie baghtoy","aaj ghari baslo"],
"Shall we meet tomorrow": ["udya jamayla","udya bhetuya","udya plan ahe","udya mast hoil","udya sangto"],
"Should we stop now": ["bas re bhau","bas mhanto","bas ata kay","bas jhalay","bas thoda"],
"Shall we go": ["chala re jamuya","chala movie la","chala ghari","chala khayla","chala bazarat"],
"Shall we plan to party": ["jamaycha plan kara","jamaycha hota","jamaycha urla","jamaycha mast vatata","jamaycha khoop"],
"Shall we do it": ["karu re bhau","karu na plan","karu movie baghu","karu bhet","karu ka game"],
"Do it now": ["kar re ata","kar mhantla mi","kar mhanto tu","kar barobar","kar jamtoy"],
"How do I feel": ["mala tari baro vatata","mala asa vatla","mala maja aali","mala tension ahe","mala khau pahije"],
"Hi": ["Hi! Kaso aasay bhai? 😄", "Hello! Kay mhantoy? 🤗", "Hi there! Changala aahes ka? 😎"],
"Hello": ["Hello! Kaso aahes? 😄", "Hello! Masto aahes ka? 😃"],
"Bye": ["chal tr! Pudhe boluya. 👋", "Bye! pure zala chal tr! 😅"],
"How are you": ["Mi baro asaay 😄", "Mast aahe re", "Thik aahe"],
"What's up": ["Kay mhantoy re bhau? 😎", "Nothing special, just chilling", "Timepass kartoy"],
"Kuthay ahes": ["Mi ghari asaay re", "Bazaarat gelo", "Office madhye aahe"],
"Where are you": ["Home bro", "In office now", "Bazaar la gelo"],
"What are you doing": ["Net surfing karto", "Movie baghtoy", "Just relaxing"],
"Kay kartoy": ["Mobail vaparta 😅", "Ghari baslo", "Kuthecha special na"],
"Let's meet": ["Bhetuchya planning kara", "Kal bhetuya re", "Ya ek divas"],
"Game kay": ["PUBG kheltoy re", "Freefire jamtoy", "Carrom jamtoy"],
"Movie kay": ["Mi movie baghtoy", "Comedy movie hoti mast", "Ajun half movie urli"],
"Are you busy": ["Ajun jamtoy", "Thoda kaam ahe", "Free aahe ata"],
"Ajun": ["Ajun zala nahi", "Ajun kay tari baki", "Ajun chaltoy"],
"Kal": ["Kal jamlo hota", "Kal mast hota", "Kal movie baghitle"],
"Aaj": ["Aaj khup maja aali", "Aaj movie baghtoy", "Aaj special ahe"],
"Udya": ["Udya bhetuya", "Udya mast hoil", "Udya plan ahe"],
"Do it": ["Kar re ata", "Ho kar mhanto mi", "Kar barobar"],
"Shall we go": ["Chala re jamuya", "Chala movie la", "Chala khayla"],
"Okay": ["Thik aahe", "Barobar mhanty", "Ho re mast"],
"Good morning": ["Good morning re bhau 🌞", "Mast zoplo ka?", "Aaj day fresh vatoy ka?"],
"Good night": ["Good night re 😴", "Sweet dreams bhau", "Kal bhetuya mag"],
"Where are we going": ["Bazaar la jau ka?", "Chala movie la", "Chala thoda drive la"],
"Are you hungry": ["Mala khau pahije 😋", "Thoda bhuk lagli", "Chaha basel ka?"],
"Feeling sleepy": ["Ajun jhopla na 😅", "Thoda jop yetoy", "Mi jhopayla gelo re"],
"Call me": ["Phone kar re bhau 📞", "Kal call karuya", "Aata call karto"],
"Message me": ["Text kar re", "Ping me bro", "WhatsApp kar"],
"Listen": ["Aika re bhau 👂", "Kay sangtoy me aik", "Aikatoy ka?"],
"Tell me": ["Sang na re 😅", "Kai special aahe ka?", "Secret sang"],
"Wait": ["Thamb zara", "Hold on bro", "Thodi vel thamb"],
"Come fast": ["Jaldi ye re", "Fast aa", "Tondala dakhav ata"],
"Go home": ["Chala ghari jau", "Jaa ghari bas", "Ata ghari pohocha"],
"Play song": ["DJ lagav na 🔊", "Song play kar", "Mala mast gana havay"],
"Let's dance": ["Nachuya re 😎", "Dance floor jamuya", "Mast nachnachi kara"],
"Let's eat": ["Chala khayla 🍲", "Vadapav jamuya", "Misal pav order kara"],
"Drink tea": ["Chaha pila", "Tea time bhau ☕", "Chaha khup mast ahe"],
"Take rest": ["Relax kar re", "Thoda bas ata", "Zop ghe"],
"Come online": ["Net la aa re", "Online ho", "Ping me once"],
"Study time": ["Books ghe ata 📚", "Thoda abhyas kar", "Exam la tayar ho"],
"Office work": ["Office madhye busy aahe", "Thoda kaam ahe", "Meeting la gelo"],
"Holiday plan": ["Trip la jau ka?", "Goa jamuya 🌴", "Picnic kara"],
"Weather today": ["Chan vatavaran ahe 🌤", "Garami jasta ahe", "Thodi thandi vatata"],
"Feeling bored": ["Bore vatata re", "Timepass karuya", "Game kheltoy"],
"Feeling happy": ["Mala khup maja aali 😁", "Mood mast aahe", "Hasa re bhau"],
"Feeling sad": ["Thoda off aahe", "Mala mood kharab", "Thoda tension ahe"],
"Where to meet": ["Kuthe bhetuya?", "Cafe madhe jamuya", "Garden la jau"],
"Let's chill": ["Mast jamuya", "Thoda relax karuya", "Hangout karuya"],
"Game time": ["PUBG chalu kara", "Ludo kheltoy", "Carrom board lavuya"],
"Movie time": ["Netflix chalu kara 🍿", "Cinema la jau", "Comedy movie lav"],
"Music time": ["Song play kar", "Mast playlist lav", "DJ set kara"],
"Selfie time": ["Photo kadhu 📸", "Selfie ghe", "Mala tag kar"],
"Party time": ["Party jamuya 🥳", "Jamna kara", "Dance ani masti"],
"Let's travel": ["Train la basuya", "Bike ride jau", "Chala Goa la"],
"Feeling tired": ["Thoda thaklo", "Rest pahije", "Bas zara"],
"Are you ready": ["Yes bro, ready aahe", "Thodi vel thamb", "Almost tayar"],
"Let's start": ["Chala suru karuya", "Begin kara", "Ata laglo"],
"Stop now": ["Bas ata", "Thamb re", "Enough jhala"],
"Do you agree": ["Ho barobar", "Yes re", "Sahi mhanty tu"],
"Nice one": ["Mast re 👌", "Heavy jhala", "Bhari vatata"]





};

// Send message
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') sendMessage();
});
imageInput.addEventListener('change', sendImage);

function sendMessage() {
    const message = userInput.value.trim();
    if(!message) return;

    displayMessage(message, 'user-message');

    // Bot random response
    const key = message.toLowerCase();
    const responses = botReplies[key] || ["ky baba lihity ky ta barobar li samaja sarkhya😅","melo lihitalo , samaja sarkhya li ky ta"];
    const response = responses[Math.floor(Math.random() * responses.length)];

    setTimeout(() => {
        displayMessage(response, 'bot-message');
    }, 500);

    userInput.value = "";
}

function sendImage() {
    const file = imageInput.files[0];
    if(!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
    const img = new Image();
    img.src = e.target.result;

    img.onload = function() {
        const info = `📷 Name: ${file.name}, Size: ${(file.size/1024).toFixed(2)} KB, Dimensions: ${img.width}x${img.height}`;
        displayMessage(img, 'user-message', true);
        displayMessage(info, 'user-message');

        setTimeout(() => {
            displayMessage("Wah! Mast photo asa, pn ky hya maka baba samjana 😍", 'bot-message');
        }, 500);
    }
}

    reader.readAsDataURL(file);

    imageInput.value = "";
}

function displayMessage(msg, className, isImage=false) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', className);

    if(isImage){
        msgDiv.appendChild(msg);
    } else {
        msgDiv.textContent = msg;
    }

   
    const timeSpan = document.createElement('div');
    timeSpan.classList.add('timestamp');
    const now = new Date();
    const time = now.getHours().toString().padStart(2,'0') + ':' + now.getMinutes().toString().padStart(2,'0');
    timeSpan.textContent = time;
    msgDiv.appendChild(timeSpan);

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
