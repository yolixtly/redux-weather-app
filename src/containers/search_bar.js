import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	//initialize state
	constructor(props){
		super(props);

		this.state={ term: ''};
		/*
		this = SearchBar take .onInputChange from below and bind
		that logic to this = SearchBar 

		onInputChange
		bundle.js:21615 Uncaught TypeError: Cannot read property 'setState' of undefined
		To clear the error above we added the code below: this = instance of SearchBar has a 
		function called onInputChange bind that function to this, *searchbar and 
		replace onInputChange with this new bound with this.onInputChange.
		take existing function bind to this then replace existing function with it (overwriting).

		onFormSubmit
		bundle.js:22406 Uncaught TypeError: Cannot read property 'props' of null
		to clear null error we add the following code below.
		when we have a callback that we pass to a DOM/jsx element and makes a reference to 'this' we need to bind the context
		this.onFormSubmit = this.onFormSubmit.bind(this);

		//check developer tools network and forecast -> preview to see request
		*/
		this.onInpuntChange = this.onInpuntChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	//Because it starts with on... pass an event as parameter
	onInpuntChange(event){
		/* this will trhow an error "Cannot read property
		 * 'setState' of undefined"
		 * because this.setState has not been defined in this enviroment 
		 * hence we need to bind the this to this enviroment from the State/Store
		 */
		this.setState({
			term: event.target.value
		});
	}
	onFormSubmit(event){
		event.preventDefault();
		//fetching weather data API
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}
	render() {
		return (
			<form onSubmit={this.onFormSubmit} className='input-group'>
			<input placeholder='Get a five-day forecast in your favorite city' 
			className="form-control" 
			value={this.state.term} 
			onChange={this.onInpuntChange} />
			<span className="input-group-btn">
				<button type='submit' className="btn btn-secondary">Submit</button>
			</span>
			</form>
		);
	}
}

function mapDispatchToProps(dispatch){
	//action creator flows down into the middleware
	// and then the reducer inside of the app
	//causes the action creator featchweather to bind action with dispatch to make sure it flows down through our middleware and reducers
	//lets us call this.props.fetchWeather from our action creator
	return bindActionCreators({ fetchWeather } , dispatch)
}
//connect(state, dispatch)(component);
// we dont need a state here for now that is why is null
//  in the first param
//we pass null because when we pass a function we want 
//it to only go in as the second argument and ignore 
//the first arguement that will usually be a state.
//this way we ensure that the reducer receives succesfully the information comming 
//from the Ajax Request which is async. Rather than passing a promise... we pass an object.

export default connect(null, mapDispatchToProps)(SearchBar);