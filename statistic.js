export function countSPS(isCompleted, startTime, finishTime, symbolsAmount) {
    if(isCompleted) {
        const sps = symbolsAmount / Math.floor((finishTime - startTime) / 1000);
        if(sps == Infinity) {
            return symbolsAmount;
        }
        return sps;
    }
}

export function countWPM(isCompleted, startTime, finishTime, wordsAmount) {
    if(isCompleted) {
        const wpm = wordsAmount / Math.floor((finishTime - startTime) / 1000 / 60);
        if(wpm == Infinity) {
            return wordsAmount;
        }
        return wpm;
    }
}