function parseURLParams(url){
    const urlDetail = new URL(url)
    const result = {};
    for( const[key,value] of urlDetail.searchParams){
        result[key] = value
    }
    return result
}

const url = "https://example.com?name=John&age=30&hobbies=reading&hobbies=swimming";
const params = parseURLParams(url);
console.log(params)