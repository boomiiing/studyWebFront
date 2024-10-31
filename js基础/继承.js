    // 方式一: 原型继承
    //  步骤：1.子构造函数借用父构造函数： Person.call(this,name)
    //        2.子构造函数原型等于父构造函数的实例 ：⑴ Student.prototype = new Person(); 或 ⑵ Student.prototype =Object.create(Person.prototype)
    //        3.使子构造函数原型的constructor指向子构造函数（修复构造函数指针）：   Student.prototype.constructor = Student
    function Person(name){
      this.name = name 
    }
    Person.prototype.sayHi = function(){
      console.log('大家好！我是'+this.name)
    }
    function Student(name,school){
      Person.call(this,name)
      this.school = school
    }
    // Student.prototype = new Person()
    Student.prototype =Object.create(Person.prototype)
    Student.prototype.constructor = Student
    var oneMan = new Student('小明',20)
    console.log(oneMan)
    oneMan.sayHi()
    // 方式二： class类，extends
    //  步骤：1.创建class父类与class子类
    //        2.使用extends 使子类继承父类
    //        3.在constructor中使用super，以在子类中使用父类的的创建实例时创建相关字段
    class Animal{
      constructor(name){
        this.name = name
      }
      sayHi(){
        console.log('大家好！哈哈哈')
      }
    }
    class Dog extends Animal{
      constructor(name,age){
        super(name)
        this.age = age
      }
      bark(){
        console.log('旺旺')
      }
    }
    var dog = new Dog('牛牛',1)
    console.log(dog)
    dog.sayHi()
    dog.bark()
    //方式三 ：寄生
    //  步骤：1.创建中转构造函数F
    //        2.把父类的原型赋值给F的原型
    //        3.子类的原型等于F构造函数的实例对象
    //        4.使子构造函数原型的constructor指向子构造函数（修复构造函数指针）
    function Car(wheels){
      this.wheels = wheels
    }
    Car.prototype.howMuchWheels = function(){
      console.log('这个车一共有'+this.wheels)
    }
    function Tesla(wheels,power){
      Car.call(this,wheels)
      this.power =power
    }
    var F = function(){}
    F.prototype = Car.prototype
    Tesla.prototype = new F
    Tesla.constructor = Tesla
    var tesle = new Tesla(4,'电')
    console.log(tesle)
    tesle.howMuchWheels()
