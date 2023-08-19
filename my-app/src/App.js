import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';

import Index from './pages/index.js'
import Main from './pages/main.js'
import PositionChanges from './pages/newPosition.js'

const baseUrl = 'https://gerald-z.github.io/Stock-Portfolio---Client---React/';

       // <Route path={baseUrl} element={<Index />} />

function App() {
  return (
    <Router>
      <Routes>
        <Route path='https://gerald-z.github.io/Stock-Portfolio---Client---React/' element={<Index />} />

        <Route path={baseUrl+'main'} element={<Main />} />
        <Route path={baseUrl+'position_changes'} element={<PositionChanges />} />

      </Routes>
    </Router>
  );
}


export default App;
