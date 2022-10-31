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

function switchMode () {
    if (darkMode) {
        darkMode = false
        stylesheet.setAttribute('href', 'style-light.css')
    } else {
        darkMode = true
        stylesheet.setAttribute('href', 'style-dark.css')
    }
}

function createParagraph () {
    const paragraph = document.createElement('p')
    text = window.prompt('What do you want it to say in the paragraph?');
    if (text === '') {
        alert('Invalid input, try again.')
        createParagraph()
    } else if (text == undefined) {
        return
    } else {
        paragraph.appendChild(document.createTextNode(text));
        text_area.appendChild(paragraph);
        index++;
        text_area.lastChild.setAttribute('onclick', 'editParagraph(' + index.toString() + ')')
        text_area.lastChild.setAttribute('id', index.toString())
    }
}

function editParagraph (index) {
    text = window.prompt('Enter new text:')
    if (text === '') {
        alert('Invalid input, try again.')
        editParagraph()
    } else if (text == undefined) {
        return
    } else {
        document.getElementById(index).innerText = text;
    }
}

function removeLastChild () {
    text_area.lastChild.remove();
}

function toggleCSS () {
    if (stylesheet.hasAttribute('rel')) {
        stylesheet.removeAttribute('rel')
    } else {
        stylesheet.setAttribute('rel', 'stylesheet')
    }
}