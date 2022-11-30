// Variables
const stylesheet = document.getElementById('stylesheet'); 
const text_area = document.getElementById('text-area'); 
const music_span = document.getElementById('music');
var darkMode, music, paused, modeShowtime = false; var css = true; 
var i, m, p = 0; var k = 3; var t = 5; var u = 10; 

// Audios
const chipmunks = new Audio('./media/chipmunks.mp3')
const fart = new Audio('./media/fart.mp3')
const fart2 = new Audio('./media/fart.mp3')
const fart3 = new Audio('./media/fart.mp3')
const markiplier = new Audio('./media/markiplier.mp3')
const tada = new Audio('./media/tada.mp3')
const vineboom = new Audio('./media/vineboom.mp3')
const violin = new Audio('./media/violin.mp3')
const yippie = new Audio('./media/yippie.mp3')

// Methods used:
// 1 .getElementById 
// 2 .setAttribute
// 3 .removeAttribute
// 4 .hasAttribute
// 5 .createElement
// 6 .appendChild
// 7 .createTextNode
// 8 .lastChild
// 9 .innerText
// 10 .remove


// Remove dummy child in #text-area
    removeLastChild()

// Apply last theme state
if (localStorage.getItem('mode') === null) {
    localStorage.setItem('mode', 'light')
} else if (localStorage.getItem('mode') === 'dark') {
    switchMode()
}

// Switch between dark and light mode
function switchMode () {
    if (darkMode) {
        darkMode = false
        localStorage.setItem('mode', 'light')
        stylesheet.setAttribute('href', './css/style-light.css')
    } else {
        darkMode = true
        localStorage.setItem('mode', 'dark')
        stylesheet.setAttribute('href', './css/style-dark.css')
    }
}

// Toggle css on and off
function toggleCSS () {
    if (stylesheet.hasAttribute('rel')) {
        for (const sheet of document.getElementsByClassName('stylesheet')) {sheet.removeAttribute('rel')}
    } else {
        for (const sheet of document.getElementsByClassName('stylesheet')) {sheet.setAttribute('rel', 'stylesheet')}
    }
}

// Create element in #text-area
function createParagraph () {
    const paragraph = document.createElement('p')
    text = window.prompt('What do you want it to say in the paragraph?');
    if (text === '') {
        alert('Invalid input, try again.');
        createParagraph();
    } else if (text == undefined) {
        return
    } else {
        paragraph.appendChild(document.createTextNode(text));
        text_area.appendChild(paragraph);
        i++;
        text_area.lastChild.setAttribute('onclick', 'editParagraph(' + i.toString() + ')');
        text_area.lastChild.setAttribute('id', i.toString());
    }
}

// Edit element in #text-area
function editParagraph (i) {
    text = window.prompt('Enter new text:')
    if (text === '') {
        alert('Invalid input, try again.');
        editParagraph(i);
    } else if (text == undefined) {
        return
    } else {
        document.getElementById(i).innerText = text;
    }
}

// Remove last element in #text-area
function removeLastChild () {
    text_area.lastChild.remove();
}

// Play sound
function playSound (num) {
    switch (num) {
        case 0:
            if (music) {
                music_span.textContent = 'Music ON';
                chipmunks.pause();
                music = false;
            } else {
                music_span.textContent = 'Music OFF';
                chipmunks.load(); chipmunks.play();
                music = true;
            } break;
        case 1:
            fart.load(); fart.play();
            break;
        case 2:
            markiplier.load(); markiplier.play();
            break;
        case 3:
            tada.load(); tada.play();
            break;
        case 4:
            vineboom.load(); vineboom.play();
            break;
        case 5:
            violin.load(); violin.play();
            break;
        case 6:
            yippie.load(); yippie.play();
            break;
        default:
            console.error('Playsound error')
            break;
    }
}

function showtime () {
    if (!modeShowtime) {
        document.getElementById('showtime').classList.add('rainbow-text')
        modeShowtime = true; audioloop();
    } else {
        document.getElementById('showtime').classList.remove('rainbow-text')
        modeShowtime = false;
    }
}

function audioloop () {
    if (i == 0) {
        fart.load(); fart.play()   
        i++ 
    } else if (i == 1) {
        fart2.load(); fart2.play()
        i++
    } else {
        fart3.load(); fart3.play()    
        i = 0
    }

    let random = (5 + (Math.floor(Math.random() * 10)))

    if (u >= random) {
        violin.load(); violin.play()
        u = 0
    }

    if (m >= random) {
        vineboom.load(); vineboom.play();
        m = 0;
    }

    if (p >= random) {
        tada.load(); tada.play();
        p = 0;
    }

    if (t >= random) {
        markiplier.load(); markiplier.play();
        t = 0;
    }
    
    if (k >= (random-3)) {
        yippie.load(); yippie.play();
        k = 0
    }

    u++; t++;
    p += 2; 
    m, k += 3;

    if (modeShowtime) {
        setTimeout(function () { audioloop()}, 200 + Math.round((Math.random() * 100)))    
    }
}