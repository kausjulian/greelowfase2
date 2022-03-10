import logo from './logo.svg';
import './App.css';
import Tablero from './components/Tablero/Tablero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameProvider from './Store/appContext';
import Landpage from './components/Landpage';
import Players from './components/Players';

function App() {
  return (
    <div className='container-fluid'>
    <GameProvider>
    <Router>
      <Routes>
      {/* <Route path='/tictactoe/' element={<Landpage/>} />
      <Route path='tictactoe/tablero' element={<Tablero/>}/> */}

      

      </Routes>

    </Router>
    <Landpage/>
    <Players/>
    <Tablero/>
   
    </GameProvider>
    
    </div>
  );
}

export default App;
