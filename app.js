const textBlock = document.getElementById('text');
const textArr = textBlock.innerText.split('');

const inputBlock = document.getElementById('input');
inputBlock.focus();
const congratulations = document.getElementById('congratulations');
inputBlock.addEventListener('keydown', (e) => {
    if(checkComplete(textArr, inputArr)) {
        congratulations.classList.add('congratulations-complete');
    }
    if(e.key == 'Backspace') {
        deleteLetter();
    }
    createLetter(e.key);
    markMistakes(checkMistakes(textArr, inputArr));
})

const inputArr = [];
const bannedKeys = ['Shift', 'Backspace', 'Control', 'Alt', 'CapsLock', 'Tab', 'Enter', 'Escape', 'Meta', 'ContextMenu'];
function createLetter(key) {
    for(let i = 0; i < bannedKeys.length; i++) {
        if(bannedKeys.indexOf(key) != -1) {
            return null;
        }
    }
    const letter = document.createElement('p');
    letter.innerText = key;
    letter.classList.add('letter');
    if(key == ' ') {
        letter.innerHTML = '&nbsp;';
    }
    inputArr.push(key);
    inputBlock.appendChild(letter);
    return;
}

function deleteLetter() {
    const index = inputArr.length - 1;
    if(mistakesArr[mistakesArr.length - 1] == index) {
        mistakesArr.pop();
    }
    inputArr.pop();
    inputBlock.lastChild.remove();
    return;
}

const mistakesArr = [];
function checkMistakes(textArr, inputArr) {
    for(let i = 0; i < inputArr.length; i++) {
        if(inputArr[i] != textArr[i]) {
            mistakesArr.indexOf(i) == -1 ? mistakesArr.push(i) : null;
        }
    }
    return mistakesArr;
}

function markMistakes(mistakesArr) {
    const letters = inputBlock.childNodes;
    for(let i = 0; i < mistakesArr.length; i++) {
        if(!letters[mistakesArr[i]].classList.contains('letter-mistake')) {
            letters[mistakesArr[i]].classList.add('letter-mistake');
        }
    }
    return;
}

function checkComplete(textArr, inputArr) {
    if(textArr.length - 1 == inputArr.length) {
        return true;
    }
    return false;
}