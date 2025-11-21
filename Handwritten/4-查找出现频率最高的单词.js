const article = `
JavaScript is a programming language. JavaScript is used for web development. 
Many developers love JavaScript because JavaScript is versatile and powerful.
`;

function findMostFrequentWordWithMap(text) {
    const words = text.toLowerCase().match(/[a-z]+/g)
    const wordsMap = new Map()
    words.forEach(ele => {
        wordsMap.set(ele, (wordsMap.get(ele) || 0) + 1)
    })
    let maxCount = 0,
        frqText = ''
    wordsMap.forEach((value, key) => {
        if (value > maxCount) {
            maxCount = value
            frqText = key
        }
    })
    return { frqText, maxCount }
}
console.log(findMostFrequentWordWithMap(article));