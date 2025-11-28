
//  A instanceof B 如果B的prototype属性所指向的原型对象是A实例对象的原型链接上的某个对象, 返回true, 否则返回false
function newInstanceOf(instance,onProto){
    let flag = false
    let nowProto = onProto.prototype
    function findProto(proto,nowProto){
        if(proto===nowProto){
            flag = true
        }
        if(proto.__proto__ != null){
            return  findProto(proto.__proto__,nowProto)
        }else{
            return flag
        }
        
    }
    return findProto(instance.__proto__,nowProto)
}


function Foo() { }
const f1 = new Foo()
const f2 = new Foo()

const o1 = new Object()
const o2 = {}
// 下面的结果
console.log(Foo instanceof Object)
console.log(Foo instanceof Function)
console.log(Object instanceof Object)
console.log(Function instanceof Function)
console.log(Function instanceof Object)
console.log(Object instanceof Foo)
console.log(f1 instanceof Function)
console.log(f1 instanceof Object)

console.log('---------------------------');

console.log(newInstanceOf(Foo,Object))
console.log(newInstanceOf(Foo,Function))
console.log(newInstanceOf(Object,Object))
console.log(newInstanceOf(Function,Function))
console.log(newInstanceOf(Function,Object))
console.log(newInstanceOf(Object,Foo))
console.log(newInstanceOf(f1,Function))
console.log(newInstanceOf(f1,Object))