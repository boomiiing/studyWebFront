function shuffleArray(arr){
    const newArr = [...arr]
    for(let i = newArr.length - 1 ; i>0 ;i--){
        //Math.floor向下取整
        //表示获取包含自身位置以前的随机一位
        const j = Math.floor(Math.random()*(i+1))
        console.log(j);
        [newArr[i],newArr[j]] = [newArr[j],newArr[i]] 
    }
    return newArr
}
let arrary = [1,2,3,4,5,6]
console.log(shuffleArray(arrary));