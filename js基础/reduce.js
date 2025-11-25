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
Array.prototype.newFlat = function(deep){
    console.log(deep);
    let cpoyArr = [...this]
    const newArr = []
    cpoyArr.forEach(ele => {
       if(Array.isArray(ele)&&deep=='Infinity'){
        newArr.push(...ele.newFlat('Infinity') )
       }else{
        newArr.push(ele)
       }
    });
    return newArr
}
console.log(arr.newFlat(Infinity));
console.log(arr.newFlat());