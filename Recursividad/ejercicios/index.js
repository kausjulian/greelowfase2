//ejercicio1
const backCount = (n)=>{
if (n==0) return
//tambien se puede poner  if (n<0) return
console.log(n)
return backCount(n-1)
}
console.log(backCount(5))

//ejercicio2
let string ="“DABALEARROZALAZORRAELABAD”"

const simetric = (string)=>{
     // let reversed = [...string].reverse()
    if (string.length<=1) return true
    if (string[0]=!string[string.length-1]){
        return false 
    }
    return simetric(string.slice(1,-1))
  
}

console.log(simetric('motor'))
console.log(simetric('rotor'))
console.log(simetric('menem'))