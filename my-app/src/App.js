import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Index from './pages/index.js'
import Main from './pages/main.js'



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='main' element={<Main />} />

      </Routes>
    </Router>
  );
}


export default App;
