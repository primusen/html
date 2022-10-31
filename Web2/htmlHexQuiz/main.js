let option1 = document.getElementById('option1'); let option2 = document.getElementById('option2'); let option3 = document.getElementById('option3');
let canvas = document.getElementById('canvas'); let feedback = document.getElementById('feedback');
const char = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

const options = () => {
    let hexcodes = [];
    for (let i = 0; i < 3; i++) {
        let hexcode = '';
        for (let i = 0; i < 6; i++) {
            hexcode += char[Math.round(Math.random() * (char.length - 1))]
        } hexcodes.push(`#${hexcode}`);
    } return hexcodes;
}

function reset () {
    gen = options()
    option1.innerText = gen[0]; option2.innerText = gen[1]; option3.innerText = gen[2];

    index = Math.round(Math.random() * 2)
    console.log(index, gen[index])
    canvas.style.backgroundColor = gen[index]
}

function guess (option) {
    if (index === option) {
        feedback.classList.add('correct'); feedback.classList.remove('incorrect');
        feedback.innerText = 'Correct answer!';
        reset()
    } else {
        feedback.classList.add('incorrect'); feedback.classList.remove('correct');
        feedback.innerText = 'Wrong answer.';
    }
}

reset()