import React from 'react';
import axios from 'axios';

class Past extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            trips:[],
            location: '',
            date: '',
            duration: ''
        };
        
        this.handleTripSubmit = this.handleTripSubmit.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleLocChange = this.handleLocChange.bind(this);
        this.handleDurationChange = this.handleDurationChange.bind(this);
    }
    
    handleLocChange(event){
        this.setState({location: event.target.value});
    }
    handleDateChange(event){
        this.setState({date: event.target.value});
    }
    handleDurationChange(event){
        this.setState({duration: event.target.value});
    }
    
    handleTripSubmit(event){

        event.preventDefault();
    
        const trip = {location:this.state.location, date:this.state.date, duration:this.state.duration};
    
            axios.post('/api/past', trip)
            .then(results=>{
                const addTrip = this.state.trips.slice(0);
                addTrip.push(trip);
                this.setState({trips:addTrip});

            })
            .catch(error=>console.log(error));
    }
    
    
    render(){
        
        return <>
        <div className='past'>
        <h2>{this.props.name}'s Past Trips</h2>
        <h3>Add a past trip to your journal</h3>
        <form onSubmit={this.handleTripSubmit}>
            <label>Location: 
                <input type='text' name='location' value={this.state.location} onChange={this.handleLocChange} required/>
            </label>
            <label>Date:
                <input type='date' name='date' max="2019-12-03" value={this.state.date} onChange={this.handleDateChange} required/>
            </label>
            <label>Duration (days):
                <input type='text' name='duration' min='0' value={this.state.duration} onChange={this.handleDurationChange} required/>
            </label>

            <input type='submit' value='Submit Trip'/>
        </form>
        <h3>Your past trips:</h3>
        <ul>{this.state.trips.map(trip=><div className='viewTrips' key={trip.date}>
        <span>You went to {trip.location} </span>
        <span>on {trip.date} </span>
        <span>for {trip.duration} days!</span>
        </div>)}</ul>
        </div>
        </>;
    }

    
}

export default Past; 