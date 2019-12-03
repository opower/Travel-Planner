import React from 'react';
import axios from 'axios';

class Search extends React.Component{
    
    constructor(props){
        super(props)
        
        this.state={
            pastTrip:'',
            futureTrip:'',
            pastTrips:[],
            futureTrips:[]
        }
        
        this.handlePastSubmit = this.handlePastSubmit.bind(this);
        this.handlePastChange = this.handlePastChange.bind(this);
        this.handleFutureChange = this.handleFutureChange.bind(this);
        this.handleFutureSubmit = this.handleFutureSubmit.bind(this);
    }
    
    handlePastChange(event){
        this.setState({pastTrip:event.target.value});
    }
    handleFutureChange(event){
        this.setState({futureTrip:event.target.value});
    }
    
    handlePastSubmit(event){
        
        event.preventDefault();

        axios.get(`/api/past/${this.state.pastTrip}`)
        .then(results=>{
            if(results.data.length !=0){
                const trips = [];
                results.data.forEach(trip=>{
                    trips.push(trip);
                });
                this.setState({pastTrips: trips});   
            }
            else{
                alert("Sorry, No Match")
            }

        })
        .catch(error=>console.log(error));
        
    }
    
    handleFutureSubmit(event){
        
        event.preventDefault();
            
        axios.get(`/api/future/${this.state.futureTrip}`)
        .then(results=>{
            if(results.data.length !=0){
                const trips = [];
                results.data.forEach(trip=>{
                    trips.push(trip);
                });
                this.setState({futureTrips: trips});
            }
            else{
                alert("Sorry, No Match")
            }
        })
        .catch(error=>console.log(error));
        
    }
    
    render(){
        
        return <>
        <div className='search'>
        <h2>Search for a trip</h2>
        <form onSubmit={this.handlePastSubmit}>
        <label>Enter a Past Location:
        <input type='text' name='name' value={this.state.pastTrip} onChange={this.handlePastChange}/>
        </label>
        <input type='submit' value='Submit'/>
        </form>
        <ul>{this.state.pastTrips.map(trip=><div className='viewTrips' key={trip.date}>
        <span>Location: {trip.location}, </span>
        <span>Date: {trip.date}, </span>
        <span>Duration: {trip.duration} days</span>
        </div>)}</ul>  
        <form onSubmit={this.handleFutureSubmit}>
        <label>Enter a Future Location:
        <input type='text' name='name' value={this.state.futureTrip} onChange={this.handleFutureChange}/>
        </label>
        <input type='submit' value='Submit'/>
        </form>
        <ul>{this.state.futureTrips.map(trip=><div className='viewTrips' key={trip.date}>
        <span>Location: {trip.location}, </span>
        <span>Date: {trip.date}, </span>
        <span>Duration: {trip.duration} days</span>
        </div>)}</ul> 
        </div>
        </>
    }
}

export default Search;