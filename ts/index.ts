type People = {
  name:string,
  age:number,
  school:string
}

var mingStudent:People = {
  name:'aaa',
  age:12,
  school:'交大'
}
console.log(mingStudent)

interface Demo{
  length: number;
 }
 // 泛型T必须是MyInter的⼦类，即：必须拥有length属性
 function test<T extends Demo>(arg: T): number{
  return arg.length;
 }
 test(10) // 类型“number”的参数不能赋给类型“Demo”的参数
 test({name:'张三'}) // 类型“{ name: string; }”的参数不能赋给类型“Demo”的参数
 test('123')
 test({name:'张三',length:10})
