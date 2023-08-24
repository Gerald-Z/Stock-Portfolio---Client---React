import './App.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import {React, useState} from 'react';

import Index from './pages/index.js'
import Main from './pages/main.js'
import PositionChanges from './pages/newPosition.js'
import NewUser from './pages/newUser.js'


function App() {
  const [authenticated, useAuthenticated] = useState(false);
  const [newUser, useNewUser] = useState(false);
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();


//       <Router basename={process.env.PUBLIC_URL}>

//             <Route path="/new_user" element={<NewUser />} />
//               <Route path="/new_user" element={<NewUser />} />

    if (!authenticated) {
   //   {console.log("Not authenticated")};
      {console.log("Authenticated: ", authenticated)}
      {console.log("New User: ", newUser)}
      if (!newUser) {
        return (
          <Router>
            <Index setAuth={useAuthenticated} setUser={setUsername} setNew={useNewUser} setPass={setPassword} />
          </Router>);
      } else {
     //   {console.log("Linked to new user")};
        return(
          <Router>
              <NewUser setNew={useNewUser}/>
          </Router>
        );
      }
    } else {
      return (
        <Router>
          <Routes>
            <Route path='/' element={<Main username={username} password={password}/>} />
            <Route path='/position_changes' element={<PositionChanges />} />
          </Routes>
        </Router>
      );
    }
  }



export default App;
