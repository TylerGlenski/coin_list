import React, { Component } from 'react';
import './History.css';
import axios from 'axios';
import moment from 'moment';

class History extends Component {
    constructor () {
      super();
      this.state = {
          currentprice: {},
          onedaysprice: {},
          twodaysprice: {},
          threedaysprice: {},
          fourdaysprice: {}
      }
      this.getBTCPrices = this.getBTCPrices.bind(this);
      this.getETHPrices = this.getETHPrices.bind(this);
      this.getLTCPrices = this.getLTCPrices.bind(this);
    }
    // This function gets the ETH price for a specific timestamp/date. The date is passed in as an argument
    getETHPrices (date) {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
    }
    // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
    getBTCPrices (date) {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
    }
    // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
    getLTCPrices (date) {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
    }
    

    // beginning of getPrice info functions 
   
    getCurrentPrice () {
        // Get date in timestamp
        let t = moment().unix()

        // axios.all is used to make concurrent API requests.
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                // Set the state to the content of the object f
                this.setState({ currentprice: f });
            }))
            .catch(error => {
                console.log(error);
            });
    }
    
    getOnedaysPrice () {
        // Get date in timestamp
        let t = moment().subtract(1, 'days').unix();

        // api request
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                // Set the state
                this.setState({ onedaysprice: f });
            }));
    }

    getTwoDaysPrice () {
        // Get the date in timestamp
        let t = moment().subtract(2, 'days').unix();

        //api request
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                // Set the state
                this.setState({ twodaysprice: f });
            }));
    }
    
    getThreeDaysPrice () {
        // Get the date in timestamp
        let t = moment().subtract(3, 'days').unix();
        
        // api request
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                // Set the state 
                this.setState({ threedaysprice: f });
            }));
    }
    
    getFourDaysPrice () {
        // Get the date in timestamp
        let t = moment().subtract(4, 'days').unix();
        
        //api request
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format("MMMM Do YYYY"),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                }
                // Set the state 
                this.setState({ fourdaysprice: f });
            }));
    }
// end getPrice info functions


    // create component instance and insert into DOM
    componentWillMount () {
        this.getCurrentPrice();
        this.getOnedaysPrice();
        this.getTwoDaysPrice();
        this.getThreeDaysPrice();
        this.getFourDaysPrice();
    }
    render() {
        return (
            <div className="history--section container">
                <h2>History (Past 5 days)</h2>
                <div className="history--section__box">
                    <div className="history--section__box__inner">
                        <div className="columns">
                            <p className="date-p">{this.state.currentprice.date}</p>
                            <div className="column">
                                <p>1 BTC = ${this.state.currentprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.currentprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.currentprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="history--section__box__inner">
                        <div className="columns">
                            <p className="date-p">{this.state.onedaysprice.date}</p>
                            <div className="column">
                                <p>1 BTC = ${this.state.onedaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.onedaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.onedaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="history--section__box__inner">
                        <div className="columns">
                            <p className="date-p">{this.state.twodaysprice.date}</p>
                            <div className="column">
                                <p>1 BTC = ${this.state.twodaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.twodaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.twodaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="history--section__box__inner">
                        <div className="columns">
                            <p className="date-p">{this.state.threedaysprice.date}</p>
                            <div className="column">
                                <p>1 BTC = ${this.state.threedaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.threedaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.threedaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="history--section__box__inner">
                        <div className="columns">
                            <p className="date-p">{this.state.fourdaysprice.date}</p>
                            <div className="column">
                                <p>1 BTC = ${this.state.fourdaysprice.btc}</p>
                            </div>
                            <div className="column">
                                <p>1 ETH = ${this.state.fourdaysprice.eth}</p>
                            </div>
                            <div className="column">
                                <p>1 LTC = ${this.state.fourdaysprice.ltc}</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                </div>
            </div>
        )
    }
}
export default History;