let randomWords = 'Life sister perpetual express innate hastened quitting few wanted share justice blush drift pronounce intention. Waited leaf inquiry yet outward improved satisfied answered ready well. Country gravity cause ignorant knew hand everything endeavor wanted suffering cottage. Add pain moonlight. Place marry attempted into those at should passed extended. Married elsewhere marriage nothing repeated add long points believed furnished. Wisdom sell welcome merits observe hill half roof early demesne juvenile besides. His correct jointure exercise horses. Quiet lain certainly throwing doubtful learn resolve. Told rejoiced declared applauded should norland out. Vanity still continual express many sometimes having style see absolute wrote formed enough been certainty asked pleased. Building put perhaps solid fortune have but timed cheerful evening left rather satisfied understood required use. Wished to equally felicity pronounce took. Read reserved elderly lively unpleasant any income smallness your overcame went taste thoughts. Dwelling invitation show trifling amiable felt. Seems no whatever sure beauty being lady pronounce. Forty innate forty felt continue. Distance september sudden words unreserved chamber differed believe early laughter unpleasant up. Terminated since admire precaution whom suspected marry by event possession principle rather. Visitor concealed meant seven several total. Ladies smallest abilities answered feeling stand day downs paid music unfeeling longer detract far especially arise colonel. Dare unpleasing repulsive cousin greatest tried since wholly so advantage melancholy without months allow passed endeavor. Joy trifling wife consulted convinced same express discourse arrived learn repeated behind. Door welcome tried express edward earnestly nor engrossed formerly blush dine advantage with pasture received. Admiration enough longer noise avoid daughters down wonder interest precaution unpacked contained your hold. Mistake lady quick prevent females within is never fond how friends preserved having. Led immediate wanted indulged unpleasant horses manners shed. Worth well company he speaking worthy abroad astonished poor favour. Musical ecstatic ye offended table arise. Agreed about collecting demands along saved spot went looking occasional. Began except convinced settling highest oh order john windows invited opinion distrusts lain knew followed minuter. Smile forty horrible greatly demands estate improve spot elderly quick herself learn along. Remark weddings daughters. Tears entire bore bed pretended county will margaret quitting extent front missed hearted proposal depend. Part listening coming what garden. Hard widen especially delight prevailed gentleman september bringing journey.'

randomWords = randomWords.replace(/\./g, '');

const randomWordsArr = randomWords.split(' ');
const wordsAmount = randomWordsArr.length - 1;
const numberOfWordsInput = document.getElementById('numberOfWords');
let numberOfWords = 10;
const re = new RegExp(/[a-z]/, 'i');
numberOfWordsInput.addEventListener('input', (e) => {
    numberOfWords = numberOfWordsInput.value;
    console.log(numberOfWords);
    if(numberOfWords > 50) {
        numberOfWords %= 50;
        numberOfWordsInput.value = numberOfWords;
    }
    if(numberOfWords == '' || !numberOfWords.match(/[0-9]/)) {
        numberOfWords = 10;
    }
    textBlock.innerHTML = '';
    insertText();
})
function generateText(numberOfWords) {
    const wordsToDisplay = [];
    for(let i = 0; i < numberOfWords; i++) {
        let randomWord = Math.floor(Math.random() * wordsAmount);
        wordsToDisplay.push(randomWordsArr[randomWord]);
    }
    return wordsToDisplay;
}

const textBlock = document.getElementById('text');
function insertText() {
    const words = generateText(numberOfWords);
    for(let i = 0; i < words.length; i++) {
        textBlock.innerText += ` ${words[i]}`;
    }
}
insertText();