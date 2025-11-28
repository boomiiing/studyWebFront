function myNew(constructor, ...args) {
    // 1. 创建一个空对象
    const obj = Object.create(constructor.prototype);

    // 2. 将构造函数的 this 绑定到新对象上，并执行构造函数
    const result = constructor.apply(obj, args);

    // 3. 如果构造函数返回的是一个对象，则返回该对象；否则返回新创建的对象
    return result instanceof Object ? result : obj;
}