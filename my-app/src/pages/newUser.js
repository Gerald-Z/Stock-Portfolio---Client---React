import React from 'react';
import './newUser.css';


export default function NewUser (props) {
    let username;
    let passwordOne;
    let passwordTwo;
    let warningRef = React.useRef();
    let userRef = React.useRef();
    let passwordRefOne = React.useRef();
    let passwordRefTwo = React.useRef();



    const handleUsername = (e) => {
        username = e.target.value;
    }
    const handlePasswordOne = (e) => {
        passwordOne = e.target.value;
    }
    const handlePasswordTwo = (e) => {
        passwordTwo = e.target.value;
    }

    const callAPI = async (username, password) => {
        const apiUrl = 'http://localhost:4400/api/newUser';
        console.log("User: ", username)
        console.log("Password: ", passwordOne);
        console.log("Password: ", passwordTwo);
        let results = await fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "portfolio": []
            })
        });
        console.log("Result:", results);
        results = await results.json();
        return results;
    }


    const handleSubmission = async (e) => {
        e.preventDefault();

        if (passwordOne !== passwordTwo) {
            warningRef.current.innerHTML = "Warning: The passwords don't match!"
        } else {
            const results = await callAPI(username, passwordOne);
            if (results) {
                warningRef.current.innerHTML = "The new account was created successfully!"
                props.setNew(true);
            } else {
                warningRef.current.innerHTML = "An account with that username already exists! Choose a different username!"
                userRef.current.value = "";
                passwordRefOne.current.value = "";
                passwordRefTwo.current.value = "";
            }
        }
    }


    return(
        <>
            <h1 id="newAccountHeader">Create a new account:</h1>
            <form onSubmit={handleSubmission}>
                <fieldset>
                    <label>Please enter your username: 
                        <input type="text" ref={userRef} onChange={handleUsername} required/>
                    </label>
                    <br />
                    <label>Please enter your password: 
                        <input type="password" ref={passwordRefOne} onChange={handlePasswordOne} required/>
                    </label>
                    <br />
                    <label>Please repeat your password: 
                        <input type="password" ref={passwordRefTwo} onChange={handlePasswordTwo} required/>
                    </label>
                    <br />

                    <button type="submit" id="submitTicker">Submit Ticker</button>
                </fieldset>
            </form>

            <h1 ref={warningRef} />
        </>
    );
}