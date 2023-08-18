import React from 'react';
import './main.css';
import Row from '../components/tableEntry.js';

class Main extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            stock : {}
        }
    }


    callAPI() {
        const apiUrl = 'http://localhost:4400/api/portfolio';
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
            //    document.getElementById('changed').value = response.data;
                console.log(response.data, "is retunred");
                this.setState({"stock": response.data});
            })
            .catch(err => {
            // Do something for an error here
            });
    };

    componentDidMount() {
        this.callAPI();
    //    document.getElementById('changed').value = (this.state.stock);
      //  console.log(this.state.stock);
    }

    render() {return (
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
                    <Row stock={this.state.stock} />

                </table>
                
                <div className="space">
                    <div className="center"><a href="new_user.html"><p>Click Here to Add a Position</p></a></div>
                </div>
            </fieldset>
        </form>
    )}
}




export default Main;