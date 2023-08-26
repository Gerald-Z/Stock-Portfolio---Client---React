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
        this.deleteProfile = this.deleteProfile.bind(this)
    }

    setPort(newPortfolio) {
        this.setState((prevState) => ({
            "userPortfolio": [...prevState.userPortfolio, newPortfolio]
        }))
    }

    deleteProfile(e) {
        e.preventDefault();
        const apiUrl = 'http://localhost:4400/api/delete';
        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.props.username,
            })
        }).then(this.props.setAuth(false));
    }

    retreivePortfolio() {
        const apiUrl = 'http://localhost:4400/api/portfolio';

        fetch(apiUrl, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: this.props.username,
                password: this.props.password
            })
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
        this.retreivePortfolio();
    }

    render() {
        return (
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
                    <div className="center"><button onClick={this.deleteProfile}>Click here to permanently delete the profile.</button></div>
                </fieldset>
            </form>
        )
    }
}




//module.exports = Main;

export default Main;

//module.exports = {Main};
//module.exports.Main = Main;