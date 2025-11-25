function flatArr(arr){
    const newArr = []
    arr.forEach(ele => {
       if(Array.isArray(ele)){
        newArr.push(...flatArr(ele))
       }else{
        newArr.push(ele)
       }
    });
    return newArr
}

let arr = [1,2,[3,4,[5,6,[7]]],8]
console.log(flatArr(arr));
console.log(arr.flat(Infinity));