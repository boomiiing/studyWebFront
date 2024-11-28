var arr = [ 1, 5, 7, 3, 2, 4 ]


function bubbleSort(arr){
  let length = arr.length
  for(let i = length - 1; i>=0; i--){
    for(let j = 0;j<=i;j++){
      if(arr[j]>arr[j+1]){
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
}
bubbleSort(arr)
console.log(arr)

console.log(arr.sort((a,b)=>a-b))