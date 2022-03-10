import { useContext } from 'react';
import { GameContext } from '../../Store/appContext';
import './Players.css'

const Players = () => {
   const{player1,setPlayer1,player2,setPlayer2,sendform,setTurn} = useContext(GameContext)
   
    return ( 
        <div className="row d-flex justify-items-center text-center players pt-5 pb-5">
            <h4 className='col-12 text-light'>Choose your weapon</h4>
                
            <form onSubmit={sendform} className="form-floating ">
                <div className="form-floating row justify-content-evenly ">
                 {/* player1 box*/}
                     <div className='col-6'>
                     {/* <form onSubmit={sendform} className="form-floating">
                         <div className="form-floating "> */}
                                <input type="text" className="form-control form-control-lg" value={player1} onChange={(e)=>setPlayer1(e.target.value)} placeholder='Player 1' aria-label=".form-control-lg example"/>
                                    <button type="submit" onClick={()=>setTurn('X')} className="btn btn-light">X</button>
                        {/* </div>
                    </form> */}
                    </div>
                    {/* player2 box */}
                        <div className='col-6'>
                            <input class="form-control form-control-lg" value={player2} onChange={(e)=>setPlayer2(e.target.value)} type="text" placeholder='Player 2' aria-label=".form-control-lg example"/>
                            <button type="submit" onClick={()=>setTurn('O')} class="btn btn-light">0</button>

                    </div>

                </div>
            </form>
        
        </div>

     );
}
 
export default Players;

