// function shiftNum(num){
//     let numl = num*1
//     if(typeof(numl)=='number'){
//         let num2 = numl+''
//         let arr = []
//         function cutToThree(numb){
//             if(numb.length>3){
//                 arr.unshift(numb.slice(- 3)) 
//                 cutToThree(numb.slice(0, - 3))
//             }else{
//                 arr.unshift(numb)
//             }
//         }
//         cutToThree(num2)
//        return arr+''
//     }else{
//         return ''
//     }
// }
// let a = 10000
// console.log(shiftNum(a));

function formatNumberWithCommas(num) {
    const str = num.toString();
    const len = str.length;
    let result = '';
    for (let i = 0; i < len; i++) {
        if (i > 0 && (len - i) % 3 === 0) {
            result += ',';
        }
        result += str[i];
    }
    return result;
}

const number = 1000;
const formattedNumber = formatNumberWithCommas(number);
console.log(formattedNumber); // 输出 '1,000'
//原生方法
console.log(a.toLocaleString())