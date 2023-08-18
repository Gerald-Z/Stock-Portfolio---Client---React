import React from 'react';
import './main.css'


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
                        <th>{this.state.stock.CompanyName}</th>
                        <th>{this.state.stock.Ticker}</th>
                        <th>{this.state.stock.SharesOwned}</th>
                        <th>{this.state.stock.SharePrice}</th>
                        <th>{this.state.stock.TotalCost}</th>
                        <th>{this.state.stock.TotalValue}</th>
                        <th>{this.state.stock.EstimatedDivPayout}</th>
                        <th>{this.state.stock.EstimatedDivYield}</th>
                    </tr>
                </table>
                
                <div className="space">
                    <div className="center"><a href="new_user.html"><p>Click Here to Add a Position</p></a></div>
                </div>
            </fieldset>
        </form>
    )}
}




export default Main;