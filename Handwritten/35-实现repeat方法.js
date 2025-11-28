String.prototype.myRepeat = function(times){
    let num = times*1
    if(typeof(num) == 'number' && num>0){
        let info =""
        for(let i =0 ; i<num;i++){
            info = this+info
        }
        return info
    }else{
        return ''
    }
   console.log(this,times);
}
let b = '123'
console.log(b.myRepeat(""));
