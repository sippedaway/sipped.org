const cursor = document.querySelector(".cursor");
const drawingcursor = document.querySelector(".drawingc");
const content = document.getElementById('content');
const smovable = document.querySelector('.movable');

const phoneContainer = document.getElementById("phone-container");
const phoneImage = document.querySelector('.phone-image');

const app1bg = document.getElementById('app1-bg');
const app1i = document.getElementById('app1-i');
const app1next = document.getElementById('app1-next');
const app1nexticon = document.getElementById('app1-next-icn');
const app1hcj = document.getElementById('app1-hcj');
const app1ueu = document.getElementById('app1-ueu');
const app1p2next = document.getElementById('app1p2-next');
const app1p2nexticon = document.getElementById('app1p2-next-icn');
const app1p2cats = document.getElementById('cats');
const app1p2cat = document.getElementById('cat');
const app1p2vibe = document.getElementById('vibe');
const app1p2text = document.getElementById('app1p2-inside-text');

const app2bg = document.getElementById('app2-bg');
const app2i = document.getElementById('app2-i');
const app2clear = document.getElementById('app2-clear');
const app2clearicon = document.getElementById('app2-clear-icn');
const app2back = document.getElementById('app2-back');
const app2backicon = document.getElementById('app2-back-icn');

const app3bg = document.getElementById('app3-bg');
const app3i = document.getElementById('app3-i');
const app3back = document.getElementById('app3-back');
const app3backicon = document.getElementById('app3-back-icn');
const scrollContainer = document.querySelector('.horizontal-scroll');
const photoItem = document.getElementById('photo-item');
const leftArrow = document.getElementById('app3-left-icn');
const leftArrowbg = document.getElementById('app3-left');
const rightArrow = document.getElementById('app3-right-icn');
const rightArrowbg = document.getElementById('app3-right');
const app3text = document.getElementById('app3-text');

const app4bg = document.getElementById('app4-bg');
const app4i = document.getElementById('app4-i');
const app4back = document.getElementById('app4-back');
const app4backicon = document.getElementById('app4-back-icn');
const app4next = document.getElementById('app4-next');
const app4nexticon = document.getElementById('app4-next-icn');
const app4am = document.getElementById('app4-am');
const app4amtext = document.getElementById('am-text');
const app4visit = document.getElementById('app4-visit');
const app4visiticon = document.getElementById('app4-visit-icn');

const app4epbg = document.getElementById('app4ep-bg');
const app4epicon = document.getElementById('app4ep-icn');
const app4epback = document.getElementById('app4ep-back');
const app4epbackicon = document.getElementById('app4ep-back-icn');

const app4so = document.getElementById('app4-so');
const app4soss = document.getElementById('app4-soss')
const sotext = document.getElementById('so-text');
const app4lm = document.getElementById('app4-lm');
const app4lmicon = document.getElementById('app4-lm-icn');
const app4p2back = document.getElementById('app4p2-back');
const app4p2backicon = document.getElementById('app4p2-back-icn');
const app4p2next = document.getElementById('app4p2-next');
const app4p2nexticon = document.getElementById('app4p2-next-icn');

const app5bg = document.getElementById('app5-bg');
const app5i = document.getElementById('app5-i');
const terminal = document.getElementById('terminal');

let canopenapp6 = true;
const app6bg = document.getElementById('app6-bg');
const app6i = document.getElementById('app6-i');
const app6back = document.getElementById('app6-back');
const app6backicon = document.getElementById('app6-back-icn');
const app6so = document.getElementById('app6-so');
const app6soss = document.getElementById('app6-soss')

const homepage = document.getElementById('home-page');
const app1page = document.getElementById('app1-page');
const app1page2 = document.getElementById('app1-page2');
const app2page = document.getElementById('app2-page');
const app3page = document.getElementById('app3-page');
const app4page = document.getElementById('app4-page1');
const app4page2 = document.getElementById('app4-page2');
const app4emptypage = document.getElementById('app4-emptypage');
const app5page = document.getElementById('app5-page');
const app6page = document.getElementById('app6-page');

let multiplier = 0.2;
let busy = 0;
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

let app1hasrun = false;
let app1hasrun2 = false;
let app1p2hasrun = false;
let app2hasrun = false;
let app3hasrun = false;
let app4hasrun = false;
let app4p2hasrun = false;
let app4ephasrun = false;
let app6hasrun = false;

function writeTextByLetter(text, elementId, speed) {

    const element = document.getElementById(elementId);
    element.textContent = "";
    let index = 0;

    function typeLetter() {
        if (index < text.length) {
            let char = text.charAt(index);

            if (char === '<' && text.substring(index, index + 4) === '<br>') {
                element.innerHTML += '<br>';
                index += 4;
            } else {
                element.innerHTML += char;
                index++;
            }

            setTimeout(typeLetter, speed);
        }
    }

    typeLetter();
}

