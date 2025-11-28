function hasCircularReference(obj, seen = new Set()) {
    // 如果不是对象或为 null，直接返回 false
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }

    // 如果当前对象已经在 seen 中，说明存在循环引用
    if (seen.has(obj)) {
        return true;
    }

    // 将当前对象加入 seen 集合
    seen.add(obj);

    // 遍历对象的所有属性
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            // 递归检查每个属性值
            if (hasCircularReference(obj[key], seen)) {
                return true;
            }
        }
    }

    // 遍历完成后，移除当前对象（避免误判）
    seen.delete(obj);

    return false;
}

// 测试 1：无循环引用的对象
const obj1 = { a: 1, b: { c: 2 } };
console.log(hasCircularReference(obj1)); // 输出: false

// 测试 2：有循环引用的对象
const obj2 = { a: 1 };
obj2.b = obj2; // 循环引用自身
console.log(hasCircularReference(obj2)); // 输出: true

// 测试 3：复杂循环引用
const obj3 = { a: {} };
obj3.a.b = obj3; // 循环引用
console.log(hasCircularReference(obj3)); // 输出: true

// 测试 4：非对象类型
console.log(hasCircularReference(123)); // 输出: false
console.log(hasCircularReference(null)); // 输出: false
console.log(hasCircularReference("string")); // 输出: false