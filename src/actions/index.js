import axios from 'axios';
const API_KEY= '3b3780ece38a75714a0b4a17dc9025f1';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	// const url = `${ROOT_URL}&q=${city},{countryCode}`;
	const url = `${ROOT_URL}&q=${city},us`;
	console.log(url);
	const request = axios.get(url);
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}
