var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'><a target='_blank' href='https://wa.me/+6281935593316'> <div class='socialItem'><img class='socialItemI' src='images/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://t.me/YoshWD'> <div class='socialItem'><img class='socialItemI' src='images/telegram.svg' alt=''></div> </a> <a target='_blank' href='https://instagram.com/yosepwdd'> <div class='socialItem'><img class='socialItemI' src='images/instagram.svg' alt=''> </div> </a>";
var resumeString = "<img src='images/resumeThumbnail.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='images/pdf.png'><label>Vinayak Resume.pdf</label></div><a href='assets/Vinayak Patil&#39;s Resume.pdf' download='Vinayak_Patil_Resume.pdf'><img class='download' src='images/downloadIcon.svg'></a></div>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "last seen today at " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Hello guys 👋🏻,<br><br>My name is <span class='bold'><a class='alink'>Lvy BOT-USM</a>.</span><br><br>Send <span class='bold'>'menu'</span> to know more fitur me<br>");
            }, 2000);
            break;
        case "menuyayay":
            sendTextMessage("━LIST FITUR LVY BOT-USM━━<br><br>◈ .asmaulhusna<br>◈ .translate<br>◈ .sticker <br>◈ .remini<br>◈ .removebg<br>◈ .katabijak<br>◈ .katabucin<br>◈ .pantun<br>◈ .faktaunik<br>◈ .puisi<br>◈ .pinterest <br>◈ .tiktoknowm<br>━*INFORMASI*━━<br>◈ .openai <br>◈ .wikipedia <br>◈ .google <br> ◈ .googlebard<br>◈ .infogempa <br>◈ .infocuaca<br>◈ .jadwalsholat<br> ━━━━*GAME*━━━━━<br>◈ .nickml<br>◈ .nickff<br>◈ .ppcouple<br>◈ .joki<br>◈ .diamonml<br>◈ .hitungwr <br>━━━━*FITUR GROUP*━━━━━<br>◈ .tagall <br>◈ .hidetag <br>◈ .addlist <br>◈ .updatelist <br>◈ .dellist <br>◈ .list<br>◈ .proses <br>◈ .done <br>━━━━━━━━━━━━━━━<br>Send <span class='bold'>'harga'</span> untuk melihat harga <br>Send <span class='bold'>'buy'</span> untuk meghubungi admin <br>");
            break;
        case "menu":
            sendTextMessage("Nama : Hay guys<br>Status : User<br>Date : <br><br>-MENU-<br>.sticker<br>.remini<br>.hd<br>.qc<br>.setwelcome<br>.welcome on/of<br>.linkgc<br>.infogc<br>.resetlinkgc<br>.kick<br>.add<br>.hidetag<br>.tagall<br>.group on/of<br>.antilink<br>.setppgc<br>.afk<br>.mute<br><br>-MENU STORE-<br>.done<br>.proses<br>.liststore<br>.addlist<br>.dellist<br>.updatelist<br>.hitungwr<br>.couple<br>.stalknick<br><br>Send <span class='bold'>'harga'</span> untuk melihat harga <br>Send <span class='bold'>'buy'</span> untuk meghubungi admin <br>");
            break;
        case "buy":
            sendTextMessage(contactString);
            break;
        case "harga":
            sendTextMessage("✨PRICE<br><br>◈ SC ENC : 5K<br>◈ SC NO ENC100% : 15K<br>◈ SC NO ENC100% + UPDATE : 25K<br><br>━━━━━━━━━━━━━━━<br>🎁 SEWA BOT <br><br>◈BOT akan di masukan ke gc kalian<br>✨ Harga? 10K / Bulan<br>━━━━━━━━━━━━━━━<br>🤖 Jadi BOT<br><br>◈Bawa NO Sendiri<br>◈Setting sesuka kalian<br>◈Dapat Panel<br>✨ Harga? 20K / Bulan<br>━━━━━━━━━━━━━━━<br>*All SC & Panel 1 Bulan Price + 25K<br>Spek Panel? GACOR")
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
