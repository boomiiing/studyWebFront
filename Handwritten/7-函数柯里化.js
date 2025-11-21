function curry(fn){
    return function curried(...args){
        if(args.length == fn.length){
            return fn.apply(this,args)
        }else{
            return function(...nextArgs){
                console.log(...args,...nextArgs)
                console.log(args,nextArgs)
               return curried(...args,...nextArgs)
            }
        }
    }
}

function text(a,b,c){
   return a*b*c
}

const curriesWrapper = curry(text)
console.log(curriesWrapper(2)(2)(3))
console.log(curriesWrapper(2,2)(3))
console.log(curriesWrapper(2)(2,3))

