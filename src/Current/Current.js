import React, { Component } from 'react';
import './Current.css';
import axios from 'axios';

class Current extends Component {
    constructor (){
        super();
        this.state = {
            btcprice: '',
            ltcprice: '',
            ethprice: ''
        };
    }
    componentWillMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD')
        .then(response => {
            // set latest prices in state to api prices
            this.setState({ btcprice: response.data.BTC.USD });
            this.setState({ ltcprice: response.data.LTC.USD });
            this.setState({ ethprice: response.data.ETH.USD });
        })
        //error handling
        .catch(error => {
            console.log(error);
        })
    }
    render() {
        return (
            <div className="current--section container">
                <h2>Current Price</h2>
                <div className="columns current--section__box">
                    <div className="column btc--section">
                        <h5>${this.state.btcprice}</h5>
                        <p>1 BTC</p>
                    </div>
                    <div className="column ltc--section">
                        <h5>${this.state.ltcprice}</h5>
                        <p>1 LTC</p>
                    </div>
                    <div className="column eth--section">
                        <h5>${this.state.ethprice}</h5>
                        <p>1 ETH</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Current;