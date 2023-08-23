import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import {React, useState} from 'react';

import Index from './pages/index.js'
import Main from './pages/main.js'
import PositionChanges from './pages/newPosition.js'


function App() {
  const [authenticated, useAuthenticated] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


//       <Router basename={process.env.PUBLIC_URL}>

    if (!authenticated) {
      {console.log("Not authenticated")};
      return (<Router><Index Auth={useAuthenticated} setUser={setUsername} setPass={setPassword}/></Router>);
    } else {
      return (
        <Router>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/main' element={<Main username={username} password={password}/>} />
            <Route path='/position_changes' element={<PositionChanges />} />
          </Routes>
        </Router>

      );
    }
  }



export default App;
