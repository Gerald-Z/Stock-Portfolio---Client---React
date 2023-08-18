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


    callAPI() {
        const apiUrl = 'http://localhost:4400/api/portfolio';
    
        fetch(apiUrl)
            .then(response => response.json())
            .then(response => {
            //    document.getElementById('changed').value = response.data;
                console.log(response.data, "is returned");
                for (var i = 0; i < response.data.length; i++) {
                    this.setState({"userPortfolio": [...this.state.userPortfolio, response.data[i].portfolio]})
                }

              //  this.setState({"userPortfolio": response.data});
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
//                     <Row stock={this.state.portfolio} />

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
                    {console.log("the state portfolio is", this.state.userPortfolio)}
                    
                    <Table port={this.state.userPortfolio} />
                </table>
                
                <div className="space">
                    <div className="center"><a href="new_user.html"><p>Click Here to Add a Position</p></a></div>
                </div>
            </fieldset>
        </form>
    )}
}




export default Main;