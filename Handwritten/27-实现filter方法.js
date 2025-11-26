let arr = [1,2,3,4,52,6]

Array.prototype.newFilter = function(fun,thisArg){
   let newArr = []
    for(let i = 0;i<this.length;i++){
        let item = this[i]
        if(fun.call(thisArg,item,i,this)){
            newArr.push(item)
        }
    }
   return newArr
}

console.log(arr.newFilter(item=>{
    return item>3
}));