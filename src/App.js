import React from 'react';
import axios from 'axios';

import Exchange from './Exchange.js';
import Future from './Future.js';
import Past from './Past.js';
import Intro from './Intro.js';
import Search from './Search.js';
import './style.css';

class App extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            name:'',
            visited:'',
            favourite:'',
        };
        this.handleName = this.handleName.bind(this);  
        this.handleFav = this.handleFav.bind(this);
        this.handleVisited = this.handleVisited.bind(this);
    }
    
    handleName(event){
        this.setState({name:event.target.value})
    }
    handleFav(event){
        this.setState({favourite:event.target.value})
    }
    handleVisited(event){
        this.setState({visited:event.target.value})
        
    }
    
    render(){
        
        let info = {
            name:this.state.name,
            visited:this.state.visited,
            favourite:this.state.favourite
        }
        
        return <>
        <div className='app' style={{backgroundImage:'url(./images/wall.jpg)'}}>
        <header style={{backgroundImage:'url(./images/header.jpg)'}}>
        <h1>Personalized Travel Journal</h1>
        </header>
        <div className='border'>
        <div className='name'>
        <label>Enter Your Name: <input type='text' name='nameValue' value={this.state.name} onChange={this.handleName}/></label>
        <label> Favourite Destination in The World: <input type='text' name='favePlace' value={this.state.favourite} onChange={this.handleFav}/></label>
        <label>Number of Countries Visited: <input type='text' name='visited' value={this.state.visited} onChange={this.handleVisited}/></label>
        </div>
        </div>
        
        
        <Intro {...info}/>
        <div className='trips'>
        <Future {...info}/>
        <Past {...info}/>
        </div>
        <Search/>
        <Exchange/>
        </div>
        </>;
    }
}

export default App;
