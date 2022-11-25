// Variables
const stylesheet = document.getElementById('stylesheet'); 
const text_area = document.getElementById('text-area'); 
const music_span = document.getElementById('music');
var darkMode, music, paused = false; var css = true; var index = 0;

// Audios
const chipmunks = new Audio('./media/chipmunks.mp3')
const fart = new Audio('./media/fart.mp3')
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
        index++;
        text_area.lastChild.setAttribute('onclick', 'editParagraph(' + index.toString() + ')');
        text_area.lastChild.setAttribute('id', index.toString());
    }
}

// Edit element in #text-area
function editParagraph (index) {
    text = window.prompt('Enter new text:')
    if (text === '') {
        alert('Invalid input, try again.');
        editParagraph(index);
    } else if (text == undefined) {
        return
    } else {
        document.getElementById(index).innerText = text;
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
