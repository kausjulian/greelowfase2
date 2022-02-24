import { isDisabled } from '@testing-library/user-event/dist/utils';
import { useContext, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { CardsContext } from '../Store/appContext';
import './Tablero.css'
import toast, { Toaster } from 'react-hot-toast';

const Tablero = () => {
   const {userinput,setUserInput,sendform,cartas,setCartas,ordenar} = useContext(CardsContext)
    
   //borrar cartas
const borrar = ()=>{
    setCartas([])
    toast.success(`Cartas borradas con éxito!`,{
        position: 'top-right',
        icon: '👏',
    })
}









   
   return (    
       <div className='tablero'>
        
        <Toaster/>
            <h1 className='text-center mt-3'>Poker Game</h1>
                <div className="d-flex row border align-items-center">
                    <form onSubmit={sendform} className="col-3 form-floating mt-3 input border">
                        <div className="form-floating ms-3 mb-3 formu">
                            
                            <input type="number" value={userinput} onChange={(e)=>setUserInput(e.target.value)} className="form-control" id="floatingInput" placeholder=""/>
                            <label for="floatingInput" className='form-label'>Repartir cartas</label>
                            <button type="submit" className="btn btn-warning boton" disabled={cartas.length==0 ? false :true} >Repartir</button>
                            <button type="button" onClick={()=>borrar()} className="btn btn-danger ms-2 boton" disabled={cartas.length==0 ? true :false}  >Borrar</button>
                            <button type="button" onClick={()=>ordenar(cartas)} className="btn btn-primary ms-2 boton" disabled={cartas.length==0 ? true :false} >Sort</button>
                        </div>
                    </form>
                    <div className={userinput>52 ? 'alert col-9': 'd-none'}>
                    El Máximo de cartas es 52
                    </div>
                </div> 
                <div className='d-flex justify-content-evenly divcartas'>
                    {cartas.map((carta)=>(
                        <Card key = {carta.num} {...carta}>

                        </Card>
                    ))}
                </div>
        
              



        
       
       
       
       
       </div>
      );
}
 
export default Tablero;