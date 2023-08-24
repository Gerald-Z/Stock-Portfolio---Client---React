import React from 'react';
import './index.css'
import { Link } from 'react-router-dom';


const Index = (props) => {
    let enteredUsername = "";
    let enteredPassword = "";

    const handleUsername = (e) => {
        enteredUsername = e.target.value;
    }
    const handlePassword = (e) => {
        enteredPassword = e.target.value;
    }

    const getAuthenticated = async (e) => {
        e.preventDefault();

        const apiUrl = 'http://localhost:4400/api/login';
        const result = await fetch(apiUrl, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: enteredUsername,
                    password: enteredPassword
                })
        });

        props.setAuth(result);
        props.setUser(enteredUsername);
        props.setPass(enteredPassword);
    }

    const toNewUser = (e) => {
        console.log("toNewUser is called");
        e.preventDefault();
        props.setNew(true);
    }

    return (
        <form onSubmit={getAuthenticated}>
            <fieldset>
                <div className="center"><p>Log in to Stock Portfolio Tracker</p></div>
                <div className="center"><label id="username-label">Username: <input type="text" className="textInput" onChange={handleUsername} required /> </label></div>
                <div className="center"><label id="password-label">Password: <input type="password" className="textInput" onChange={handlePassword} required /> </label></div>
                <div className="center"><input type="submit" className="textInput" id="submit" value="Log In"/>  </div>
                <div className="space">
                   <div className="center"><Link onClick={toNewUser} to="/new_user">New user? Click here to create an account!</Link></div>
                   <div className="center"><Link to="/main">Click here to get to a template portfolio</Link></div>
                </div>
            </fieldset>
        </form>
    )
}




export default Index;