import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

import Index from './pages/index.js'
import Main from './pages/main.js'
import PositionChanges from './pages/newPosition.js'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Index />} />

        <Route path='/main' element={<Main />} />
        <Route path='/position_changes' element={<PositionChanges />} />

      </Routes>
    </Router>


  );
}


export default App;
