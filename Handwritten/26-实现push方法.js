let arr = [1,2,3]
Array.prototype.newPush = function(item){
    console.log('nn'+this);
    console.log('mm'+item);
   this[this.length] = item
   return this.length
}
console.log(arr.push(5));
console.log(arr);