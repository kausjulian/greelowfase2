import { createContext, useState } from "react";

export const GameContext = createContext(null);

const GameProvider = ({children}) => {
    const[player1, setPlayer1] = useState("")
    const[player2, setPlayer2] = useState("")
    const[turn, setTurn] = useState(true)
   

    // setplayers
    const sendform =(e) =>{
        e.preventDefault();
        console.log(player1)
        console.log(player2)
        if (player1=== '' || player2 ==='') return  alert("Debe ingresar el nombre de los jugadores")
        console.log(turn)
        
        
    }

   




   
    return ( 
        <GameContext.Provider value={{player1, setPlayer1, player2,setPlayer2,sendform,turn,setTurn}} >
            {children}
        </GameContext.Provider>
     );
}
 
export default GameProvider;