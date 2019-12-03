import React from 'react';
import axios from 'axios';

class Exchange extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            rates:[],
            countries:[],
            currency:'CAD'
        }
        
        this.chooseCurrency = this.chooseCurrency.bind(this);
    }
    
    chooseCurrency(curr){
        this.setState({
            currency:curr
        })
    }
    
    componentDidMount(){
        axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.currency}`)
        .then(results =>{
            this.setState({countries:Object.keys(results.data.rates)}),
            this.setState({rates:Object.values(results.data.rates)})
        })
        .catch(error=>console.log(error));
    }
    
    componentDidUpdate(prevProps, prevState){
        if(prevProps.currency != this.state.currency){
            axios.get(`https://api.exchangeratesapi.io/latest?base=${this.state.currency}`)
            .then(results=>{
                this.setState({rates:Object.values(results.data.rates)})
            })
            .catch(error=>console.log(error));
        }
    }
    
    
    render(){

        return <>
        <div className='rates'>
        <h2>Exchange Rates</h2>
        <div className='split'>
        <div className='selCurr'>
        <h3>Select A Currency</h3>
        <ul>{this.state.countries.map(curr=><li key={curr}><button onClick={()=>this.chooseCurrency(curr)}>{curr}</button></li>)}</ul>
        </div>
        <div className='displayCurr'>
        <h3>The currency you chose is {this.state.currency}</h3>
        <div className='row'>
        <ul>{this.state.countries.map(curr=><li key={curr}>{curr}:    </li>)}</ul>
        <ul>{this.state.rates.map(rate=> <li key={rate}>  {rate}</li>)}</ul>
        </div>
        </div>
        </div>
        </div>
        </>;
    }
}

export default Exchange;
