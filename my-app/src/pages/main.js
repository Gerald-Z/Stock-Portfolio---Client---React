import React from 'react';
import './main.css'


const Main = () => {
    


    const callAPI = () => {
        var apiUrl = 'http://localhost:4400/api/portfolio';
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                document.getElementById('changed').value = response.data;
                return;
            })
            .catch(err => {
            // Do something for an error here
            });
    };

    return (
        <form>
            <fieldset>
                <div className="center"><p>Here Are Your Current Positions:</p></div>
                <table className="stock-list">
                    <tr>
                        <th>Company Name</th>
                        <th>Ticker Symbol</th>
                        <th>Shares Owned</th>
                        <th>Share Price</th>
                        <th>Total Cost</th>
                        <th>Total Value</th>
                        <th>Estimated Dividend Payout</th>
                        <th>Estimated Dividend Yield</th>
                    </tr>
                    <tr>
                        <td>JP Morgan</td>
                        <td>JPM</td>
                        <td>100</td>
                        <td>100</td>
                        <td>10000</td>
                        <td>10000</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                    <tr>
                        <td>JP Morgan</td>
                        <td>JPM</td>
                        <td>100</td>
                        <td>100</td>
                        <td>10000</td>
                        <td>10000</td>
                        <td>100</td>
                        <td>100</td>
                    </tr>
                </table>
                
                <div className="space">
                    <div className="center"><a href="new_user.html"><p>Click Here to Add a Position</p></a></div>
                </div>

            <input id="changed" value="text" />
            </fieldset>
            <button onClick={callAPI}>Click here to call API</button>
        </form>
    )
}




export default Main;