function phoneOn() {
    content.style.scale = '1.4';

    content.style.transform = 'translate(-50%, -50%)';

    phoneContainer.style.transform = 'translate(-47%, -43%)';
}

function phoneOff() {
    content.style.scale = '1';

    phoneContainer.style.transform = `translate(-50%, -50%)`;
}

function openHomePage() {
    phoneOff();
    canopenapp6 = false;

    homepage.style.display = 'flex';
    app1page.style.display = 'none';
    app1page2.style.display = 'none';
    app2page.style.display = 'none';
    app3page.style.display = 'none';
    app4page.style.display = 'none';
    app4emptypage.style.display = 'none';
    app5page.style.display = 'none';
    app6page.style.display = 'none';

    content.style.scale = '1.0';
    busy = 0;

    setTimeout(() => {
        canopenapp6 = true;
    }, 400);
}

function openApp1Page1() {
    phoneOn();

    app1next.style.scale = '0';
    app1nexticon.style.scale = '0';

    homepage.style.display = 'none';
    app1page.style.display = 'flex';
    app2page.style.display = 'none';
    app3page.style.display = 'none';

    busy = 1;

    app1nexticon.addEventListener("mouseenter", () => {
        app1next.style.scale = "1.1";
        app1nexticon.style.scale = "1.8";
    })

    app1nexticon.addEventListener("mouseleave", () => {
        app1next.style.scale = "1";
        app1nexticon.style.scale = "1";
    })

    app1hcj.addEventListener("mouseenter", () => {
        app1hcj.style.scale = "1.1";

        writeHcjText();

        app1next.style.scale = '1';
        app1nexticon.style.scale = '1';
    })

    app1ueu.addEventListener("mouseenter", () => {
        app1ueu.style.scale = "1.1";

        writeUeuText();

        app1next.style.scale = '1';
        app1nexticon.style.scale = '1';
    })

    function writeHcjText() {
        if (app1hasrun) return;

        app1hasrun = true;
        const hcjtext = document.getElementById('hcjtext');
        hcjtext.textContent = '';
        writeTextByLetter('2 years experience with front-end web development', 'hcjtext', 10);
    }

    function writeUeuText() {
        if (app1hasrun2) return;

        app1hasrun2 = true;
        const ueutext = document.getElementById('ueutext');
        ueutext.textContent = '';
        writeTextByLetter('4 years experience: Unity & Unreal Engine<br>game development & world design<br>2-3 years experience: C++ & C#<br>3 years experience: Python & discord.py', 'ueutext', 10);
    }

    app1hcj.addEventListener("mouseleave", () => {
        app1hcj.style.scale = "1";
    })

    app1ueu.addEventListener("mouseleave", () => {
        app1ueu.style.scale = "1";
    })

    app1nexticon.addEventListener("mouseup", () => {
        openApp1Page2();
        app1hasrun = true;
        app1hasrun2 = true;
    })
}

function openApp1Page2() {
    homepage.style.display = 'none';
    app1page.style.display = 'none';
    app1page2.style.display = 'flex';
    app2page.style.display = 'none';

    app1p2next.style.scale = '0';
    app1p2nexticon.style.scale = '0';

    busy = 1;

    app1p2nexticon.addEventListener("mouseenter", () => {
        app1p2next.style.scale = "1.1";
        app1p2nexticon.style.scale = "1.8";
    })

    app1p2nexticon.addEventListener("mouseleave", () => {
        app1p2next.style.scale = "1";
        app1p2nexticon.style.scale = "1";
    })

    app1p2cats.addEventListener("mouseenter", () => {
        app1p2cats.style.scale = "1.15";
    })

    app1p2cats.addEventListener("mouseleave", () => {
        app1p2cats.style.scale = "1";
    })

    app1p2cat.addEventListener("mouseenter", () => {
        app1p2cat.style.scale = "1.15";
    })

    app1p2cat.addEventListener("mouseleave", () => {
        app1p2cat.style.scale = "1";
    })

    app1p2vibe.addEventListener("mouseenter", () => {
        app1p2vibe.style.scale = "1.02";
    })

    app1p2vibe.addEventListener("mouseleave", () => {
        app1p2vibe.style.scale = "0.9";
    })

    app1p2nexticon.addEventListener("mouseup", () => {
        openHomePage();
    })

    function app1p2ShowAll() {
        app1p2next.style.scale = '1';
        app1p2nexticon.style.scale = '1';
    }

    setTimeout(() => {
        app1p2ShowAll();
    }, 1000);

    if (!app1p2hasrun) {
        app1p2hasrun = true;

        const app1p2str = "ever since i was like 8 i was SO obsessed with computers and<br>tech overall, but like 5 years back i started to make programs, discord<br>bots, websites with frontend & nodejs, game dev projects, and more :)";
        app1p2text.textContent = "";
        writeTextByLetter(app1p2str, "app1p2-inside-text", 5);

        app1p2ShowAll();
    }
}

