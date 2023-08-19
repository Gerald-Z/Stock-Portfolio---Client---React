import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';


const Index = () => {
    return (
        <form>
            <fieldset>
                <div className="center"><p>Log in to Stock Portfolio Tracker</p></div>
                <div className="center"><label id="username-label">Username: <input type="text" className="textInput" required /> </label></div>
                <div className="center"><label id="password-label">Password: <input type="password" className="textInput" required /> </label></div>
                <div className="center"><input type="submit" className="textInput" id="submit" value="Log In" />  </div>
                <div className="space">
                   <div className="center"><Link to="/new_user">New user? Click here to create an account!</Link></div>
                   <div className="center"><Link to="/main">Click here to get to a template portfolio</Link></div>
                </div>
            </fieldset>
        </form>
    )
}




export default Index;