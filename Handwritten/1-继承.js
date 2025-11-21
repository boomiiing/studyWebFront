//原型链继承
// function Coder() {
//     this.type = 'Coder'
// }

// Coder.prototype.rap = function() {
//     console.log('yo yo yo');
// }

// function Yupi(name) {
//     this.name = name;
//     this.age = 18;
// }
// Yupi.prototype = new Coder()
// Yupi.prototype.constructor = Yupi
// var yp = new Yupi('小明')
// console.log(yp.type)
// yp.rap()
// console.log(yp.name)
// console.log(yp.age)
//构造函数继承
// function Coder() {
//     this.type = 'Coder'
// }

// Coder.prototype.rap = function() {
//     console.log('yo yo yo');
// }

// function Yupi(name) {
//     Coder.call(this)
//     this.name = name;
//     this.age = 18;
// }
// var yp = new Yupi('小明')
// console.log(yp.type)
// console.log(yp.name)
// console.log(yp.age)
//组合继承
// function Coder() {
//     this.type = 'Coder'
// }

// Coder.prototype.rap = function() {
//     console.log('yo yo yo');
// }

// function Yupi(name) {
//     Coder.call(this)
//     this.name = name;
//     this.age = 18;
// }
// Yupi.prototype = new Coder()
// Yupi.prototype.constructor = Yupi

// var yp = new Yupi('小明')
// var yp1 = new Yupi('小张')
// yp1.type = 'asddddd'
// yp1.name = '12333'
// console.log(yp.type)
// yp.rap()
// console.log(yp.name)
// console.log(yp.age)
// console.log(yp1.type)
// yp1.rap()
// console.log(yp1.name)
// console.log(yp1.age)
//Class类继承
// class Coder {
//     constructor() {
//         this.type = 'Coder'
//     }
// }

// Coder.prototype.rap = function() {
//     console.log('yo yo yo');
// }

// class Yupi extends Coder {
//     constructor(name) {
//         super()
//         this.name = name;
//         this.age = 18;
//     }
// }
// var yp = new Yupi('小明')
// var yp1 = new Yupi('小张')
// yp1.type = 'asddddd'
// yp1.name = '12333'
// console.log(yp.type)
// yp.rap()
// console.log(yp.name)
// console.log(yp.age)
// console.log(yp1.type)
// yp1.rap()
// console.log(yp1.name)
// console.log(yp1.age)
//寄生组合继承
// function Coder() {
//     this.type = 'Coder'
// }

// Coder.prototype.rap = function() {
//     console.log('yo yo yo');
// }

// function Yupi(name) {
//     Coder.call(this)
//     this.name = name;
//     this.age = 18;
// }

// Yupi.prototype = Object.create(Coder.prototype)
// Yupi.prototype.constructor = Yupi

function Coder() {
    this.type = 'Coder'
    this.skills = ['js', 'html', 'css']
}
Coder.prototype.rap = function() {
    console.log('你好！')
}

function Yupi(name) {
    Coder.call(this)
    this.age = 18
    this.name = name
}




var yp = new Yupi('小明')
var yp1 = new Yupi('小张')
yp1.skills.push('vue2')
yp1.type = 'asddddd'
yp1.name = '12333'
    // yp.rap()
console.log(yp.name)
console.log(yp.age)
console.log(yp.type)
console.log(yp.skills)
    // yp1.rap()
console.log(yp1.name)
console.log(yp1.age)
console.log(yp1.skills)