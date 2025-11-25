function snakeToCamel(str){
    return str.replace(/_([a-z])/g,(match,letter)=>{
        console.log(match,letter);
       return letter.toUpperCase()
    })
}
let stri = 'hello_all_over_the_world'
console.log(snakeToCamel(stri));
function camelToSnake(str){
    return str.replace(/[A-Z]/g,(match)=>{
       return "_" + match.toLowerCase()
    })
}
let strin = "helloAllOverTheWorld"
console.log(camelToSnake(strin));
