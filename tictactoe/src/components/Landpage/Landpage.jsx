import { Link } from 'react-router-dom';
import Tablero from '../Tablero/Tablero';
import './Landpage.css'

const Landpage = () => {
    return ( 
        <div className='row d-flex justify-items-center align-items-center text-center landpage'>
        <h1 className='col-12 text-light mt-4 titulo animate__animated animate__flipInY'>Tic Tac Toe</h1>
            {/* <h2 className='col-12 text-secondary'>In React.js</h2> */}
                <Link to='/tictactoe/players' className='start'><h4 className='start animate__animated animate__flipInX'>Start game!</h4></Link>
        

        </div>
        
        
    
        

     );
}
 
export default Landpage;