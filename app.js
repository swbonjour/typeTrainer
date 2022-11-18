import './textGenerator.js'
import './statistic.js'
import { countSPS, countWPM } from './statistic.js';

const textBlock = document.getElementById('text');
let textArr = textBlock.innerText.split('');

const inputBlock = document.getElementById('input');
inputBlock.focus();
const congratulations = document.getElementById('congratulations');
const restartButton = document.getElementById('restart');

const numberOfWordsInput = document.getElementById('numberOfWords');
numberOfWordsInput.addEventListener('input', (e) => {
    textArr = textBlock.innerText.split('');
    inputBlock.innerHTML = '';
    mistakesArr.length = 0;
    inputArr.length = 0;
})

inputBlock.addEventListener('keydown', handleInputBlock);
let started = false;
let startTime = 0;
let finishTime = 0;
let wordsAmount = 0;
const spsBlock = document.getElementById('statistic-sps');
const wpmBlock = document.getElementById('statistic-wpm');
function handleInputBlock(e) {
    inputBlock.scrollTop = inputBlock.scrollHeight;
    if(!started) {
        started = true;
        startTime = Date.now();
        wordsAmount = textArr.filter(word => word == ' ').length + 1;
    }
    const completed = checkComplete(textArr, inputArr);
    if(completed) {
        finishTime = Date.now();
        const sps = countSPS(completed, startTime, finishTime, textArr.length);
        spsBlock.innerHTML = sps;
        const wpm = countWPM(completed, startTime, finishTime, wordsAmount);
        wpmBlock.innerHTML = wpm;
        started = false;
        congratulations.classList.add('congratulations-complete');
        restartButton.classList.add('restart-complete');
        inputBlock.removeEventListener('keydown', handleInputBlock);
    }
    if(e.key == 'Backspace') {
        deleteLetter();
    }
    createLetter(e.key);
    markMistakes(checkMistakes(textArr, inputArr));
}

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
        if(!letters[mistakesArr[i]].classList.contains('space-mistake') && letters[mistakesArr[i]].innerHTML == '&nbsp;') {
            letters[mistakesArr[i]].classList.add('space-mistake');
        }
    }
    return;
}

function checkComplete(textArr, inputArr) {
    console.log(textArr.length, inputArr.length)
    if(textArr.length - 1 == inputArr.length) {
        return true;
    }
    return false;
}

restartButton.addEventListener('click', (e) => {
    restart();
});
function restart() {
    inputBlock.innerHTML = '';
    inputArr.length = 0;
    inputBlock.focus();
    congratulations.classList.remove('congratulations-complete');
    restartButton.classList.remove('restart-complete');
    inputBlock.addEventListener('keydown', handleInputBlock);
}