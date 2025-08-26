
// Chat elements
const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const imageInput = document.getElementById('imageInput');

// Your big botReplies object here...
const botReplies = {

  "Hi": [
    "Hi! Kaso aasay bhai 😄",
    "Hello! Kay mhantoy 🤗",
    "Hi there! Changala aahes ka 😎",
    "Ky baki mhanty 😎"
  ],
  "Hello": [
    "Hello! Kaso aahes 😄",
    "Hello! Masto aahes ka 😃"
  ],
  "Bye": [
    "Chal tr! Pudhe boluya 👋",
    "Bye! Pure zala chal tr 😅"
  ],
  "Tu sang": [
    "Me ky saangu baba tuch snag ky ta 😅",
    "Baro aasy ky mhanty"
  ],
  "Ky mhanty": [
    "Aassy jito tiyach sang ky ta sang",
    "Ky mhantaly baba"
  ],
  "Kaso assay": [
    "Ky saangu baba",
    "Baro aasy ky mhanty"
  ],
  "Sang ky tari": [
    "Melo hyo mazya patsunach laglo",
    "Baro ma tu"
  ],
  "Baro ma": [
    "Aasy jito khup zala baro ky hoyo 👋",
    "Hoi re bab 😅"
  ],
  "Zala ka": [
    "Zalo re bhau tuch kasa",
    "Hoi zale mhantat",
    "Pura zale bhau",
    "Khoop zale mhanto",
    "Ho re tuka kay"
  ],
  "Kuthay ahes": [
    "Mi ghari asaay re",
    "Ya bazarat asaay mi",
    "Office madhye ata",
    "Gaonat jhalo bhau",
    "Ghari baslo net vaparta"
  ],
  "Kay kartoy": [
    "Aisach baslo re",
    "Mobail vaparta 😅",
    "Net surfing karto",
    "Ghari relax karto",
    "Kuthecha special na asaach"
  ],
  "Khoop divas zale": [
    "Hoi re khoop divas zale bhetlo na",
    "Ya na bhau meeting kara ek",
    "Khara mhanty time nighalaach na",
    "Mala pan vatla tuka sangava",
    "Bhetuchya planning kara"
  ],
  "Khau kay": [
    "Vadapav khaun zale 😋",
    "Misal pav mast hoti",
    "Chaha baslo ata",
    "Fish curry rice khata",
    "Shebachi poli khata"
  ],
  "Pahila ka": [
    "Hoi re pahilo ata",
    "Nako re ajun pahilo na",
    "Pahinyacha plan ahe",
    "Ajun kay tari baki ahe",
    "Mi pahilo re kal"
  ],
  "Ghar kay zala": [
    "Gharat sarva mast ahet",
    "Barobar mhanty kuthech problem na",
    "Aai-baba chan ahet",
    "Bai khup mast mood madhe",
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
    "Ya na kal paryant",
    "Thik ahe udya bhetuya",
    "Bhetuchya planning kara",
    "Kiti divas zale bhetuya re",
    "Mala pan vatla bhetaych"
  ],
  "Thik ahe": [
    "Mast re thik ahe",
    "Barobar mhanty",
    "Mala pan thik vatata",
    "Chan mood ahe ata",
    "Ho re thik ahe"
  ],
  "Sang na": [
    "Kai special sangaych ka",
    "Mhant mhant mhant sang",
    "Kay secret aahe ka",
    "Me aiku re sang",
    "Jaldi sang re"
  ],
  "Kitem zata": [
    "Kai khas na asaach",
    "Aisach timepass",
    "Kaam hota thoda",
    "Mala tar relax vatata",
    "Mala boredom vatata"
  ],
  "Oy": [
    "Oy bhau Kay mhantoy",
    "Oy re kasa aahes",
    "Oy mhanto mhanto kiti vela",
    "Oy chal bhetuya",
    "Oy kay zala"
  ],
  "Kay zala": [
    "Kai nahi re asaach",
    "Aisach tension",
    "Jhakaas vatata",
    "Kay tari problem ahe",
    "Barobar jhalay"
  ],
  "Chal na": [
    "Ya re plan karuya",
    "Kiti divas zale ya na",
    "Chal bhetuya bazarat",
    "Mala pan yavyach vatata",
    "Chal re movie la jau"
  ],
  "Maka jamna": [
    "Jamta re bhau",
    "Mala jamna khoop chan vatata",
    "Jamaych plan kara",
    "Jamlo tar mast hoil",
    "Jamayla maza yeil"
  ],
  "Udya ky tr": [
    "Udya bhetuya re",
    "Udya call karu",
    "Udya jamu ka",
    "Udya special ahe",
    "Udya sangto"
  ],
  "Jamla ma": [
    "Jamla re mast",
    "Jamla bhau",
    "Jamla barobar",
    "Jamayla maja aali",
    "Jamlo tari mast"
  ],
  "Mala vatla": [
    "Mala tari asa vatla",
    "Mala vatla tuka sangaych",
    "Mala vatla ki tu sangto",
    "Mala vatla khara mhanty",
    "Mala vatla bhau"
  ],
  "Kuthe": [
    "Kuthe gelo re",
    "Kuthe ahes tu",
    "Kuthe bhettoy",
    "Kuthe zala hotas",
    "Kuthe plan kartoy"
  ],
  "Masta": [
    "Masta re bhau",
    "Mala mast vatata",
    "Masta ahe situation",
    "Masta plan vatata",
    "Masta mood ahe"
  ],
  "Khoop chan": [
    "Hoi re khup chan ahe",
    "Chan vatata bhau",
    "Khoop chan mhanto tu",
    "Mala pan chan vatata",
    "Chan khup jhalay"
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
    "Thoda kam urla",
    "Thoda thamb",
    "Thoda jamaycha ahe",
    "Thoda relax karto"
  ],
  "Mala na": [
    "Mala na asa vatla",
    "Mala na kay tari mhanaych",
    "Mala na sangaych hota",
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
    "Udya mast hoil",
    "Udya sangto"
  ],
  "Bas": [
    "Bas re bhau",
    "Bas mhanto",
    "Bas ata kay",
    "Bas jhalay",
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
    "Jamaycha mast vatata",
    "Jamaycha khoop"
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
    "Mala tari baro vatata",
    "Mala asa vatla",
    "Mala maja aali",
    "Mala tension ahe",
    "Mala khau pahije"
  ],
  "Tula": [
    "Tula asa vatata ka",
    "Tula jamtoy ka",
    "Tula maja aali ka",
    "Tula baro vatata ka",
    "Tula khau pahije ka"
  ],
  "Tu": [
    "Tu kasa ahes",
    "Tu kay mhantoy",
    "Tu kuthe ahes",
    "Tu bhettoy ka",
    "Tu kay karto"
  ],
  "Mi": [
    "Mi baro asaay",
    "Mi asa vatato",
    "Mi asa karto",
    "Mi asa mhanto",
    "Mi game kheltoy"
  ],
  "Apan": [
    "Apan jamuya",
    "Apan movie baghu",
    "Apan game khelaya",
    "Apan ghari basu",
    "Apan bazarat jau"
  ],
  "Sagle": [
    "Sagle baro ahet",
    "Sagle jamtoy",
    "Sagle mast hota",
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
    "Ho ho mast",
    "Ho jhala"
  ],
  "Are": [
    "Are bhau",
    "Are mast vatata",
    "Are barobar",
    "Are kay re",
    "Are mhanty"
  ],
  "Oii": [
    "Oy re bhau",
    "Oy re kay mhanty",
    "Oy re mast",
    "Oy re barobar",
    "Oy re vatata"
  ],
  "Vala": [
    "Vala re bhau",
    "Vala mhanto",
    "Vala barobar",
    "Vala vatata",
    "Vala mast"
  ],
  "Jamala": [
    "Jamala re mast",
    "Jamala hota",
    "Jamala barobar",
    "Jamala vatata",
    "Jamala jhala"
  ],
  "Did it happen yet": [
    "Ajun zala nahi",
    "Ajun kay tari baki",
    "Ajun jamtoy",
    "Ajun bhetlo nahi",
    "Ajun chaltoy"
  ],
  "Did you eat yesterday": [
    "Hoi baba jeyly",
    "Nahi re",
    "Kal movie baghitle",
    "Kal mast hota",
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
    "Udya jamacha nai",
    "Udya bhetuya",
    "Udya plan ahe",
    "Udya mast hoil",
    "Udya sangto"
  ],
  "Should we stop now": [
    "Bas re bhau",
    "Bas mhanto",
    "Bas ata kay",
    "Bas jhalay",
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
    "Jamaycha mast vatata",
    "Jamaycha khoop"
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
    "Mala tari baro vatata",
    "Mala asa vatla",
    "Mala maja aali",
    "Mala tension ahe",
    "Mala khau pahije"
  ],
  "Ganpatik ye re": [
    "Me kaso yev baba me bot",
    "Ky maskari kartoy me kaso yev me manus thodi asy",
    "Bhari vatata sangly ta"
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
  "Hoi re bhau, suru kar", "Ny re, suru kar mast ahe",
  "Tu suru kar bagh", "Bhau, suru kar", "Masta bhau, suru kar"
],
"tula": [
  "Hoi re bhau, tula vat ahe", "Ny re, tula mast ahe",
  "Tu tula bagh", "Bhau, tula suru kar", "Masta bhau, tula vat ahe"
],
"tu": [
  "Hoi re bhau, tu mast aahes", "Ny re, tu barobar aahes",
  "Tu bagh", "Bhau, tu suru kar", "Masta bhau, tu mast aahes"
],
"mi": [
  "Hoi re bhau, mi mast aahes", "Ny re, mi barobar aahes",
  "Mi bagh", "Bhau, mi suru kar", "Masta bhau, mi mast aahes"
],
"apan": [
  "Hoi re bhau, apan mast aahot", "Ny re, apan barobar aahot",
  "Apan bagh", "Bhau, apan suru kar", "Masta bhau, apan mast aahot"
],
"sagle": [
  "Hoi re bhau, sagle thik ahet", "Ny re, sagle barobar ahet",
  "Tu sagle bagh", "Bhau, sagle suru kar", "Masta bhau, sagle thik ahet"
],
"kon": [
  "Hoi re bhau, kon yetos", "Ny re, kon mast ahe",
  "Tu kon bagh", "Bhau, kon suru kar", "Masta bhau, kon yetos"
],
"kuthlya": [
  "Hoi re bhau, kuthlya mast ahe", "Ny re, kuthlya barobar ahe",
  "Tu kuthlya bagh", "Bhau, kuthlya suru kar", "Masta bhau, kuthlya mast ahe"
],
"kay": [
  "Hoi re bhau, kay chalay", "Ny re, kay barobar ahe",
  "Tu kay bagh", "Bhau, kay suru kar", "Masta bhau, kay chalay"
],
"acha": [
  "Hoi re bhau, acha barobar", "Ny re, acha mast ahe",
  "Tu acha bagh", "Bhau, acha suru kar", "Masta bhau, acha barobar"
],
"ho": [
  "Hoi re bhau, ho mast", "Ny re, ho barobar ahe",
  "Tu ho bagh", "Bhau, ho suru kar", "Masta bhau, ho mast"
],
"are": [
  "Hoi re bhau, are mast", "Ny re, are barobar ahe",
  "Tu are bagh", "Bhau, are suru kar", "Masta bhau, are mast"
],
"oii": [
  "Hoi re bhau, oii mast", "Ny re, oii barobar ahe",
  "Tu oii bagh", "Bhau, oii suru kar", "Masta bhau, oii mast"
],

"jamala": [
  "Hoi re bhau, jamala mast", "Ny re, jamala barobar ahe",
  "Tu jamala bagh", "Bhau, jamala suru kar", "Masta bhau, jamala mast"
],
  
};

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
  const text = userText.trim().toLowerCase();

  // Try to find matching key (even if it's part of the sentence)
  for (let key in botReplies) {
    if (text.includes(key.toLowerCase())) {
      const replies = botReplies[key];
      return replies[Math.floor(Math.random() * replies.length)];
    }
  }

  // If no match found
  return "Kay mhantoy bhau ta maka samjak ny maka yeta tach vicha? 🤔";
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

