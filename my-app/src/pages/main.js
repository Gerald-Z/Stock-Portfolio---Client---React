import React from 'react';
import './main.css';
import Row from '../components/tableEntry.js';
import Table from '../components/table.js';
import { Link } from 'react-router-dom';


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

    retreivePortfolio(userName) {
        const apiUrl = 'http://localhost:4400/api/'+userName+'/portfolio';

        fetch(apiUrl, {
            method: "GET",
            mode: "cors"
        })
            .then(response => response.json())
            .then(response => {
                for (var i = 0; i < response.data[0].portfolio.length; i++) {
                    console.log(response.data[0].portfolio[i], "is returned");
                    this.setPort(response.data[0].portfolio[i]);
                }
            })    
    };

    componentDidMount() {
        this.retreivePortfolio("Investor");
        console.log("ComponentDidMount is called");
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
                   <div className="center"><button><Link to="/position_changes">Bought or Sold Positions? Click Here!</Link></button></div>
                </div>
            </fieldset>
        </form>
    )}
}




//module.exports = Main;

export default Main;

//module.exports = {Main};
//module.exports.Main = Main;