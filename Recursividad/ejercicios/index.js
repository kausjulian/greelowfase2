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

///sin necesidad de usar recursividad encontre un codigo muy simple para chequear simetria:

function palindromeChecker(str) {
    const strReversed = str.split("").reverse().join("");
  
    return strReversed === str ? "es palindromo" : "no es palindromo";
  }
  console.log(palindromeChecker("oso")); // es palindromo
  console.log(palindromeChecker("hola")); // no es palindromo
  console.log(palindromeChecker("omo")); // es palindromo