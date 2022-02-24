import './App.css';
import Card from './Card/Card';
import CardsProvider from './Store/appContext';
import Tablero from './Tablero';


function App() {
  return (
    <div className=''>
    <CardsProvider>
    <Tablero/>
    {/* <Card/> */}
    </CardsProvider>
    </div>
    
  );
}

export default App;
