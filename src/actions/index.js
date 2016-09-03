//we require axios to make ajax requests similar to using jquery.
import axios from 'axios';

const API_KEY= '3b3780ece38a75714a0b4a17dc9025f1';
//querystring begins after the ?
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//we set the type to a variable to avoid typo errors (action and reducers will be referenceing the action type variable)
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	// const url = `${ROOT_URL}&q=${city},{countryCode}`;
	const url = `${ROOT_URL}&q=${city},us`;
	console.log('URL we are sending: ', url);
	const request = axios.get(url);
	//the data comes as a promise but hits the middleware redux-promise and gets converted before hitting the reducer_weather, check console for example.
	console.log('Request: ', request);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
