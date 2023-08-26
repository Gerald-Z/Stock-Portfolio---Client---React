import React from 'react';
import './main.css';
import './newPosition.css';
import { Link } from 'react-router-dom';

const PositionChanges = (props) => {
    let ticker = "";
    let order = "Buy";
    let shares;
    let proceeds;
    let tickerRef = React.useRef();
    let orderRef = React.useRef();
    let sharesRef = React.useRef();
    let proceedsRef = React.useRef();
    let outcomeRef = React.useRef();

    

    const handleTicker = async (e) => {
        console.log("Ticker:", ticker);
        console.log("Order:", orderRef.current.value);
        console.log("Share:", shares);
        console.log("Proceeds:", proceeds);

        e.preventDefault();
        tickerRef.current.value = "";
        sharesRef.current.value = "";
        proceedsRef.current.value = "";

        const apiUrl = 'http://localhost:4400/api/changePosition';
        let results = await fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "username": props.username,
                "password": props.password,
                "orderType": orderRef.current.value,
                "ticker": ticker,
                "shares": parseInt(shares),
                "price": parseInt(proceeds) / parseInt(shares) 
            })
        });
        results = await results.json();
        if (results) {
            outcomeRef.current.innerHTML = "Success!";
        } else {
            outcomeRef.current.innerHTML = "Failure!";
        }
        ticker = "";
        order = "";
        shares = 0;
        proceeds = 0;
    }

    return (
        <form>
            <fieldset>
                <label>Please enter the ticker symbol of the position you wish to change:
                <input list="tickers" type="text" onChange={e => ticker=e.target.value} ref={tickerRef}/> </label>
                <datalist id="tickers">
                    <option value="JPM" />
                    <option value="GS" />
                    <option value="BLK" />
                    <option value="BX" />
                    <option value="VZ" />
                    <option value="AAPL" />
                </datalist>
                <br />

                <label>Please select your order type:
                    <select type="text" ref={orderRef}> 
                        <option value="Buy">Buy</option>
                        <option value="Sell">Sell</option>
                    </select>
                </label>
                <br />

                <label>Please enter the number of shares you bought or sold:
                    <input type="text" onChange={e => shares=e.target.value} ref={sharesRef}/>
                </label>
                <br />

                <label>Please enter total proceeds you received or spent during the transaction: 
                    <input type="number" onChange={e => proceeds=e.target.value} ref={proceedsRef}/>
                </label>
                <br />
                <br />
                <button type="submit" id="submitTicker" onClick={handleTicker} required>Submit Ticker</button>
                <button type="button" id="returnButton"><Link  to='/Stock-Portfolio---Client---React'>Return to Portfolio</Link></button>
                <h1 ref={outcomeRef}></h1>
            </fieldset>
        </form>
    )
}




export default PositionChanges;