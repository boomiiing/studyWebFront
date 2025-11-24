let count = 0
function newSetInterval(){
    setTimeout(()=>{
        console.log(count++);
        newSetInterval()
    },1000)
}
newSetInterval()