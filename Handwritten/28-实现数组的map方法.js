let arr = [1,2,3,4,5,6]

Array.prototype.newMap = function(fun,thisArg){
    let newArr=[]
    for(let i = 0;i<this.length;i++){
       let item = fun.call(thisArg,this[i],i,this)
       newArr.push(item)
    }
    return newArr
}
console.log(arr.newMap((item)=>item*2));