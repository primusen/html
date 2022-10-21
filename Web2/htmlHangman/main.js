let output_graphics = document.getElementById('display1'); let output_text = document.getElementById('display2');
let button = document.getElementById('btn'); bmode = 0;

const hangmanPics = ["+---+\n|\n|\n|\n===", "+---+\n| ‎ ‎ ‎ ‎ ‎ O\n|\n|\n===", "+---+\n| ‎ ‎ ‎ ‎ ‎ O\n| ‎ ‎ ‎ ‎ ‎ ‎ |\n|\n===", "+---+\n| ‎ ‎ ‎ ‎ ‎ O\n| ‎ ‎ ‎ ‎ ‎ /|\n|\n===", "+---+\n| ‎ ‎ ‎ ‎ ‎ O\n| ‎ ‎ ‎ ‎ ‎ /|\\\n|\n===", "+---+\n| ‎ ‎ ‎ ‎ ‎ O\n| ‎ ‎ ‎ ‎ ‎ /|\\\n| ‎ ‎ ‎ ‎ ‎ /\n===", "+---+\n| ‎ ‎ ‎ ‎ ‎ O\n| ‎ ‎ ‎ ‎ ‎ /|\\\n| ‎ ‎ ‎ ‎ ‎ / \\\n==="]
const words = 'slay queen william isabelle melvin eskil jimin kpop bts twice blackpink cat dog kitty roblox mall dahood robux minecraft puppy hangman good kitten discord moderator snapchat instagram chrome tycoon love star face sex feet fetish mark hilary physics markiplier madalena word girl boy christer tiktok trend chrissy pink minion no yes maybe sure okay'.split(' ');

function press() {
    if (bmode === 0) {
        bmode = 1; document.getElementById('btn_div').style.visibility = 'hidden'; document.getElementById('stuck').style.visibility = 'visible';
        start(); gameLoop();
    } 
}

function start () {
    blank = []; guessed = []; msg = '';
    misses = 0; counter = 0;
    secret_word = words[Math.floor((Math.random() * words.length))];
    wordList = secret_word.split('');

    for (let i = 0; i < secret_word.length; i++) {
        blank.push('_');
    }
    display()
}

function display () {
    output_graphics.innerText = (hangmanPics[misses]);
    output_text.innerText = (secret_word.length + ' letters: ' + blank.join('') + msg);
}

function newGuess () {
    completed = false;

    while (!completed) {
        guess = prompt('Enter a letter:'); 
        guess = guess.toLowerCase();
        
        if (guess.length === 1 && guess.match(/[a-z]/i)) {
            if (!guessed.includes(guess)) {
                completed = true;

                guessed.push(guess)

                if (wordList.includes(guess)) {
                    correct(guess)
                } else {
                    misses++
                    if (misses != 5) {
                        alert('Incorrect, you have ' + (6 - misses) + ' lives left.')
                    } else {    
                        alert('Incorrect, you have 1 life left.')
                    }
                }
            } else {
                alert('You already guessed that letter!')
            }
        }
    }
}

function correct (guess) {
    x = []; y = []; done = false;

    while (!done) {
        if (wordList.includes(guess)) {
            x.push(wordList[wordList.indexOf(guess)]);
            y.push(wordList.indexOf(guess));

            wordList[wordList.indexOf(guess)] = '';
        } else {
            done = true;
        }
    }

    for (let i = 0; i < x.length; i++) {
        blank[y[i]] = x[i]
        counter++
    }
}

function gameLoop() {
    setTimeout(function () {
        display()
        newGuess()
        display()

        if (counter === secret_word.length || misses === 6) {
            if (counter === secret_word.length) {
                msg = '\nYou win! The secret word was ' + secret_word + '!';
            } else if (misses === 6) {
                msg = '\nYou ran out of lives! The secret word was ' + secret_word + '.';
            }
            display();
            bmode = 0; button.textContent = 'New Game'; document.getElementById('btn_div').style.visibility = 'visible'; document.getElementById('stuck').style.visibility = 'hidden';

            return
        } gameLoop(); 
    }, 500)
}
    