function openApp2() {
    homepage.style.display = 'none';
    app1page.style.display = 'none';
    app1page2.style.display = 'none';
    app2page.style.display = 'flex';

    phoneOn();
    busy = 1;

    app2clearicon.addEventListener('mouseenter', () => {
        app2clear.style.scale = "1.1";
        app2clearicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/clear.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app2clearicon.addEventListener("mouseleave", () => {
        app2clear.style.scale = "1";
        app2clearicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app2clearicon.addEventListener("mousedown", () => {
        clearArea();
    })

    app2backicon.addEventListener("mousedown", () => {
        openHomePage();
    })

    app2backicon.addEventListener('mouseenter', () => {
        app2back.style.scale = "1.1";
        app2backicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/home.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app2backicon.addEventListener("mouseleave", () => {
        app2back.style.scale = "1";
        app2backicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })
}

function openApp3() {
    phoneOn();

    homepage.style.display = 'none';
    app3page.style.display = 'flex';

    busy = 1;

    app3backicon.addEventListener("mousedown", () => {
        openHomePage();
    })

    app3backicon.addEventListener('mouseenter', () => {
        app3back.style.scale = "1.1";
        app3backicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/home.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app3backicon.addEventListener('mouseleave', () => {
        app3back.style.scale = "1";
        app3backicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    const images = [
        './pictures/1.jpg',
        './pictures/2.jpg',
        './pictures/3.jpg',
        './pictures/4.jpg',
        './pictures/5.jpg',
        './pictures/6.jpg',
        './pictures/7.png',
        './pictures/8.png',
        './pictures/9.png',
        './pictures/10.jpg',
    ];

    const descriptions = [
        "my oldER cat!! silly closeup pic",
        "my charli xcx brat remix CD YEAAAAAAHHHHH",
        "silly kitty on a treadmilly",
        "GUESS WHO",
        "animal crossing firework show!! :3",
        "RAAHH",
        "minecraft hardcore FULL NETHERITEE!! (btw the world is gone by now lol)",
        "work on sipped.org :fire:",
        "early audomark prototype (go check audomark.sipped.org)",
        "BEST kdot song. on my iphone 15"
    ];

    let currentIndex = 0;

    function changeImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }

        photoItem.src = images[currentIndex];
        photoItem.alt = descriptions[currentIndex];

        app3text.textContent = descriptions[currentIndex];
    }

    leftArrow.addEventListener('click', () => {
        changeImage(currentIndex - 1);
    });

    rightArrow.addEventListener('click', () => {
        changeImage(currentIndex + 1);
    });

    changeImage(currentIndex);

    leftArrow.addEventListener('mouseenter', () => {
        leftArrowbg.style.scale = "1.1";
        leftArrow.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/left.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    leftArrow.addEventListener('mouseleave', () => {
        leftArrowbg.style.scale = "1";
        leftArrow.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    rightArrow.addEventListener('mouseenter', () => {
        rightArrowbg.style.scale = "1.1";
        rightArrow.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/right.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    rightArrow.addEventListener("mouseleave", () => {
        rightArrowbg.style.scale = "1";
        rightArrow.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    photoItem.addEventListener('mouseenter', () => {
        photoItem.style.scale = "1.03";
    })

    photoItem.addEventListener("mouseleave", () => {
        photoItem.style.scale = "1";
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            changeImage(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            changeImage(currentIndex + 1);
        }
    });
}

function openApp4() {
    phoneOn();

    homepage.style.display = 'none';
    app4page.style.display = 'flex';
    app4page2.style.display = 'none';
    app4emptypage.style.display = 'none';

    app4visit.style.scale = '0';
    app4visiticon.style.scale = '0';
    app4back.style.scale = '0';
    app4backicon.style.scale = '0';
    app4next.style.scale = '0';
    app4nexticon.style.scale = '0';

    busy = 1;

    function app4ShowAll() {
        app4visit.style.scale = '1';
        app4visiticon.style.scale = '1';
        app4back.style.scale = '1';
        app4backicon.style.scale = '1';
        app4next.style.scale = '1';
        app4nexticon.style.scale = '1';
    }

    setTimeout(() => {
        app4ShowAll();
    }, 1500);

    app4visiticon.addEventListener('mouseenter', () => {
        app4visit.style.scale = "1.1";
        app4visiticon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/visit.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4visiticon.addEventListener('mouseleave', () => {
        app4visit.style.scale = "1";
        app4visiticon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4visiticon.addEventListener('mousedown', () => {
        window.open("https://audomark.sipped.org", "_blank");
    })

    app4backicon.addEventListener('mouseenter', () => {
        app4back.style.scale = "1.1";
        app4backicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/home.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4backicon.addEventListener('mousedown', () => {
        openHomePage();
    })

    app4backicon.addEventListener('mouseleave', () => {
        app4back.style.scale = "1";
        app4backicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4nexticon.addEventListener('mouseenter', () => {
        app4next.style.scale = "1.1";
        app4nexticon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/next.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4nexticon.addEventListener('mouseup', () => {
        openApp4Page2();
    })

    app4nexticon.addEventListener('mouseleave', () => {
        app4next.style.scale = "1";
        app4nexticon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4am.addEventListener('mouseenter', () => {
        app4am.style.scale = "1.1";
    })

    app4am.addEventListener('mouseleave', () => {
        app4am.style.scale = "1";
    })

    if (!app4hasrun) {
        app4hasrun = true;
        app4amtext.textContent = '';
        writeTextByLetter('audomark.sipped.org/<br><br>rank and add your<br>favorite albums<br>and artists.<br>simple editor.<br>user statistics.<br><br>free. no ads.<br>out now.', 'am-text', 12);
    } else {
        app4amtext.innerHTML = 'audomark.sipped.org/<br><br>rank and add your<br>favorite albums<br>and artists.<br>simple editor.<br>user statistics.<br><br>free. no ads.<br>out now.';
        app4ShowAll();
    }
}

function openApp4Page2() {
    phoneOn();

    sotext.textContent = '';

    homepage.style.display = 'none';
    app4page.style.display = 'none';
    app4page2.style.display = 'flex';
    app4emptypage.style.display = 'none';

    app4lm.style.scale = '0';
    app4lmicon.style.scale = '0';
    app4p2back.style.scale = '0';
    app4p2backicon.style.scale = '0';
    app4p2next.style.scale = '0';
    app4p2nexticon.style.scale = '0';

    busy = 1;

    function app4p2ShowAll() {
        app4lm.style.scale = '1';
        app4lmicon.style.scale = '1';
        app4p2back.style.scale = '1';
        app4p2backicon.style.scale = '1';
        app4p2next.style.scale = '1';
        app4p2nexticon.style.scale = '1';
    }

    setTimeout(() => {
        app4lm.style.scale = '1';
        app4lmicon.style.scale = '1';
        app4p2back.style.scale = '1';
        app4p2backicon.style.scale = '1';
        app4p2next.style.scale = '1';
        app4p2nexticon.style.scale = '1';
    }, 1500);

    app4lmicon.addEventListener('mouseenter', () => {
        app4lm.style.scale = "1.1";
        app4lmicon.style.scale = "1.5";

        cursor.style.backgroundImage = "url('./assets/Cursor/go.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4lmicon.addEventListener('mouseleave', () => {
        app4lm.style.scale = "1";
        app4lmicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4lmicon.addEventListener('mousedown', () => {
        openApp6();
    })

    app4p2backicon.addEventListener('mouseenter', () => {
        app4p2back.style.scale = "1.1";
        app4p2backicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/back.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4p2backicon.addEventListener('mousedown', () => {
        openApp4();
    })

    app4p2backicon.addEventListener('mouseleave', () => {
        app4p2back.style.scale = "1";
        app4p2backicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4p2nexticon.addEventListener('mouseenter', () => {
        app4p2next.style.scale = "1.1";
        app4p2nexticon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/next.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4p2nexticon.addEventListener('mouseup', () => {
        openApp4EmptyPage();
    })

    app4p2nexticon.addEventListener('mouseleave', () => {
        app4p2next.style.scale = "1";
        app4p2nexticon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4so.addEventListener('mouseenter', () => {
        app4so.style.scale = "1.1";
    })

    app4so.addEventListener('mouseleave', () => {
        app4so.style.scale = "1";
    })

    if (!app4p2hasrun) {
        app4p2hasrun = true;
        sotext.textContent = '';
        writeTextByLetter('sipped.org/<br><br>"the coolest about me page ever"<br>- definitely not me<br><br>interactive and fun<br>portfolio page!!<br>learn more and<br>credits:', 'so-text', 12);
    } else {
        sotext.innerHTML = 'sipped.org/<br><br>"the coolest about me page ever"<br>- definitely not me<br><br>interactive and fun<br>portfolio page!!<br>learn more and<br>credits:'
        app4p2ShowAll();
    }
}

function openApp4EmptyPage() {
    app4page.style.display = 'none';
    app4page2.style.display = 'none';
    app4emptypage.style.display = 'flex';

    app4epbg.style.scale = '1';
    app4epicon.style.scale = '1';
    app4epback.style.scale = '1';
    app4epbackicon.style.scale = '1';

    busy = 1;

    app4epicon.addEventListener('mouseenter', () => {
        app4epbg.style.scale = "1.1";
        app4epicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/home.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4epicon.addEventListener('mouseleave', () => {
        app4epbg.style.scale = "1";
        app4epicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4epbackicon.addEventListener('mouseenter', () => {
        app4epback.style.scale = "1.1";
        app4epbackicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/back.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app4epbackicon.addEventListener('mouseleave', () => {
        app4epback.style.scale = "1";
        app4epbackicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    })

    app4epbackicon.addEventListener('mousedown', () => {
        openApp4Page2();
    })

    app4epicon.addEventListener('mouseup', () => {
        openHomePage();
    })
}

function openApp5() {
    phoneOn();

    homepage.style.display = 'none';
    app5page.style.display = 'flex';

    busy = 1;

    let inputBuffer = '';
    let terminalText = 'Nerdosoft Sipped [Version 10.0.26100.2605]\n(c) Nerdosoft Corporation. All rights reserved.\nTo get started, try "help".\n\n';

    document.addEventListener('keydown', (event) => {
        if (event.key.length === 1) {
            inputBuffer += event.key;
            updateTerminal();
        } else if (event.key === 'Backspace') {
            inputBuffer = inputBuffer.slice(0, -1);
            updateTerminal();
        } else if (event.key === 'Enter') {
            processCommand(inputBuffer);
            inputBuffer = '';
            updateTerminal();
            scrollToBottom();
        }
    });

    function updateTerminal() {
        terminal.innerText = `${terminalText}> ${inputBuffer}|`;
    }

    const commandMap = {
        'help': "back - return to the home screen\nclear - clear terminal\nmeow - pSpsPpskittyYYYyy\nwhat - don't do it.\nwrite anything, there's a 6% chance Nerdosoft Sipped O.S. has got a response for it!",
        'what': "what the FUCK do you not understand.",
        'die': 'no u wait actually dont please',
        'audomark': 'yes',
        'what is this': 'sex',
        'who are you?': 'im sipped os',
        'who are you': 'im sipped os',
        "what's your name?": 'hi im sipped',
        'tell me a joke': 'my life',
        "what's the weather": 'go outside and look fatass',
        "what's the weather?": 'go outside and look fatass',
        'what time is it': 'youre staring at a fucking electronic device probably with some fucking watch on your arm and a phone somewhere close. or just look at the corner of your taskbar. idiot.',
        'what time is it?': 'youre staring at a fucking electronic device probably with some fucking watch on your arm and a phone somewhere close. or just look at the corner of your taskbar. idiot.',
        'where are you from?': 'plains biome',
        'where are you from': 'plains biome',
        'who made you?': 'huh',
        'who made you': 'me',
        'what is 2+2': 'idk sex?',
        '2+2': '5',
        'fuck you': 'nUh uHH',
        'hacker': "okay hAcKeR",
        'stinky': 'no u',
        'idiot': 'hey!?',
        'fuck': 'LANGUAGE.',
        'shit': 'LANGUAGE.',
        'how are you': "i'm okok- wait.. no.. tyler.. don't.. OKOKOKOKLALALALALA",
        'ok': 'OKOKOKOKOKOKOKOK',
        'hi': 'hi',
        'hey': "hi i'm sentient btw",
        "what's your name": 'sipped',
        "your website sucks": 'thanks!',
        "how old are you": 'yes',
        "what's your gender": 'yes',
        'clear': "Clearing the terminal...",
        'meow': "KITTY WHERE PSPSPSPSPS",
        'are you dumb': 'yes actually',
        '': "...maybe write something???",
        'kys': 'HUH??',
        'go kys': 'WHY',
        'kill yourself': 'WHY THE FUCK',
        'im sorry to whoever is reading this js code and has to read all this': 'i love you tho!!',
        'gm': 'morning',
        'good morning': 'morning',
        'hello': 'hi',
        'whats up': 'im fine',
        "what's up": 'im alrrr',
        "what's up?": 'hallo im fine',
        'yes': 'yeah RIGHT.',
        'no': 'nUH uH',
        'ye': 'kan',
        'kan': "ye's old music was better, v2 so mid aaahh",
        'kanye': 'kendrick>',
        'ew': 'ugh',
        'eww': 'mmhm right',
        'see you later': 'bye nerd',
        'goodbye': 'finally',
        'please': 'nuh UH.',
        'thank you': ':)',
        'thanks': ':)',
        'gay': ':3',
        ':3': 'gay (in a good way!!)',
        'femboy': ':3',
        'sorry': 'ok'
    };

    function processCommand(command) {
        const normalizedCommand = command.toLowerCase();

        if (normalizedCommand === 'clear') {
            terminalText = '';
        } else if (normalizedCommand === 'back' || normalizedCommand === 'home') {
            openHomePage();
            terminalText = '';
        } else if (commandMap[normalizedCommand]) {
            terminalText += `> ${command}\n${commandMap[normalizedCommand]}\n`;
        } else {
            terminalText += `> ${command}\nCommand not recognized: '${normalizedCommand}'\n`;
        }

        updateTerminal();
    }

    function scrollToBottom() {
        terminal.scrollTop = terminal.scrollHeight;
    }

    setInterval(() => {
        if (terminal.innerText.endsWith('|')) {
            terminal.innerText = terminal.innerText.slice(0, -1);
        } else {
            terminal.innerText += '|';
        }
    }, 500);

    updateTerminal();
}

function openApp6() {
    phoneOn();

    homepage.style.display = 'none';
    app4page2.style.display = 'none';
    app6page.style.display = 'flex';

    busy = 1;

    app6backicon.addEventListener("mousedown", () => {
        openHomePage();
    })

    app6backicon.addEventListener('mouseenter', () => {
        app6back.style.scale = "1.1";
        app6backicon.style.scale = "1.8";

        cursor.style.backgroundImage = "url('./assets/Cursor/back.png')"
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    app6backicon.addEventListener('mouseleave', () => {
        app6back.style.scale = "1";
        app6backicon.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/a6-normal.png')"
    })

    app6so.addEventListener('mouseenter', () => {
        app6so.style.scale = "1.1";
    })

    app6so.addEventListener('mouseleave', () => {
        app6so.style.scale = "1";
    })

    const feedback = document.getElementById('feedback');
    const submit = document.getElementById('submit');
    inputBuffer = '';

    submit.addEventListener('mouseenter', () => {
        submit.style.scale = "1.1";
        cursor.style.backgroundImage = 'url("./assets/Cursor/a6-pointer.png")'
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    })

    submit.addEventListener('mouseleave', () => {
        submit.style.scale = "1";

        cursor.style.backgroundImage = 'url("./assets/Cursor/a6-normal.png")'
    })

    // FEEDBACK SEND

    emailjs.init('oEECTq0djuZ9ktRXT');
    statusMessage = document.getElementById('statusMessage');

    function showStatus(text) {
        feedback.style.height = '120px';
        statusMessage.style.display = 'block';
        statusMessage.innerText = text;
    }

    submit.addEventListener('mousedown', () => {
        if (!inputBuffer.trim()) {
            showStatus("yeah but please say something..?");
            return;
        }
        emailjs.send('sippedorg', 'template_7etid6k', {
                message: inputBuffer,
            })
            .then(() => {
                showStatus("THANK YOU!! successfully sent.");
            })
            .catch((error) => {
                statusMessage.style.display = 'block';
                showStatus("ERROR!! its probably on my feedback sending service's side. try my email (in another window)!");
            });
    });

    if (!app6hasrun) {
        document.addEventListener('keydown', (event) => {
            if (event.key.length === 1) {
                inputBuffer += event.key;
                updateFeedbackText();
            } else if (event.key === 'Backspace') {
                inputBuffer = inputBuffer.slice(0, -1);
                updateFeedbackText();
            }
        });

        app6hasrun = true;
    }

    function updateFeedbackText() {
        feedback.innerText = inputBuffer;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    homepage.style.display = 'flex';
    app1page.style.display = 'none';

    /////////////// HOVERS FOR PAGE 1

    app1i.addEventListener("mouseenter", () => {
        app1bg.style.scale = "1.1";
        app1i.style.scale = "1.5";

        cursor.style.backgroundImage = "url('./assets/Cursor/aboutme.png')"
        cursor.style.width = "60px";
        cursor.style.height = "60px";
    })

    app1i.addEventListener("mouseleave", () => {
        app1bg.style.scale = "1";
        app1i.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = "23px";
        cursor.style.height = "23px";
    })

    app1i.addEventListener("mouseup", () => {
        openApp1Page1();
    })

    /////////////// HOVERS FOR PAGE 2

    app2i.addEventListener("mouseenter", () => {
        app2bg.style.scale = "1.1";
        app2i.style.scale = "1.5";

        cursor.style.backgroundImage = "url('./assets/Cursor/draw.png')"
        cursor.style.width = "60px";
        cursor.style.height = "60px";
    })

    app2i.addEventListener("mouseleave", () => {
        app2bg.style.scale = "1";
        app2i.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = "23px";
        cursor.style.height = "23px";
    })

    app2i.addEventListener("mouseup", () => {
        openApp2();
    })

    /////////////// HOVERS FOR APP 3

    app3i.addEventListener("mouseenter", () => {
        app3bg.style.scale = "1.1";
        app3i.style.scale = "1.5";

        cursor.style.backgroundImage = "url('./assets/Cursor/pics.png')"
        cursor.style.width = "60px";
        cursor.style.height = "60px";
    })

    app3i.addEventListener("mouseleave", () => {
        app3bg.style.scale = "1";
        app3i.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = "23px";
        cursor.style.height = "23px";
    })

    app3i.addEventListener("mouseup", () => {
        openApp3();
    })

    /////////////// HOVERS FOR APP 4

    app4i.addEventListener("mouseenter", () => {
        app4bg.style.scale = "1.1";
        app4i.style.scale = "1.4";

        cursor.style.backgroundImage = "url('./assets/Cursor/projects.png')"
        cursor.style.width = "60px";
        cursor.style.height = "60px";
    })

    app4i.addEventListener("mouseleave", () => {
        app4bg.style.scale = "1";
        app4i.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = "23px";
        cursor.style.height = "23px";
    })

    app4i.addEventListener("mouseup", () => {
        openApp4();
    })

    /////////////// HOVERS FOR APP 5

    app5i.addEventListener("mouseenter", () => {
        app5bg.style.scale = "1.1";
        app5i.style.scale = "1.5";

        cursor.style.backgroundImage = "url('./assets/Cursor/terminal.png')"
        cursor.style.width = "60px";
        cursor.style.height = "60px";
    })

    app5i.addEventListener("mouseleave", () => {
        app5bg.style.scale = "1";
        app5i.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = "23px";
        cursor.style.height = "23px";
    })

    app5i.addEventListener("mouseup", () => {
        openApp5();
    })

    /////////////// HOVERS FOR APP 6

    app6i.addEventListener("mouseenter", () => {
        app6bg.style.scale = "1.1";
        app6i.style.scale = "1.5";

        cursor.style.backgroundImage = "url('./assets/Cursor/faq.png')"
        cursor.style.width = "60px";
        cursor.style.height = "60px";
    })

    app6i.addEventListener("mouseleave", () => {
        app6bg.style.scale = "1";
        app6i.style.scale = "1";

        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')"
        cursor.style.width = "23px";
        cursor.style.height = "23px";
    })

    app6i.addEventListener("mouseup", () => {
        if (!canopenapp6) return;
        openApp6();
    })
});

let windowZ = 10;
const windows = document.querySelectorAll('.window');
windows.forEach(window => {
    window.addEventListener('mouseenter', () => {
        cursor.style.backgroundImage = 'url("./assets/Cursor/a6-normal.png")';
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    });
    window.addEventListener('mouseleave', () => {
        cursor.style.backgroundImage = 'url("./assets/Cursor/Cursor.png")';
        cursor.style.width = '23px';
        cursor.style.height = '23px';
    });
    window.addEventListener('mouseup', () => {
        cursor.style.backgroundImage = 'url("./assets/Cursor/a6-normal.png")';
        cursor.style.width = '60px';
        cursor.style.height = '60px';
    });
    window.addEventListener('mousedown', () => {
        windowZ++;
        window.style.zIndex = windowZ;

        cursor.style.width = '0px';
        cursor.style.height = '0px';
        setTimeout(() => {
            cursor.style.backgroundImage = 'none';
        }, 70);
    });
});


function makeDraggable(element) {
    let currentPosX = 0,
        currentPosY = 0,
        previousPosX = 0,
        previousPosY = 0;

    let barrier = {
        x: 150,
        y: 120,
        width: 800,
        height: 400,
    };

    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e.preventDefault();
        previousPosX = e.clientX;
        previousPosY = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e.preventDefault();
        currentPosX = previousPosX - e.clientX;
        currentPosY = previousPosY - e.clientY;
        previousPosX = e.clientX;
        previousPosY = e.clientY;

        let newLeft = element.offsetLeft - currentPosX;
        let newTop = element.offsetTop - currentPosY;

        if (newLeft >= barrier.x && newLeft + element.offsetWidth <= barrier.x + barrier.width) {
            element.style.left = newLeft + 'px';
        }

        if (newTop >= barrier.y && newTop + element.offsetHeight <= barrier.y + barrier.height) {
            element.style.top = newTop + 'px';
        }
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

document.addEventListener("mousemove", (e) => {
    // MOUSE
    mouseX = e.clientX;
    mouseY = e.clientY;

    // CONTENT FOLLOW MOUSE MOVEMENT 
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const moveX = (mouseX - windowWidth / 2) * multiplier;
    const moveY = (mouseY - windowHeight / 2) * multiplier;

    const smoveX = (mouseX - windowWidth / 2) * 0.01;
    const smoveY = (mouseY - windowHeight / 2) * 0.01;

    if (busy == 0) {
        content.style.transform = `translate(${moveX}px, ${moveY}px)`;
        smovable.style.transform = `translate(${smoveX}px, ${smoveY}px)`;
    }
});

function updateCursor() {
    currentX += (mouseX - currentX) * 0.6;
    currentY += (mouseY - currentY) * 0.6;

    cursor.style.transform = `translate(${currentX}px, ${currentY}px)`;
    drawingcursor.style.transform = `translate(${mouseX-3}px, ${mouseY-20}px)`;

    requestAnimationFrame(updateCursor);
}

updateCursor();

window.onload = () => {
    const windows = document.querySelectorAll('.window');
    windows.forEach(window => makeDraggable(window));
}

window.addEventListener('load', () => {
    loadPage();
});

function loadPage() {
    const l0 = document.getElementById('ls-layer0');
    const ls = document.getElementById('loading-screen');
    const content = document.querySelector('.page');
    
    l0.style.opacity = '0';
    ls.style.scale = '100';
    ls.style.opacity = '0';

    setTimeout(() => {
        l0.remove();
        ls.remove();
    }, 1500);

    content.style.visibility = 'visible';
    content.style.opacity = '1';

    cursor.style.backgroundImage = 'url("./assets/Cursor/cursor.png")';
    cursor.style.width = '23px';
    cursor.style.height = '23px';
}

const text = document.querySelector('.bgtext');
text.innerHTML = text.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${2* i}deg)">${char}</span>`
).join('');

//////////////////////////////////////////////// DRAWING ////////////////////////////////////////////////

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
let isDrawing = false;
let x = 0;
let y = 0;
var offsetX;
var offsetY;

function startup() {
    canvas.addEventListener('touchstart', handleStart);
    canvas.addEventListener('touchend', handleEnd);
    canvas.addEventListener('touchcancel', handleCancel);
    canvas.addEventListener('touchmove', handleMove);
    canvas.addEventListener('mousedown', (e) => {
        x = e.offsetX;
        y = e.offsetY;
        isDrawing = true;
    });

    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = e.offsetX;
            y = e.offsetY;
        }

        cursor.style.width = '0px';
        cursor.style.height = '0px';

        drawingcursor.style.width = '15px';
        drawingcursor.style.height = '15px';
    });

    canvas.addEventListener('mouseup', (e) => {
        if (isDrawing) {
            drawLine(context, x, y, e.offsetX, e.offsetY);
            x = 0;
            y = 0;
            isDrawing = false;
        }
    });

    canvas.addEventListener('mouseleave', () => {
        cursor.style.backgroundImage = "url('./assets/Cursor/Cursor.png')";

        drawingcursor.style.width = '0px';
        drawingcursor.style.height = '0px';

        cursor.style.width = '23px';
        cursor.style.height = '23px';
    });
}

document.addEventListener("DOMContentLoaded", startup);

const ongoingTouches = [];

function handleStart(evt) {
    evt.preventDefault();
    const touches = evt.changedTouches;
    offsetX = canvas.getBoundingClientRect().left;
    offsetY = canvas.getBoundingClientRect().top;
    for (let i = 0; i < touches.length; i++) {
        ongoingTouches.push(copyTouch(touches[i]));
    }
}

function handleMove(evt) {
    evt.preventDefault();
    const touches = evt.changedTouches;
    for (let i = 0; i < touches.length; i++) {
        const color = 'black';
        const idx = ongoingTouchIndexById(touches[i].identifier);
        if (idx >= 0) {
            context.beginPath();
            context.moveTo(ongoingTouches[idx].clientX - offsetX, ongoingTouches[idx].clientY - offsetY);
            context.lineTo(touches[i].clientX - offsetX, touches[i].clientY - offsetY);
            context.lineWidth = 11;
            context.strokeStyle = 'black';
            context.lineJoin = "round";
            context.closePath();
            context.stroke();
            ongoingTouches.splice(idx, 1, copyTouch(touches[i]));
        }
    }
}

function handleEnd(evt) {
    evt.preventDefault();
    const touches = evt.changedTouches;
    for (let i = 0; i < touches.length; i++) {
        const color = document.getElementById('black').value;
        let idx = ongoingTouchIndexById(touches[i].identifier);
        if (idx >= 0) {
            context.lineWidth = '11';
            context.fillStyle = 'black';
            ongoingTouches.splice(idx, 1);
        }
    }
}

function handleCancel(evt) {
    evt.preventDefault();
    const touches = evt.changedTouches;
    for (let i = 0; i < touches.length; i++) {
        let idx = ongoingTouchIndexById(touches[i].identifier);
        ongoingTouches.splice(idx, 1);
    }
}

function copyTouch({
    identifier,
    clientX,
    clientY
}) {
    return {
        identifier,
        clientX,
        clientY
    };
}

function ongoingTouchIndexById(idToFind) {
    for (let i = 0; i < ongoingTouches.length; i++) {
        const id = ongoingTouches[i].identifier;
        if (id === idToFind) {
            return i;
        }
    }
    return -1;
}

function drawLine(context, x1, y1, x2, y2) {
    context.beginPath();
    context.strokeStyle = 'black';
    context.lineWidth = 11;
    context.lineJoin = "round";
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.closePath();
    context.stroke();
}

function clearArea() {
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
