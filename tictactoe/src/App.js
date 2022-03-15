import logo from './logo.svg';
import './App.css';
import Tablero from './components/Tablero/Tablero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GameProvider from './Store/appContext';
import Landpage from './components/Landpage';
import Players from './components/Players';

function App() {
  return (
    <div className='container-fluid App'>
    <GameProvider>
    
    <Router>
      <Routes>
          <Route path='/' element={<Landpage/>}/>
          <Route path='/tictactoe/players' element={<Players/>}/>
          <Route path='/tictactoe/tablero' element={<Tablero/>}/> 
          

      </Routes>

    </Router>
    
    
   
    </GameProvider>
    
    </div>
  );
}

export default App;
