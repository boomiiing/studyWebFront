//使用 arguments 对象
// function sum(){
//     let total = 0
//     for(let i = 0;i<arguments.length;i++){
//         total += arguments[i]
//     }
//     return total
// }

//剩余参数
// function sum(...numbers){
//     return numbers.reduce((total,item)=> total + item,0)
// }

//使用 Array.from 转换 arguments
function sum(){
    return Array.from(arguments).reduce((total,item)=>total + item)
}

console.log(sum(1,2,3,4))
