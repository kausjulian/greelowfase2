import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GameContext } from '../../Store/appContext';
import './Players.css'

const Players = () => {
   const{player1,setPlayer1,player2,setPlayer2,sendform,setTurn} = useContext(GameContext)
   
    return ( 
        <div className="row d-flex justify-items-center align-items-center text-center players">
            <h2 className='col-12 text-light titulo'>Choose your weapon</h2>
                
            <form onSubmit={sendform} className="form-floating ">
                <div className="form-floating row justify-content-center ">
                 {/* player1 box*/}
                     <div className='col-6 d-flex row justify-content-center'>
               
                                <input type="text" className="form-control form-control-lg w-75 " value={player1} onChange={(e)=>setPlayer1(e.target.value)} placeholder='Player 1' aria-label=".form-control-lg example"/>
                                <Link to='/tictactoe/tablero'><button type="submit" onClick={()=>setTurn('X')} className="btn btn-light">X</button></Link>
                        {/* </div>
                    </form> */}
                    </div>
                    {/* player2 box */}
                        <div className='col-6 d-flex row justify-content-center'>
                            <input className="form-control form-control-lg w-75" value={player2} onChange={(e)=>setPlayer2(e.target.value)} type="text" placeholder='Player 2' aria-label=".form-control-lg example"/>
                            <Link to='/tictactoe/tablero'><button type="submit" onClick={()=>setTurn('O')} className="btn btn-light ">0</button></Link>

                    </div>

                </div>
            </form>
        
        </div>

     );
}
 
export default Players;

