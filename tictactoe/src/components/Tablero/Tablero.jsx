import { Alert } from 'bootstrap'
import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GameContext } from '../../Store/appContext'
import './Tablero.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Tablero = () => {
    const {turn,setTurn,player1,player2} = useContext(GameContext)
    const [cells,setCells] = useState(Array(9).fill(''));
    const [winner, setWinner] = useState('')
    const [ganador, setGanador] = useState(null)
    const positions = [0,1,2,3,4,5,6,7,8,]

    const defineWinner = (squares) =>{
        let win = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        win.map((w)=>{
            if (
                squares[w[0]] === "" ||
                squares[w[1]] === "" ||
                squares[w[2]] === ""
              ) {
                //no winner
              } else if (
                squares[w[0]] === squares[w[1]] &&
                squares[w[1]] === squares[w[2]]
              ) {
                
                setWinner(squares[w[0]]);
                
              }
              
        })
    }

    
    //funcion para detectar el click en cada casillero
     const handleCLick = (pos) => {
      let squares = [...cells];  
      //prevengo que se modifique un casillero que ya esta lleno
        if (cells[pos]=='X' || cells[pos]=='O' ){
            toast.error("Casillero lleno")
            return 
        }
        //guardo en squares una copia de cells que tiene 9 posiciones vacias
        if(turn === 'X') {
            //seteo a squares en la posición [pos] que recibo por props segun el turno.
            squares[pos] = 'X';
            //cambio de turno
            setTurn('O')
        }
        else{
            //seteo a squares en la posicion [pos] que recibo por props segun el turno.
            squares[pos] = 'O';
            //cambio de turno
            setTurn('X')
        }
        //pasando al setCells el valor squares, estoy seteando que el estado Cells se llene en todas sus posiciones    
        setCells(squares)
        // console.log(squares)
        defineWinner(squares)
     }
       console.log(cells)

     //funcion para resetear con los mismos jugadores
     const reset = ()=>{
       setCells(Array(9).fill(''))
       setWinner('')
       setGanador('')
       if (turn =='X'){
         setTurn('O')
       }
       else setTurn('X')
     }


    //creo un componente cuadrado para mapear
    const Square = ({pos}) => {
        return (
          <div className="a1 col-4 text-light d-flex justify-content-center align-items-center" onClick={()=>handleCLick(pos)}>
            {cells[pos]}
              
          </div>
        )
      }

     //funcion para setear el nombre del ganador
    useEffect(() => {
        if(winner =='X'){
            setGanador(`${player1}`)
            toast.success(`${ganador} wins!`, {
              icon: "🚀",
              theme: "dark"
            });
        }
        else if (winner =='O'){
            setGanador(`${player2}`)
            toast.success(`${ganador} wins!`, {
              icon: "🚀",
              theme: "dark"
            });
        }
    }, [winner]);
    
  return ( 
        
   <div className="row tablero justify-content-center align-items-center">
        <h2 className={ winner == ''? 'text-light text-center': 'd-none'}>Turn: {turn}</h2>
          <h2 className={ winner !== ''? 'text-light text-center': 'd-none'}>The winner is {ganador}!</h2>
            <div className='botones m-1 pb-2 pt-2 d-flex'>
            <ToastContainer autoClose={2500} />
            <Link to= '/' className='text-center '><button className='btn btn-light'>Home</button></Link>
            <Link to= '/tictactoe/players' className='text-center'><button className='btn btn-info ms-2 me-2'>Change Players</button></Link>
            
            {/* <div className='col -1 justify-content-end'> */}
            <button className='btn btn-warning  botonreset' onClick={()=>reset()}>Restart</button>
            {/* </div> */}
            </div>
     <div className='d-flex row conttablero'>
     {positions.map((position)=>(
         <Square key={position} pos={position}/>
      
    ))

     }
      </div>
    </div>
    

        );
}
 
export default Tablero;

