import React from 'react';
import './main.css';
import './newPosition.css';



const PositionChanges = () => {
    return (
        <form>
            <fieldset>
                <label>Please enter the ticker symbol of the position you wish to change:   
                <input list="tickers" type="text" /> </label>
                <datalist id="tickers">
                    <option value="JPM" />
                    <option value="GS" />
                    <option value="BLK" />
                    <option value="BX" />
                    <option value="VZ" />
                    <option value="AAPL" />
                </datalist>

                <button type="submit" id="submitTicker" required>Submit Ticker</button>
            </fieldset>

            <fieldset className="notTop">
                <input type="text"></input>
            </fieldset>
        </form>
    )
}




export default PositionChanges;