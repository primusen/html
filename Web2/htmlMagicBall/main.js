var done = true;
let output = document.getElementById('output');
let ball = document.getElementById('ball');

function shake () {
    if (done) {
        done = false; ball.classList.toggle('shake'); output.classList.toggle('fadein');
        setTimeout(reset, 2000)

        var randomNumber = Math.floor(Math.random() * 19);

        switch (randomNumber) {
            case 0:
                output.textContent = 'Maybe, try again.'; // non-committal
                break;
            case 1:
                output.textContent = 'Absolutely.'; // affirmative
                break;
            case 2:
                output.textContent = 'Why would you think that??'; // negative
                break;
            case 3:
                output.textContent = 'No no absolutely not!'; // negative
                break;
            case 4:
                output.textContent = 'Yes.'; // affirmative
                break;
            case 5:
                output.textContent = 'No.'; // negative
                break;
            case 6:
                output.textContent = 'Without a doubt.'; // affirmative
                break;
            case 7:
                output.textContent = 'Try again.'; // non-committal
                break;
            case 8:
                output.textContent = 'Negative.'; // negative
                break;
            case 9:
                output.textContent = 'Certainly.'; // affirmative
                break;
            case 10:
                output.textContent = 'Absolutely SLAY!'; // affirmative
                break;
            case 11:
                output.textContent = 'Focus harder and try again.'; // non-committal
                break;
            case 12:
                output.textContent = 'Yes slay!'; // affirmative
                break;
            case 13:
                output.textContent = 'Probably no.'; // negative
                break;
            case 14:
                output.textContent = 'Definetely yes.'; // affirmative
                break;
            case 15:
                output.textContent = 'As I see it yes.'; // affirmative
                break;
            case 16:
                output.textContent = 'Positive'; // affirmative
                break;
            case 17:
                output.textContent = 'You are not ready to know.'; // non-committal
                break;
            case 18:
                output.textContent = 'Affirmative'; // affirmative
                break;
            case 19:
                output.textContent = 'Concentrate and try again.'; // non-committal
                break;
            default:
                output.textContent = 'Something is broken.';
        }
    }
}

function reset () {
    ball.classList.toggle('shake'); output.classList.toggle('fadein');
    done = true
}