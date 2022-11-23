// Variables
let stylesheet = document.getElementById('stylesheet'); let text_area = document.getElementById('text-area'); 
var darkMode = false; var css = true; var index = 0;

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
        stylesheet.setAttribute('href', 'style-light.css')
    } else {
        darkMode = true
        localStorage.setItem('mode', 'dark')
        stylesheet.setAttribute('href', 'style-dark.css')
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
