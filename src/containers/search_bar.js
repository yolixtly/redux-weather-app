import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props){
		super(props);

		this.state={ term: ''};
		/*
		this = SearchBar take .onInputChange from below and bind
		that logic to this = SearchBar 
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
	return bindActionCreators({ fetchWeather } , dispatch)
}
// we dont need a state here for now that is why is null
//  in the first param
export default connect(null, mapDispatchToProps)(SearchBar);