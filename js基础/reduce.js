let arr = [1,2,3,4,5,6]

console.log(arr.reduce((item,curr,ele)=>{
    return item += curr
 },0));