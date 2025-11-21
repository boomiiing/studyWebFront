function objectToTree(obj) {
  const result = [];
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const item = {
        name: key,
        value: obj[key]
      };
      
      // 处理数组
      if (Array.isArray(obj[key])) {
        item.children = obj[key].map((value, index) => ({
          name: `item_${index}`,
          value: value,
          children: typeof value === 'object' && value !== null ? objectToTree(value) : []
        }));
      }
      // 处理对象
      else if (typeof obj[key] === 'object' && obj[key] !== null) {
        item.children = objectToTree(obj[key]);
      }
      
      result.push(item);
    }
  }
  
  return result;
}
const data = {
  user: {
    name: '张三',
    age: 25,
    address: {
      city: '北京',
      district: '朝阳区'
    }
  },
  hobbies: ['读书', '游泳']
};

const tree = objectToTree(data);
console.log(tree)