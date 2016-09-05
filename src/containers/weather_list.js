import React, { Component } from 'react';
import { connect } from 'react-redux';
// {Chart Element, child Aditional Configuration of the Chart}
import { Sparklines, SparklinesLine } from 'react-sparklines';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

//when adding connect export remove the function export default
class WeatherList extends Component {
	//cityData contains the api weather object. map() will produce one row for each city.
	//(K - 273.15)* 1.8000 + 32.00
	renderWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map(weather => {
			var farenheith =(weather.main.temp - 273.15) * 1.80 + 32;
			return farenheith;
		 });
		console.log(temps);
		const pressures = cityData.list.map(weather => weather.main.pressure);
		const humidities = cityData.list.map(weather => weather.main.humidity);
		// const lat = cityData.city.coord.lat;
		// const lon = cityData.city.coord.lon;
		const { lon, lat } = cityData.city.coord;
		return(
			<tr key={ name }>
			<td>
			 <GoogleMap lat={lat} lon={lon} />
			</td>
			<td>
			<Chart data={temps} units="F" color="hotpink" />
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
					<th>Temperature (F)</th>
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