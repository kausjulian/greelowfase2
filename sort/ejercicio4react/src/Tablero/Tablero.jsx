import { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { CardsContext } from '../Store/appContext';
import './Tablero.css'

const Tablero = () => {
   const {userinput,setUserInput,sendform,cartas,setCartas,ordenar} = useContext(CardsContext)
    
   //borrar cartas
const borrar = ()=>{
    setCartas([])
}









   
   return (    
       <div className='tablero'>
        
        
            <h1 className='text-center mt-3'>Poker Game</h1>
                <div className="d-flex">
                    <form onSubmit={sendform} className="form-floating mt-3 input">
                        <div className="form-floating ms-3 mb-3 formu">
                            
                            <input type="number" value={userinput} onChange={(e)=>setUserInput(e.target.value)} className="form-control" id="floatingInput" placeholder=""/>
                            <label for="floatingInput" className='form-label'>Repartir cartas</label>
                            <button type="submit" className="btn btn-warning boton" >Repartir</button>
                            <button type="button" onClick={()=>borrar()} className="btn btn-danger ms-2 boton" >Borrar</button>
                            <button type="button" onClick={()=>ordenar(cartas)} className="btn btn-primary ms-2 boton" >Sort</button>
                        </div>
                    </form>
                </div> 
                <div className='d-flex justify-content-between divcartas'>
                    {cartas.map((carta)=>(
                        <Card key = {carta.num} {...carta}>

                        </Card>
                    ))}
                </div>
        
              



        
       
       
       
       
       </div>
      );
}
 
export default Tablero;