import { createContext, useEffect, useState } from "react";

export const CardsContext = createContext(null)

const CardsProvider = ({children}) => {
   //lista base de palos-numeros
    const palos = ['♣','♠','♥','♦']
   const numeros = [1,2,3,4,5,6,7,8,9,10,'J','Q','K']
   //valor ingresado por el usuyario
   const [userinput,setUserInput] = useState(0)
   //numeros aleatorios generados en la funcion repartir
   const [palrandom, setPalRandom] = useState(0)
   const [numrandom, setNumRandom] = useState(0)
   //estados de palo-numero que se le asignan a la cartas
   const [palo,setPalo] = useState('')
   const[numero,setNumero] = useState(0)

  
//tomamos el valor ingresado en el input

const sendform = (e) =>{
    e.preventDefault();
    console.log(userinput);
    for (let i = 0; i < userinput; i++) {
        //eligo un valor aleatorio del array
        setNumRandom(Math.floor(Math.random() * numeros.length))
        setPalRandom(Math.floor(Math.random() * palos.length))
        setPalo(palos[palrandom])
        setNumero(numeros[numrandom])
        console.log(userinput)
        
    }

}
// console.log(userinput);
////
// const repartir = ()=>{
//         // genero un bucle con el largo ingresado por el usuario, y por cada vuelta eligo un numero aleatorio del array
// for (let i = 0; i < userinput; i++) {
//     //eligo un valor aleatorio del array
//     setNumRandom(Math.floor(Math.random() * numeros.length))
//     setPalRandom(Math.floor(Math.random() * palos.length))
//     setPalo(palos[palrandom])
//     setNumero(numeros[numrandom])
//     console.log(palo)
    
// }

// }
///

//genero una carta en base al valor ingresado por el usuario
console.log(palo)
console.log(numero)



  
 


    
    return ( 
        <CardsContext.Provider value={{palrandom,numrandom,userinput,setUserInput,sendform,palo,setPalo,numero,setNumero}}>
            {children}
        </CardsContext.Provider>

     );
}
 
export default CardsProvider;


// Retorna un número aleatorio de mi array
//  Math.round(Math.random() * myarray.length;





// genero un bucle con el largo ingresado por el usuario, y por cada vuelta eligo un numero aleatorio del array
// for (let i = 0; i < userinput; i++) {
//     //eligo un valor aleatorio del array
//     // let n = Math.round(Math.random() * palos.length)
//     // let p = Math.round(Math.random() * numeros.length)
    
//     // setNumRandom(p)
//     // setPalRandom(n)
//     // setNumRandom(Math.round(Math.random() * palos.length))
//     // setPalRandom(Math.round(Math.random() * numeros.length))
//     carta = {
//         numero: numeros[numrandom],
//         palo: palos [palrandom]
//     }
// }