import React from 'react';
import './index.css'

const Index = () => {
    return (
        <form>
            <fieldset>
                <div className="center"><p>Log in to Stock Portfolio Tracker</p></div>
                <div className="center"><label id="username-label">Username: <input type="text" className="textInput" required /> </label></div>
                <div className="center"><label id="password-label">Password: <input type="password" className="textInput" required /> </label></div>
                <div className="center"><input type="submit" className="textInput" id="submit" value="Log In" />  </div>
                <div className="space">
                    <div className="center"><a href="new_user"><p>New user? Click here to create an account!</p></a></div>
                    <div className="center"><a href="main"><p>Click here to get to a template portfolio</p></a></div>
                </div>
            </fieldset>
        </form>
    )
}




export default Index;