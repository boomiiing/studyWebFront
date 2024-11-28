


var arr = [1, 5, [7], [3, [2, 4]]]

function flatten(arrs){
  return arrs.reduce((pre,cur)=>{
    if(Array.isArray(cur)&&cur.some(item=>Array.isArray(item))){
      return pre.concat(flatten(cur))
    }else{
      return pre.concat(cur) 
    }
  },[])
}

console.log(arr.flat(Infinity))


console.log(flatten(arr))