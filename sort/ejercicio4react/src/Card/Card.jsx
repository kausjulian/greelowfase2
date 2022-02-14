import { useContext } from 'react';
import { CardsContext } from '../Store/appContext';
import './Card.css'

const Card = () => {
    const {palrandom,numrandom,numero,palo} = useContext(CardsContext)
    return ( 
   ///falta setear el cambio de color segun el palo
    <div className="card shadow carta" >
     
      <div className='negras1'>
         {palo}
      </div>
        <div className='numero d-flex justify-content-center'>
             {numero}
        </div>
         <div className='negras2  d-flex justify-content-end'>
             {palo}
          </div>
    
    </div>
    
     
        );
}
 
export default Card;
/* ♣♠♥♦ */