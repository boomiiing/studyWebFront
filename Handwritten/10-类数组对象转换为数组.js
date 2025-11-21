const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
// const arr = Array.from(arrayLike);
const arr = Array.prototype.concat.apply([], arrayLike);
//slice 不检查 this 是否为真正的数组
//只要对象有 length 属性和数字索引即可正常工作
// const arr = Array.prototype.slice.call(arrayLike);
console.log(arr); // ['a', 'b', 'c']