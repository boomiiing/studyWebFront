Object.prototype.newCreate = function(proto,obj){
    function NewObj(){
    }
    NewObj.prototype = proto
    let newObj = new NewObj()
    newObj.__proto__ = proto
    if(typeof(obj)=='object'){
        Object.keys(obj).forEach(ele=>{
            Object.defineProperty(newObj,ele,obj[ele])
        })
    }
    return newObj
}

const obj = Object.newCreate(
    { greet: () => console.log('Hello!') },
    {
      name: {
        value: 'Alice',
        writable: true,
        enumerable: true,
        configurable: true
      },
      age: {
        value: 25,
        writable: false
      }
    }
  );
  
  console.log(obj.name); // 输出: Alice
  console.log(obj.age); // 输出: 25
  obj.greet(); // 输出: Hello!

function Parent() {
    this.type = 'Parent';
  }
  Parent.prototype.sayType = function () {
    console.log(this.type);
  };
  
  function Child() {
    this.type = 'Child';
  }
  
  // 使用 Object.create 继承 Parent 的 prototype
  Child.prototype = Object.newCreate(Parent.prototype);
  
  const childInstance = new Child();
  childInstance.sayType(); // 输出: Child