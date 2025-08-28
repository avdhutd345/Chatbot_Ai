// Chat elements
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const imageInput = document.getElementById('imageInput');

// Your big botReplies object here...
const botReplies = {
  "Hi": [
    "Hi! Kaso aasay bhau 😄",
    "Hello! Kay mhantoy 🤗",
    "Hi there! Changla aahes ka 😎",
    "Kay baki mhanty 😎"
  ],
  "Hello": [
    "Hello! Kaso aahes 😄",
    "Hello! Masta aahes ka 😃"
  ],
  "Bye": [
    "Chal tar! Pudhe boluya 👋",
    "Bye! Pura zala chal tar 😅"
  ],
  "Tu sang": [
    "Mi kay sangu baba, tu sang kay ta 😅",
    "Barobar ahe kay mhanty"
  ],
  "Ky mhanty": [
    "Aasay jhala tiyach sang kay ta sang",
    "Kay mhantalas baba"
  ],
  "Kaso assay": [
    "Kay sangu baba",
    "Barobar ahe kay mhanty"
  ],
  "Sang ky tari": [
    "Melo hyo mazyapatsunach lagla",
    "Barobar mi tu"
  ],
  "Baro ma": [
    "Aasay jhala khup zala barobar kay hoto 👋",
    "Ho re baba 😅"
  ],
  "Zala ka": [
    "Zala re bhau tuch kasa",
    "Ho zala mhantat",
    "Pura zala bhau",
    "Khup zala mhanto",
    "Ho re tuka kay"
  ],
  "Kuthay ahes": [
    "Mi ghari asay re",
    "Ya bazarat asay mi",
    "Office madhe ata",
    "Gaavat jhalo bhau",
    "Ghari baslo net vaparat"
  ],
  "Kay kartoy": [
    "Aisach baslo re",
    "Mobile vaparat 😅",
    "Net surfing karto",
    "Ghari relax karto",
    "Kuthecha special na aisach"
  ],
  "Khoop divas zale": [
    "Ho re khup divas zale bhetlo na",
    "Ya na bhau meeting kara ek",
    "Khara mhanty time nighaloch na",
    "Mala pan vatla tuka sangu",
    "Bhetaycha planning kara"
  ],
  "Khau kay": [
    "Vadapav khaun zala 😋",
    "Misal pav mast hoti",
    "Chaha basla ata",
    "Fish curry rice khata",
    "Shevanchi poli khata"
  ],
  "Pahila ka": [
    "Ho re pahila ata",
    "Nako re ajun pahila na",
    "Pahinyacha plan ahe",
    "Ajun kay tari baki ahe",
    "Mi pahila re kal"
  ],
  "Ghar kay zala": [
    "Gharat sarva masta ahet",
    "Barobar mhanty kuthech problem na",
    "Aai-baba chan ahet",
    "Bai khup masta mood madhe",
    "Gharacha vatavaran chan ahe"
  ],
  "Vale": [
    "Vale bhau 👋",
    "Chala pudhe boluya",
    "Mala ata nighaycha",
    "Bye re mhantat",
    "Mi off karto vale"
  ],
  "Bhetuya": [
    "Ya na kal paryanta",
    "Thik ahe udya bhetuya",
    "Bhetaycha planning kara",
    "Kiti divas zale bhetuya re",
    "Mala pan vatla bhetaych"
  ],
  "Thik ahe": [
    "Masta re thik ahe",
    "Barobar mhanty",
    "Mala pan thik vatata",
    "Chan mood ahe ata",
    "Ho re thik ahe"
  ],
  "Sang na": [
    "Kay special sanguyach ka",
    "Mhant mhant sang",
    "Kay secret ahe ka",
    "Mi aiku re sang",
    "Jaldi sang re"
  ],
  "Kitem zata": [
    "Kay khas na aisach",
    "Aisach timepass",
    "Kaam hota thoda",
    "Mala tar relax vatata",
    "Mala boredom vatata"
  ],
  "Oy": [
    "Oy bhau kay mhantoy",
    "Oy re kasa aahes",
    "Oy mhanto mhanto kiti vela",
    "Oy chal bhetuya",
    "Oy kay zala"
  ],
  "Kay zala": [
    "Kay nahi re aisach",
    "Aisach tension",
    "Zhakkas vatata",
    "Kay tari problem ahe",
    "Barobar jhala"
  ],
  "Chal na": [
    "Ya re plan karuya",
    "Kiti divas zale ya na",
    "Chal bhetuya bazarat",
    "Mala pan yavaych vatata",
    "Chal re movie la jau"
  ],
  "Maka jamna": [
    "Jamta re bhau",
    "Mala jamna khup chan vatata",
    "Jamaycha plan kara",
    "Jamla tar masta hoil",
    "Jamayla maza yeil"
  ],
  "Udya ky tr": [
    "Udya bhetuya re",
    "Udya call karu",
    "Udya jamu ka",
    "Udya special ahe",
    "Udya sangu"
  ],
  "Jamla ma": [
    "Jamla re masta",
    "Jamla bhau",
    "Jamla barobar",
    "Jamayla maja aali",
    "Jamla tari masta"
  ],
  "Mala vatla": [
    "Mala tari asa vatla",
    "Mala vatla tuka sanguyach",
    "Mala vatla ki tu sanguy",
    "Mala vatla khara mhanty",
    "Mala vatla bhau"
  ],
  "Kuthe": [
    "Kuthe gela re",
    "Kuthe aahes tu",
    "Kuthe bhettoy",
    "Kuthe zala hotas",
    "Kuthe plan kartoy"
  ],
  "Masta": [
    "Masta re bhau",
    "Mala masta vatata",
    "Masta ahe situation",
    "Masta plan vatata",
    "Masta mood ahe"
  ],
  "Khoop chan": [
    "Ho re khup chan ahe",
    "Chan vatata bhau",
    "Khup chan mhanto tu",
    "Mala pan chan vatata",
    "Chan khup jhala"
  ],
  "Ha": [
    "Ha re barobar",
    "Ha mhanto tu",
    "Ha mhantla re",
    "Ho ho barobar",
    "Ha ahe"
  ],
  "Nai": [
    "Nai re mhanto",
    "Nai mhanto mi",
    "Nai tari barobar",
    "Nai mhantat sagle",
    "Nai nai asa kay"
  ],
  "Yes": [
    "Yes bhau",
    "Yes re barobar",
    "Yes mhanto",
    "Yes mhantla mi",
    "Yes barobar"
  ],
  "No": [
    "No re mhanto",
    "No mhantla mi",
    "No nai barobar",
    "No mhantat sagle",
    "No mhanto mi"
  ],
  "Acha kay": [
    "Acha kay mhanto tu",
    "Acha kay vatla",
    "Acha kay mhantat",
    "Acha kay re",
    "Acha kay jhala"
  ],
  "Thoda": [
    "Thoda jhala re",
    "Thoda kaam urla",
    "Thoda thamb",
    "Thoda jamaycha ahe",
    "Thoda relax karto"
  ],
  "Mala na": [
    "Mala na asa vatla",
    "Mala na kay tari sanguyach",
    "Mala na sanguyach hota",
    "Mala na jamtoy",
    "Mala na bhau"
  ],
  "Aaj": [
    "Aaj khup maja aali",
    "Aaj movie baghtoy",
    "Aaj special ahe",
    "Aaj jamaycha plan",
    "Aaj ghari baslo"
  ],
  "Udya": [
    "Udya jamel ka",
    "Udya bhetuya",
    "Udya plan ahe",
    "Udya masta hoil",
    "Udya sangu"
  ],
  "Bas": [
    "Bas re bhau",
    "Bas mhanto",
    "Bas ata kay",
    "Bas jhala",
    "Bas thoda"
  ],
  "Chala": [
    "Chala re jamuya",
    "Chala movie la",
    "Chala ghari",
    "Chala khayla",
    "Chala bazarat"
  ],
  "Jamaya": [
    "Jamaycha plan kara",
    "Jamaycha hota",
    "Jamaycha urla",
    "Jamaycha masta vatata",
    "Jamaycha khup"
  ],
  "Karu": [
    "Karu re bhau",
    "Karu na plan",
    "Karu movie baghu",
    "Karu bhet",
    "Karu ka game"
  ],
  "Kar": [
    "Kar re ata",
    "Kar mhantla mi",
    "Kar mhanto tu",
    "Kar barobar",
    "Kar jamtoy"
  ],
  "Mala": [
    "Mala tari barobar vatata",
    "Mala asa vatla",
    "Mala maja aali",
    "Mala tension ahe",
    "Mala khau pahije"
  ],
  "Tula": [
    "Tula asa vatata ka",
    "Tula jamtoy ka",
    "Tula maja aali ka",
    "Tula barobar vatata ka",
    "Tula khau pahije ka"
  ],
  "Tu": [
    "Tu kasa aahes",
    "Tu kay mhantoy",
    "Tu kuthe aahes",
    "Tu bhettoy ka",
    "Tu kay karto"
  ],
  "Mi": [
    "Mi barobar asay",
    "Mi asa vatato",
    "Mi asa karto",
    "Mi asa mhanto",
    "Mi game kheltoy"
  ],
  "Apan": [
    "Apan jamuya",
    "Apan movie baghu",
    "Apan game kheluya",
    "Apan ghari basu",
    "Apan bazarat jau"
  ],
  "Sagle": [
    "Sagle barobar ahet",
    "Sagle jamtoy",
    "Sagle masta hota",
    "Sagle barobar",
    "Sagle maja kartoy"
  ],
  "Kon": [
    "Kon hota to",
    "Kon mhantla",
    "Kon jhala re",
    "Kon bhettoy",
    "Kon barobar hota"
  ],
  "Kuthlya": [
    "Kuthla plan",
    "Kuthla game",
    "Kuthla movie",
    "Kuthla khau",
    "Kuthla mood"
  ],
  "Kay": [
    "Kay re bhau",
    "Kay mhanto tu",
    "Kay jhala",
    "Kay zala re",
    "Kay vatata"
  ],
  "Acha re": [
    "Acha re bhau",
    "Acha re barobar",
    "Acha re mhanty",
    "Acha re vatata",
    "Acha re jhala"
  ],
  "Ho": [
    "Ho re bhau",
    "Ho mhanto mi",
    "Ho barobar",
    "Ho ho masta",
    "Ho jhala"
  ],
  "Are": [
    "Are bhau",
    "Are masta vatata",
    "Are barobar",
    "Are kay re",
    "Are mhanty"
  ],
  "Oii": [
    "Oii re bhau",
    "Oii re kay mhanty",
    "Oii re masta",
    "Oii re barobar",
    "Oii re vatata"
  ],
  "Vala": [
    "Vala re bhau",
    "Vala mhanto",
    "Vala barobar",
    "Vala vatata",
    "Vala masta"
  ],
  "Jamala": [
    "Jamala re masta",
    "Jamala hota",
    "Jamala barobar",
    "Jamala vatata",
    "Jamala jhala"
  ],
  "Did it happen yet": [
    "Ajun zala nahi",
    "Ajun kay tari baki",
    "Ajun jamtoy",
    "Ajun bhetla nahi",
    "Ajun chaltoy"
  ],
  "Did you eat yesterday": [
    "Ho baba jhevala",
    "Nahi re",
    "Kal movie baghitla",
    "Kal masta hota",
    "Kal special hota"
  ],
  "Did you enjoy today": [
    "Aaj khup maja aali",
    "Aaj special ahe",
    "Aaj jamaycha plan",
    "Aaj movie baghtoy",
    "Aaj ghari baslo"
  ],
  "Shall we meet tomorrow": [
    "Udya jamel ka",
    "Udya bhetuya",
    "Udya plan ahe",
    "Udya masta hoil",
    "Udya sangu"
  ],
  "Should we stop now": [
    "Bas re bhau",
    "Bas mhanto",
    "Bas ata kay",
    "Bas jhala",
    "Bas thoda"
  ],
  "Shall we go": [
    "Chala re jamuya",
    "Chala movie la",
    "Chala ghari",
    "Chala khayla",
    "Chala bazarat"
  ],
  "Shall we plan to party": [
    "Jamaycha plan kara",
    "Jamaycha hota",
    "Jamaycha urla",
    "Jamaycha masta vatata",
    "Jamaycha khup"
  ],
  "Shall we do it": [
    "Karu re bhau",
    "Karu na plan",
    "Karu movie baghu",
    "Karu bhet",
    "Karu ka game"
  ],
  "Do it now": [
    "Kar re ata",
    "Kar mhantla mi",
    "Kar mhanto tu",
    "Kar barobar",
    "Kar jamtoy"
  ],
  "How do I feel": [
    "Mala tari barobar vatata",
    "Mala asa vatla",
    "Mala maja aali",
    "Mala tension ahe",
    "Mala khau pahije"
  ],
  "Ganpatik ye re": [
    "Mi kaso yeu baba mi bot",
    "Kay maskari kartoy mi kaso yeu mi manus thodi asay",
    "Bhari vatata sanglyas ta"
  ],
  "Kay lavdya": [
    "Gali detos madharchod"
  ],
  "Lavdya": [
    "Gali detos madharchod"
  ],
  "Bc": [
    "Gali detos bhikarchota"
  ],
  "suru kar": [
    "Ho re bhau, suru kar",
    "Nay re, suru kar masta ahe",
    "Tu suru kar bagh",
    "Bhau, suru kar",
    "Masta bhau, suru kar"
  ],
  "tula": [
    "Ho re bhau, tula vat ahe",
    "Nay re, tula masta ahe",
    "Tu tula bagh",
    "Bhau, tula suru kar",
    "Masta bhau, tula vat ahe"
  ],
  "tu": [
    "Ho re bhau, tu masta aahes",
    "Nay re, tu barobar aahes",
    "Tu bagh",
    "Bhau, tu suru kar",
    "Masta bhau, tu masta aahes"
  ],
  "mi": [
    "Ho re bhau, mi masta aahes",
    "Nay re, mi barobar aahes",
    "Mi bagh",
    "Bhau, mi suru kar",
    "Masta bhau, mi masta aahes"
  ],
  "apan": [
    "Ho re bhau, apan masta aahot",
    "Nay re, apan barobar aahot",
    "Apan bagh",
    "Bhau, apan suru kar",
    "Masta bhau, apan masta aahot"
  ],
  "sagle": [
    "Ho re bhau, sagle thik ahet",
    "Nay re, sagle barobar ahet",
    "Tu sagle bagh",
    "Bhau, sagle suru kar",
    "Masta bhau, sagle thik ahet"
  ],
  "kon": [
    "Ho re bhau, kon yetos",
    "Nay re, kon masta ahe",
    "Tu kon bagh",
    "Bhau, kon suru kar",
    "Masta bhau, kon yetos"
  ],
  "kuthlya": [
    "Ho re bhau, kuthlya masta ahe",
    "Nay re, kuthlya barobar ahe",
    "Tu kuthlya bagh",
    "Bhau, kuthlya suru kar",
    "Masta bhau, kuthlya masta ahe"
  ],
  "kay": [
    "Ho re bhau, kay chalay",
    "Nay re, kay barobar ahe",
    "Tu kay bagh",
    "Bhau, kay suru kar",
    "Masta bhau, kay chalay"
  ],
  "acha": [
    "Ho re bhau, acha barobar",
    "Nay re, acha masta ahe",
    "Tu acha bagh",
    "Bhau, acha suru kar",
    "Masta bhau, acha barobar"
  ],
  "ho": [
    "Ho re bhau, ho masta",
    "Nay re, ho barobar ahe",
    "Tu ho bagh",
    "Bhau, ho suru kar",
    "Masta bhau, ho masta"
  ],
  "are": [
    "Ho re bhau, are masta",
    "Nay re, are barobar ahe",
    "Tu are bagh",
    "Bhau, are suru kar",
    "Masta bhau, are masta"
  ],
  "oii": [
    "Ho re bhau, oii masta",
    "Nay re, oii barobar ahe",
    "Tu oii bagh",
    "Bhau, oii suru kar",
    "Masta bhau, oii masta"
  ],
  "jamala": [
    "Ho re bhau, jamala masta",
    "Nay re, jamala barobar ahe",
    "Tu jamala bagh",
    "Bhau, jamala suru kar",
    "Masta bhau, jamala masta"
  ],
  "Kay chalay": [
    "Sarva masta chalay re",
    "Kay chalay bhau, tu sang",
    "Aisach chalay, kay special",
    "Zhakkas chalay re bhau",
    "Chalayla ahe, tu kay karto"
  ],
  "Kasa jhala": [
    "Masta jhala re",
    "Jhala re bhau, kay tari",
    "Barobar jhala, tension nai",
    "Jhala pan thoda baki ahe",
    "Jhala ki nahi, tu sang"
  ],
  "Kay plan ahe": [
    "Plan tar ahe, tu yaycha ka",
    "Aaj movie la jau ka",
    "Bazarat firayla jau ka",
    "Ghari basuya ki baher jau",
    "Plan sang, mi ready ahe"
  ],
  "Maja aali ka": [
    "Khup maja aali re bhau",
    "Maja aali, pan ajun havi",
    "Zhakkas maja aali",
    "Maja aali ki nahi, tu sang",
    "Masta ahe, maja aali"
  ],
  "Kasa vatata": [
    "Masta vatata re",
    "Barobar vatata, tu kasa",
    "Zhakkas mood ahe re",
    "Thoda tension ahe pan baro",
    "Vatata ki kay tari kami ahe"
  ],
  "Kal kay kela": [
    "Kal ghari baslo re",
    "Kal movie baghitla bhau",
    "Kal dostanshi bhetlo",
    "Kal thodi shopping keli",
    "Kal special kahi nahi"
  ],
  "Aaj kay special": [
    "Aaj vadapav khayla jato",
    "Aaj movie plan ahe",
    "Aaj ghari party ahe re",
    "Aaj bas relax karto",
    "Aaj kahi special nahi"
  ],
  "Bazarat jauya": [
    "Chal re, bazarat jau",
    "Bazarat kay tari khauya",
    "Bazarat firayla masta ahe",
    "Jauya, pan thoda jaldi",
    "Bazarat kay special ahe ka"
  ],
  "Game kheluya": [
    "Chal game kheluya re",
    "Kuthla game, tu sang",
    "Mobile var kheluya ka",
    "Game khelun mast jhala",
    "Kheluya, pan mi jinkto"
  ],
  "Kay khauya": [
    "Vadapav tar banta ahe",
    "Misal pav khauya ka",
    "Chaha an chivda kha",
    "Biryani khauya re bhau",
    "Kombdi vade khaun zala"
  ],
  "Thamb na": [
    "Thamb re, kuth jatos",
    "Thoda thamb, sangto",
    "Thamb na bhau, kay jhalay",
    "Thamb, mi pan yeto",
    "Thamb re, kahi tari bol"
  ],
  "Kay boltoy": [
    "Kay boltoy re bhau",
    "Bol na, mi aiku",
    "Kay tari mast bol",
    "Boltoy ki nahi, sang",
    "Zhakkas boltoy tu"
  ],
  "Kiti vela": [
    "Kiti vela mhantla re",
    "Kiti vela sangto tula",
    "Kiti vela boluya ka",
    "Kiti vela ekach bolto",
    "Kiti vela, thoda thamb"
  ],
  "Kay re baba": [
    "Kay re baba, kasa aahes",
    "Baba, kay zala re",
    "Kay re baba, sang na",
    "Baba, mast vatata ka",
    "Kay re baba, zhakkas ahes"
  ],
  "Chal movie la": [
    "Chal re, movie baghuya",
    "Kuthli movie, tu sang",
    "Movie la jauya bhau",
    "Movie masta asel tar jau",
    "Chal, ticket book karuya"
  ],
  "Mood kasa ahe": [
    "Mood tar zhakkas ahe",
    "Mood thoda off ahe re",
    "Mood barobar ahe bhau",
    "Mood ahe, tu kasa",
    "Mood masta, plan karuya"
  ],
  "Kay nava": [
    "Kahi nava nahi re",
    "Nava tar tu sang bhau",
    "Kay nava, bol na",
    "Nava kahi tari ahe ka",
    "Zhakkas nava sangto"
  ],
  "Tula kay pahije": [
    "Mala kahi nahi pahije",
    "Tula kay pahije, sang",
    "Mala tar vadapav pahije",
    "Kay pahije, plan karuya",
    "Tula kay pahije re bhau"
  ],
  "Kasa chalay ka": [
    "Masta chalay re",
    "Chalay tar barobar ahe",
    "Kasa chalay, tu sang",
    "Zhakkas chalay bhau",
    "Chalay, pan thoda tension"
  ],
  "Party karuya": [
    "Chal party karuya re",
    "Party cha plan kara na",
    "Party madhe kay khauya",
    "Party zhakkas hoil",
    "Party la mi yeto"
  ],
  "Kay sangtos": [
    "Kay sangtos re bhau",
    "Sangtos tar barobar sang",
    "Kay sangtos, mala pan sang",
    "Zhakkas sangtos tu",
    "Sangtos ki nahi, bol"
  ],
  "Kiti divas zale": [
    "Khup divas zale re",
    "Kiti divas zale bhetlo na",
    "Divas kase nighale kalale na",
    "Kiti divas, plan karuya",
    "Divas zale, bhetuya na"
  ],
  "Kay karu ka": [
    "Kar re, kay problem",
    "Kay karu, tu sang na",
    "Karuya, pan kuthla plan",
    "Zhakkas karuya re bhau",
    "Kar ka, mi pan yeto"
  ],
  "Bhetla ka": [
    "Ho re, bhetla na",
    "Ajun bhetla nahi re",
    "Bhetla tar sang na",
    "Bhetla ka, kuth jhala",
    "Bhetla, zhakkas hota"
  ],
  "Kay tari kar": [
    "Kay tari karuya re",
    "Kar re, kahi tari mast",
    "Kay tari, tu sang na",
    "Zhakkas kay tari karuya",
    "Karuya, pan plan kay"
  ],
  "Kal kuth gela": [
    "Kal ghari baslo re",
    "Kal bazarat gela",
    "Kal dostanshi bhetlo",
    "Kal movie la gela",
    "Kal kahi special nahi"
  ],
  "Aaj kuth jatos": [
    "Aaj bazarat jato",
    "Aaj ghari basto re",
    "Aaj movie la jato",
    "Aaj dostanshi bhetuya",
    "Aaj kahi plan nahi"
  ],
  "Kay khalla": [
    "Vadapav khalla re",
    "Misal pav khaun zala",
    "Chaha an kanda bhaji",
    "Kombdi curry khalla",
    "Puran poli khaun masta"
  ],
  "Kasa mood ahe": [
    "Mood tar zhakkas ahe",
    "Mood thoda kharab ahe",
    "Mood barobar, tu kasa",
    "Mood ahe, plan karuya",
    "Mood masta, kay karuya"
  ],
  "Kay chalay re": [
    "Sarva masta chalay",
    "Chalay re, tu kay mhantoy",
    "Kay chalay, sang na",
    "Zhakkas chalay bhau",
    "Chalay, pan thoda kami"
  ],
  "Bhetayla ye": [
    "Chal re, bhetayla yeto",
    "Bhetayla ye, kuth jhala",
    "Ye na, plan karuya",
    "Bhetayla yeto, time sang",
    "Zhakkas, bhetayla yeto"
  ],
  "Kay jhala re": [
    "Kay jhala, tu sang na",
    "Jhala re, pan kahi nahi",
    "Zhakkas jhala bhau",
    "Jhala, pan thoda tension",
    "Kay jhala, bol na"
  ],
  "Chal firayla": [
    "Chal re, firayla jau",
    "Firayla kuth jauya",
    "Chal, bazarat firuya",
    "Firayla masta vatel",
    "Chal, plan karuya"
  ],
  "Kay baghtos": [
    "Movie baghtoy re",
    "Kay baghtos, tu sang",
    "Mobile var reels baghto",
    "Kay tari mast baghtoy",
    "Baghtoy, pan kahi special nahi"
  ],
  "Kasa ahes tu": [
    "Mi tar zhakkas ahe",
    "Barobar ahe re bhau",
    "Thoda tension ahe",
    "Masta ahe, tu kasa",
    "Ahe re, kay chalay"
  ],
  "Kay karto re": [
    "Aisach baslo re",
    "Mobile var khelto",
    "Kay karto, tu sang na",
    "Zhakkas kahi tari karto",
    "Karto re, pan kahi special nahi"
  ],
  "Plan karuya": [
    "Chal re, plan karuya",
    "Plan kay, tu sang na",
    "Zhakkas plan karuya",
    "Plan karuya, kuth jau",
    "Plan masta asel tar karuya"
  ],
  "Kay khau ka": [
    "Khauya re, vadapav",
    "Chal, misal pav khauya",
    "Khauya, pan kahi light",
    "Khauya, tu kay khatos",
    "Zhakkas, khauya kahi tari"
  ],
  "Kasa gela": [
    "Masta gela re bhau",
    "Gela re, pan thoda kami",
    "Zhakkas gela, tu kasa",
    "Gela, pan sang na kay",
    "Barobar gela, kahi problem nahi"
  ],
  "Kay news ahe": [
    "Kahi news nahi re",
    "News tar tu sang bhau",
    "Kay news, bol na",
    "Zhakkas news ahe ka",
    "News ahe, pan thoda boring"
  ],
  "Chal kheluya": [
    "Chal re, kheluya game",
    "Kuthla game kheluya",
    "Kheluya, pan mi jinkto",
    "Chal, mobile var kheluya",
    "Zhakkas, kheluya re"
  ],
  "Kay bolla": [
    "Kay bolla re bhau",
    "Bolla tar barobar bol",
    "Kay bolla, mala pan sang",
    "Zhakkas bolla tu",
    "Bolla ki nahi, sang na"
  ],
  "Kiti zala": [
    "Khup zala re bhau",
    "Zala re, tu kiti kela",
    "Kiti zala, sang na",
    "Zala, pan thoda baki",
    "Zhakkas zala re"
  ],
  "Kay karayla": [
    "Kay karayla, tu sang",
    "Karayla kahi tari mast",
    "Chal, movie baghuya",
    "Karayla plan karuya",
    "Zhakkas kahi tari karayla"
  ],
  "Bhetla ka koni": [
    "Ho re, koni bhetla",
    "Nahi re, ajun bhetla nahi",
    "Bhetla tar sang na",
    "Koni bhetla, zhakkas hota",
    "Bhetla ka, kuth jhala"
  ],
  "Kay gheun yau": [
    "Vadapav gheun ye re",
    "Kahi tari mast gheun ye",
    "Gheun ye, tu kay ghetos",
    "Chaha gheun ye na",
    "Zhakkas kahi tari gheun ye"
  ],
  "Kal kay zala": [
    "Kal masta zala re",
    "Kal kahi special nahi",
    "Kal dostanshi bhetlo",
    "Kal movie baghitla",
    "Kal thoda tension zala"
  ],
  "Aaj kasa ahe": [
    "Aaj tar zhakkas ahe",
    "Aaj barobar ahe re",
    "Aaj thoda boring ahe",
    "Aaj masta, tu kasa",
    "Aaj kahi special nahi"
  ],
  "Chal khauya": [
    "Chal re, khauya kahi tari",
    "Khauya, vadapav ka",
    "Chal, misal pav khauya",
    "Khauya, pan kuth jau",
    "Zhakkas, khauya re"
  ],
  "Kay bolna": [
    "Kay bolna re bhau",
    "Bolna tar barobar bol",
    "Kay bolna, sang na",
    "Zhakkas bolna tu",
    "Bolna ki nahi, bol re"
  ],
  "Kasa plan ahe": [
    "Plan tar masta ahe",
    "Plan ahe, tu yaycha ka",
    "Kasa plan, tu sang na",
    "Zhakkas plan ahe re",
    "Plan ahe, pan thoda kami"
  ],
  "Kay karayla ka": [
    "Karayla re, kahi tari",
    "Kay karayla, tu sang",
    "Chal, kahi tari mast karuya",
    "Karayla ka, mi ready",
    "Zhakkas, karayla re"
  ],
  "Bhetuya na": [
    "Chal re, bhetuya na",
    "Bhetuya, kuth jhala",
    "Bhetuya na, time sang",
    "Zhakkas, bhetuya re",
    "Bhetuya, pan plan kara"
  ],
  "Kay chalay ka": [
    "Chalay re, zhakkas",
    "Kay chalay, tu sang na",
    "Chalay, pan thoda kami",
    "Barobar chalay re bhau",
    "Chalay ka, kahi special"
  ],
  "Kay karat ahes": [
    "Aisach baslo re",
    "Mobile var khelto",
    "Kay karat, tu sang na",
    "Zhakkas kahi tari karat",
    "Karat ahe, pan kahi special nahi"
  ],
  "Kasa ahes re": [
    "Mi tar masta ahe re",
    "Barobar ahe, tu kasa",
    "Thoda tension ahe pan ok",
    "Zhakkas ahe re bhau",
    "Ahe re, kay chalay"
  ],
  "Kay bolat ahes": [
    "Kay bolat ahes re bhau",
    "Bolat ahes tar barobar bol",
    "Kay bolat, mala pan sang",
    "Zhakkas bolat ahes tu",
    "Bolat ahes ki nahi, bol"
  ],
  "Kiti zala re": [
    "Khup zala re bhau",
    "Zala re, tu kiti kela",
    "Kiti zala, sang na",
    "Zala, pan thoda baki",
    "Zhakkas zala re"
  ],
  "Kay karayla re": [
    "Kay karayla, tu sang",
    "Karayla kahi tari mast",
    "Chal, movie baghuya",
    "Karayla plan karuya",
    "Zhakkas kahi tari karayla"
  ],
  "Bhetla ka re": [
    "Ho re, bhetla na",
    "Ajun bhetla nahi re",
    "Bhetla tar sang na",
    "Bhetla ka, kuth jhala",
    "Bhetla, zhakkas hota"
  ],
  "Kay gheun yetos": [
    "Vadapav gheun yeto re",
    "Kahi tari mast gheun yeto",
    "Gheun yeto, tu kay ghetos",
    "Chaha gheun yeto na",
    "Zhakkas kahi tari gheun yeto"
  ],
  "Kal kasa gela": [
    "Kal masta gela re",
    "Kal kahi special nahi",
    "Kal dostanshi bhetlo",
    "Kal movie baghitla",
    "Kal thoda tension zala"
  ],
  "Aaj kasa jhala": [
    "Aaj tar zhakkas jhala",
    "Aaj barobar jhala re",
    "Aaj thoda boring jhala",
    "Aaj masta, tu kasa",
    "Aaj kahi special nahi"
  ],
  "Chal khauya re": [
    "Chal re, khauya kahi tari",
    "Khauya, vadapav ka",
    "Chal, misal pav khauya",
    "Khauya, pan kuth jau",
    "Zhakkas, khauya re"
  ],
  "Kay bolatoy": [
    "Kay bolatoy re bhau",
    "Bolatoy tar barobar bol",
    "Kay bolatoy, mala pan sang",
    "Zhakkas bolatoy tu",
    "Bolatoy ki nahi, bol"
  ],
  "Kiti divas zale re": [
    "Khup divas zale re",
    "Kiti divas zale bhetlo na",
    "Divas kase nighale kalale na",
    "Kiti divas, plan karuya",
    "Divas zale, bhetuya na"
  ],
  "Kay karu re": [
    "Kar re, kay problem",
    "Kay karu, tu sang na",
    "Karuya, pan kuthla plan",
    "Zhakkas karuya re bhau",
    "Kar re, mi pan yeto"
  ],
  "Bhetayla ye re": [
    "Chal re, bhetayla yeto",
    "Bhetayla ye, kuth jhala",
    "Ye re, plan karuya",
    "Bhetayla yeto, time sang",
    "Zhakkas, bhetayla yeto"
  ],
  "Kay jhala ka": [
    "Kay jhala, tu sang na",
    "Jhala re, pan kahi nahi",
    "Zhakkas jhala bhau",
    "Jhala, pan thoda tension",
    "Kay jhala, bol na"
  ],
  "Chal firayla re": [
    "Chal re, firayla jau",
    "Firayla kuth jauya",
    "Chal, bazarat firuya",
    "Firayla masta vatel",
    "Chal, plan karuya"
  ],
  "Kay baghtoy re": [
    "Movie baghtoy re",
    "Kay baghtoy, tu sang",
    "Mobile var reels baghto",
    "Kay tari mast baghtoy",
    "Baghtoy, pan kahi special nahi"
  ],
  "Kasa ahes ka": [
    "Mi tar zhakkas ahe",
    "Barobar ahe re bhau",
    "Thoda tension ahe",
    "Masta ahe, tu kasa",
    "Ahe re, kay chalay"
  ],
  "Kay karto ka": [
    "Aisach baslo re",
    "Mobile var khelto",
    "Kay karto, tu sang na",
    "Zhakkas kahi tari karto",
    "Karto re, pan kahi special nahi"
  ],
  "Plan karuya re": [
    "Chal re, plan karuya",
    "Plan kay, tu sang na",
    "Zhakkas plan karuya",
    "Plan karuya, kuth jau",
    "Plan masta asel tar karuya"
  ],
  "Kay khauya re": [
    "Khauya re, vadapav",
    "Chal, misal pav khauya",
    "Khauya, pan kahi light",
    "Khauya, tu kay khatos",
    "Zhakkas, khauya kahi tari"
  ],
  "Kasa gela re": [
    "Masta gela re bhau",
    "Gela re, pan thoda kami",
    "Zhakkas gela, tu kasa",
    "Gela, pan sang na kay",
    "Barobar gela, kahi problem nahi"
  ],
  "Kay news ahe re": [
    "Kahi news nahi re",
    "News tar tu sang bhau",
    "Kay news, bol na",
    "Zhakkas news ahe ka",
    "News ahe, pan thoda boring"
  ],
  "Chal kheluya re": [
    "Chal re, kheluya game",
    "Kuthla game kheluya",
    "Kheluya, pan mi jinkto",
    "Chal, mobile var kheluya",
    "Zhakkas, kheluya re"
  ],
  "Kay bolla re": [
    "Kay bolla re bhau",
    "Bolla tar barobar bol",
    "Kay bolla, mala pan sang",
    "Zhakkas bolla tu",
    "Bolla ki nahi, sang na"
  ],
  "Kiti zala ka": [
    "Khup zala re bhau",
    "Zala re, tu kiti kela",
    "Kiti zala, sang na",
    "Zala, pan thoda baki",
    "Zhakkas zala re"
  ],
  "Kay karayla ka re": [
    "Kay karayla, tu sang",
    "Karayla kahi tari mast",
    "Chal, movie baghuya",
    "Karayla plan karuya",
    "Zhakkas kahi tari karayla"
  ],
  "Bhetla ka re koni": [
    "Ho re, koni bhetla",
    "Nahi re, ajun bhetla nahi",
    "Bhetla tar sang na",
    "Koni bhetla, zhakkas hota",
    "Bhetla ka, kuth jhala"
  ],
  "Kay gheun yau re": [
    "Vadapav gheun ye re",
    "Kahi tari mast gheun ye",
    "Gheun ye, tu kay ghetos",
    "Chaha gheun ye na",
    "Zhakkas kahi tari gheun ye"
  ],
  "Kay gheun jau": [
    "Pav bhaji gheun ja re",
    "Kahi tari spicy gheun ja",
    "Gheun ja, tu kay ghenar",
    "Kanda bhaji gheun ja na",
    "Masta kahi tari gheun ja"
  ],
  "Kuthlya jagi jau": [
    "Chal beach var jau re",
    "Kuthlya jagi, tu sang na",
    "Mandirat jauya ka bhau",
    "Masta jagi jau, kuthli",
    "Bazarat jauya, zhakkas ahe"
  ],
  "Kay kheluya re": [
    "Cricket kheluya na re",
    "Kheluya, pan kuthla game",
    "Mobile var PUBG kheluya",
    "Kabbadi kheluya ka bhau",
    "Zhakkas kahi tari kheluya"
  ],
  "Kasa disata ka": [
    "Zhakkas disata re bhau",
    "Disata ka, tu sang na",
    "Barobar disata, kahi kami",
    "Masta disata, pan thoda",
    "Disata re, kay problem ahe"
  ],
  "Kay sangayla ahe": [
    "Kahi special sangayla ka",
    "Sangayla re, tu bol na",
    "Zhakkas kahi tari sang",
    "Mala sangayla, mi aiku",
    "Sangayla ka, jaldi bol"
  ],
  "Kuthlya veles yetos": [
    "Sakali yeto re bhau",
    "Veles yetos, tu sang na",
    "Sandhyakali yeto, barobar ka",
    "Zhakkas veles yeto mi",
    "Yeto re, pan kiti veles"
  ],
  "Kay khayla ahe": [
    "Puran poli ahe re ghari",
    "Khayla kahi tari mast ahe",
    "Biryani ahe, khashil ka",
    "Chaha ani batata vada ahe",
    "Zhakkas khayla kahi tari ahe"
  ],
  "Kuthlya gani aiku": [
    "Marathi gani aiku re",
    "Kuthlya gani, tu sang na",
    "Zhakkas filmi gani aiku",
    "Konkani gani masta lagtat",
    "Aiku re, pan kuthla playlist"
  ],
  "Kay firayla jau": [
    "Chal fort var firayla jau",
    "Firayla kuth jau, sang na",
    "Beach var firayla masta",
    "Zhakkas jagi firayla jau",
    "Firayla jau, pan kuthlya veles"
  ],
  "Kasa khelayla ahe": [
    "Masta khelayla ahe re",
    "Khelayla ahe, tu yaycha ka",
    "Zhakkas khelayla plan ahe",
    "Khelayla ahe, pan kuthla",
    "Barobar khelayla, mi yeto"
  ],
  "Kay shopping kela": [
    "Kapde kela re shopping",
    "Shopping kela, tu kay kelas",
    "Zhakkas kahi tari kela",
    "Bazaratun khau kela",
    "Shopping kela, pan thoda"
  ],
  "Kuthlya dostanshi bhetla": [
    "Juna dostanshi bhetlo re",
    "Bhetla re, tu konala bhetla",
    "Zhakkas dostanshi bhetlo",
    "Dostanshi bhetla, masta hota",
    "Bhetla, pan konala sang na"
  ],
  "Kay gappa maratoy": [
    "Gappa maratoy re bhau",
    "Kay gappa, tu sang na",
    "Zhakkas gappa maratoy mi",
    "Gappa masta, tu pan mar",
    "Gappa maratoy, pan kahi special"
  ],
  "Kasa vatayla ahe": [
    "Masta vatayla ahe re",
    "Vatayla ahe, tu kasa vatata",
    "Zhakkas vatayla, kahi kami",
    "Barobar vatayla, plan karuya",
    "Vatayla ahe, pan thoda tension"
  ],
  "Kay bolayla ahe": [
    "Kahi mast bolayla ahe",
    "Bolayla ahe, tu sang na",
    "Zhakkas kahi tari bolayla",
    "Bolayla re, mi aiku re",
    "Bolayla ka, jaldi bol na"
  ],
  "Kuthlya jagi basuya": [
    "Ghari basuya re bhau",
    "Kuthlya jagi, tu sang na",
    "Beach var basuya masta",
    "Zhakkas jagi basuya jau",
    "Basuya, pan kuthlya veles"
  ],
  "Kay khayla gheto": [
    "Pav bhaji gheto re",
    "Khayla kahi tari mast gheto",
    "Tu kay gheto, sang na",
    "Zhakkas kahi tari gheto",
    "Chaha ani vada gheto na"
  ],
  "Kasa zopla ka": [
    "Masta zoplo re bhau",
    "Zoplo ka, tu sang na",
    "Zhakkas zoplo, pan thoda",
    "Barobar zoplo, kahi kami",
    "Zoplo re, pan sapnat kay"
  ],
  "Kay navin kela": [
    "Navin phone kela re",
    "Kela re, tu kay navin kelas",
    "Zhakkas kahi tari navin kela",
    "Navin kahi kela, sang na",
    "Navin plan kela, yaycha ka"
  ],
  "Kuthlya veles bhetuya": [
    "Sakali bhetuya re bhau",
    "Bhetuya, pan kuthlya veles",
    "Zhakkas veles bhetuya jau",
    "Sandhyakali bhetuya ka",
    "Bhetuya re, time sang na"
  ],
  "Kay bolayla jato": [
    "Mast gappa bolayla jato",
    "Bolayla jato, tu kay bolnar",
    "Zhakkas kahi tari bolayla jato",
    "Jato re, pan kay bolayla sang",
    "Gappa marayla jato bhau"
  ],
  "Kuthlya gavala ahes": [
    "Mi tar gaavat asay re",
    "Kuthlya gavala, tu sang na",
    "Zhakkas gaavat asay mi",
    "Gavala ahe, pan kuthlya",
    "Gaavat baslo, kahi special"
  ],
  "Kay khayla banavla": [
    "Kanda poha banavla re",
    "Banavla kahi tari mast",
    "Tu kay banavla, sang na",
    "Zhakkas sabudana khichdi banavla",
    "Banavla re, pan thoda light"
  ],
  "Kasa chalayla ahe": [
    "Masta chalayla ahe bhau",
    "Chalayla ahe, tu kasa chalay",
    "Zhakkas chalayla, kahi kami na",
    "Barobar chalayla, plan karuya",
    "Chalayla ahe, pan thoda slow"
  ],
  "Kay navin ghetla": [
    "Navin shirt ghetla re",
    "Ghetla kahi tari zhakkas",
    "Tu kay ghetla, sang na",
    "Navin mobile ghetla bhau",
    "Ghetla re, pan thoda mahag"
  ],
  "Kuthlya jagi kheluya": [
    "Maidanat kheluya re bhau",
    "Kuthlya jagi, tu sang na",
    "Zhakkas jagi kheluya jau",
    "Beach var kheluya ka",
    "Kheluya, pan kuthlya game"
  ],
  "Kay sangnar ahes": [
    "Kahi mast sangnar ahe",
    "Sangnar ahe, tu aiku ka",
    "Zhakkas kahi tari sangnar",
    "Sangnar re, pan thoda secret",
    "Kay sangnar, tu bol na"
  ],
  "Kasa divas gela": [
    "Divas tar masta gela re",
    "Gela re, tu kasa gela",
    "Zhakkas divas gela bhau",
    "Divas gela, pan thoda boring",
    "Barobar gela, kahi special na"
  ],
  "Kay karayla jatos": [
    "Firayla jatos re bhau",
    "Jatos re, tu kay karayla",
    "Zhakkas kahi tari karayla jato",
    "Karayla jatos, pan kahi plan",
    "Jatos re, pan kuthlya jagi"
  ],
  "Kuthlya dostanshi gappa": [
    "Juna dostanshi gappa marli",
    "Gappa marli, tu konashi marli",
    "Zhakkas dostanshi gappa zali",
    "Dostanshi gappa, masta hoti",
    "Gappa marli, pan konashi sang"
  ],
  "Kay khayla jatos": [
    "Vadapav khayla jato re",
    "Khayla jato, tu kay khatos",
    "Zhakkas kahi tari khayla jato",
    "Misal pav khayla jato bhau",
    "Khayla jato, pan kahi light"
  ],
  "Kasa plan kela": [
    "Masta plan kela re",
    "Plan kela, tu yaycha ka",
    "Zhakkas plan kela bhau",
    "Plan kela, pan thoda kami",
    "Barobar plan kela, chaluya"
  ],
  "Kay baghayla ahe": [
    "Navin movie baghayla ahe",
    "Baghayla ahe, tu kay baghtos",
    "Zhakkas kahi tari baghayla",
    "Reels baghayla ahe re",
    "Baghayla ahe, pan kahi special"
  ],
  "Kuthlya veles jau": [
    "Sakali jau re bhau",
    "Jau re, pan kuthlya veles",
    "Zhakkas veles jauya ka",
    "Sandhyakali jau, barobar ka",
    "Jau re, time sang na"
  ],
  "Kay khelayla jato": [
    "Cricket khelayla jato re",
    "Khelayla jato, tu yaycha ka",
    "Zhakkas game khelayla jato",
    "Kabbadi khelayla jato bhau",
    "Khelayla jato, pan kuthla game"
  ],
  "Kasa mood jhala": [
    "Mood tar zhakkas jhala",
    "Jhala re, tu kasa mood ahe",
    "Barobar mood jhala re",
    "Mood jhala, pan thoda off",
    "Zhakkas mood jhala bhau"
  ],
  "Kay navin ahe ka": [
    "Navin kahi nahi re bhau",
    "Kahi navin ahe, tu sang na",
    "Zhakkas navin kahi tari ahe",
    "Navin ahe, pan thoda secret",
    "Navin ahe ka, bol na"
  ],
  "Kuthlya jagi firayla": [
    "Beach var firayla re bhau",
    "Firayla kuth jau, sang na",
    "Zhakkas jagi firayla jau",
    "Mandirat firayla jato re",
    "Firayla jau, pan kuthlya veles"
  ],
  "Kay khayla ghetla": [
    "Pav bhaji ghetla re",
    "Ghetla kahi tari mast",
    "Tu kay ghetla, sang na",
    "Zhakkas kanda bhaji ghetla",
    "Ghetla re, pan thoda light"
  ],
  "Kasa zala re": [
    "Masta zala re bhau",
    "Zala re, tu kay zala",
    "Zhakkas zala, kahi kami na",
    "Barobar zala, plan karuya",
    "Zala re, pan thoda tension"
  ]

};

