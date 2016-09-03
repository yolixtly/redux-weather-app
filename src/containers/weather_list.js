import React, { Component } from 'react';
import { connect } from 'react-redux';
// {Chart Element, child Aditional Configuration of the Chart}
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';

//when adding connect export remove the function export default
class WeatherList extends Component {
	//cityData contains the api weather object. map() will produce one row for each city.
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => weather.main.temp);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		return(
			<tr key={ name }>
			<td>
			 { name }
			</td>
			<td>
			<Chart data={temps} units="K" color="hotpink" />
			</td>
			<td>
			<Chart data={pressures} units="hPA" color="lightGreen" />
			</td>
			<td>
			<Chart data={humidities} units="%" color="aquamarine" />
			</td>
			</tr>
		);
	}
	render() {
		return (
			<table className="table table-hover">
			<thead>
				<tr>
					<th>City</th>
					<th>Temperature (K)</th>
					<th>Pressure(hPa)</th>
					<th>Humidity(%)</th>
				</tr>
			</thead>
				<tbody>
				{this.props.weather.map(this.renderWeather)}
				</tbody>			
			</table>
		);
	}
}

function mapStateToProps({ weather }) {
	//we are using ES6 syntax equivalent to : state.weather; Because we assigned our weather reducer to the weather key in the combineReducer
	return { weather }; 
}

export default connect(mapStateToProps)(WeatherList);