import { useContext } from 'react';
import Card from '../Card/Card';
import { CardsContext } from '../Store/appContext';
import './Tablero.css'

const Tablero = () => {
   const {palrandom, numrandom,userinput,setUserInput,sendform,repartir} = useContext(CardsContext)
    
    return (    
       <div className='tablero'>
        
        
            <h1 className='text-center mt-3'>Poker Game</h1>
                <div className="d-flex">
                    <form onSubmit={sendform} className="form-floating mt-3 input">
                        <div className="form-floating mb-3">
                            <input type="number" value={userinput} onChange={(e)=>setUserInput(e.target.value)} className="form-control " id="floatingInput" placeholder=""/>
                            <label for="floatingInput" className='form-label'>Repartir cartas</label>
                            <button type="submit" className="btn btn-light boton" >Repartir</button>
                        </div>
                    </form>
               
                </div> 
        
                {/* onClick={()=>repartir()} */}



        
       
       
       
       
       </div>
      );
}
 
export default Tablero;