String.prototype.mySwitch=function(){
    let flip = ''
    for(let i = this.length - 1 ; i > -1 ;i--){
        flip = flip+this[i]
    }
    return flip
}

let a = 'hello world!'
console.log(a.mySwitch());