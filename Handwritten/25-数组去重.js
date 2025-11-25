function uniqueArr(arr){
    const newArr = []
    arr.forEach(ele => {
        if(!newArr.includes(ele)){
            newArr.push(ele)
        }
    });
    return newArr
}
let arr = [1,2,1,3,1,4,2,2,4,6]
console.log(uniqueArr(arr));
console.log([...new Set(arr)]);