// Levenshtein distance function to measure string similarity
function levenshteinDistance(a, b) {
  const matrix = [];

  // Initialize matrix
  for (let i = 0; i <= b.length; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= a.length; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= b.length; i++) {
    for (let j = 1; j <= a.length; j++) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(
          matrix[i - 1][j - 1] + 1, // substitution
          matrix[i][j - 1] + 1,     // insertion
          matrix[i - 1][j] + 1      // deletion
        );
      }
    }
  }

  return matrix[b.length][a.length];
}

// Function to add messages in chat
function addMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = sender === "user" ? "message user-message" : "message bot-message";
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Function to get bot reply
function getBotReply(userText) {
  const text = userText.trim().toLowerCase().replace(/\s+/g, ' '); // Normalize spaces

  // Try to find exact matching key
  for (let key in botReplies) {
    if (text === key.toLowerCase()) {
      const replies = botReplies[key];
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }

  // Try fuzzy matching with Levenshtein distance
  let bestKey = null;
  let minDistance = Infinity;
  const maxDistanceThreshold = 3; // Allow up to 3 edits for a match

  for (let key in botReplies) {
    const keyLower = key.toLowerCase().replace(/\s+/g, ' ');
    const distance = levenshteinDistance(text, keyLower);
    if (distance < minDistance && distance <= maxDistanceThreshold) {
      minDistance = distance;
      bestKey = key;
    }
  }

  if (bestKey) {
    const replies = botReplies[bestKey];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // If no fuzzy match, look for partial matches with at least two common words
  const userWords = text.split(/\s+/).filter(word => word.length > 2); // Ignore short words
  let maxMatches = 0;
  let bestPartialKey = null;

  for (let key in botReplies) {
    const keyWords = key.toLowerCase().split(/\s+/);
    const commonWords = userWords.filter(word => {
      return keyWords.some(keyWord => {
        // Allow single-word typos in partial matching
        return levenshteinDistance(word, keyWord) <= 2; // Allow up to 2 edits per word
      });
    });
    if (commonWords.length >= 2 && commonWords.length > maxMatches) {
      maxMatches = commonWords.length;
      bestPartialKey = key;
    }
  }

  if (bestPartialKey) {
    const replies = botReplies[bestPartialKey];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // If no match found
  return "Kay mhantoy bhau ta maka samjak ny maka yeta tach vichar? 🤔";
}

// Send message
function sendMessage() {
  const text = userInput.value;
  if (!text) return;

  addMessage("user", text);
  userInput.value = "";

  setTimeout(() => {
    const reply = getBotReply(text);
    addMessage("bot", reply);
  }, 500);
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});