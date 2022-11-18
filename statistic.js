export function countSPS(isCompleted, startTime, finishTime, symbolsAmount) {
    if(isCompleted) {
        const sps = symbolsAmount / Math.floor((finishTime - startTime) / 1000);
        if(sps == Infinity) {
            return symbolsAmount;
        }
        return Math.floor(sps);
    }
}

export function countWPM(isCompleted, startTime, finishTime, wordsAmount) {
    if(isCompleted) {
        const wpm = wordsAmount / Math.floor((finishTime - startTime) / 1000 / 60);
        if(wpm == Infinity) {
            return wordsAmount;
        }
        return Math.floor(wpm);
    }
}

export function countAccuracy(mistakesAmount, symbolsAmount) {
    const acc = 100 - (mistakesAmount / symbolsAmount) * 100;
    if(acc < 0) {
        return 0;
    }
    return acc;
}