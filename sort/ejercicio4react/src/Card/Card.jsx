import { useContext } from 'react';
import { CardsContext } from '../Store/appContext';
import './Card.css'

const Card = ({num,pal}) => {
    const {numero,palo} = useContext(CardsContext)
    
    return ( 
    <div className="card shadow mt-2 carta" >
     
      <div className={pal === '♣' || pal === '♠' ? 'negras' : 'rojas'}>
         {pal}
      </div>
        <div className='numero d-flex justify-content-center'>
             {num==1 ? 'A' : num===11 ? 'J' : num==12 ? 'Q' : num==13 ? 'Q' :num==14 ? 'K': num}
        </div>
         <div className={pal === '♣' || pal === '♠' ? 'negras d-flex justify-content-end' : 'rojas d-flex justify-content-end'}>
             {pal}
          </div>
    
    </div>
    
     
        );
}
 
export default Card;
/* ♣♠♥♦ */

// {pal ===♣ || pal ===♠ ? 'negras1' : 'rojas1'}