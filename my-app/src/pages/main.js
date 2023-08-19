import React from 'react';
import './main.css';
import Row from '../components/tableEntry.js';
import Table from '../components/table.js';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userPortfolio : []
        }
    }

    setPort(newPortfolio) {
        this.setState((prevState) => ({
            "userPortfolio": [...prevState.userPortfolio, newPortfolio]
        }))
    }

    callAPI() {
        const apiUrl = 'http://localhost:4400/api/portfolio';

        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
                for (var i = 0; i < response.data.length; i++) {
                    console.log(response.data, "is returned");
                    this.setPort(response.data[i].portfolio);
                }
            })    
    };

    componentDidMount() {
        this.callAPI();
    }

    render() {return (
        <form>
            <fieldset>
                <div className="center"><h1>Here Are Your Current Positions:</h1></div>
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
                    <Table port={this.state.userPortfolio} />
                </table>
                
                <div className="space">
                    <div className="center"><button><a href="position_changes">Bought or Sold Positions? Click Here!</a></button></div>
                </div>
            </fieldset>
        </form>
    )}
}




export default Main;