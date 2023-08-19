import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Index from './pages/index.js'
import Main from './pages/main.js'
import PositionChanges from './pages/newPosition.js'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Stock-Portfolio---Client---React/' element={<Index />} />
        <Route path='main' element={<Main />} />
        <Route path='position_changes' element={<PositionChanges />} />

      </Routes>
    </Router>
  );
}


export default App;
