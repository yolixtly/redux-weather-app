import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action){
	console.log('in Reducer Action was received', action.payload);
	switch(action.type) {
		case FETCH_WEATHER:
					//this the only part of the response that we are interested 
					//this is used instead of concat to add a new element without mutating our initial state
			return [action.payload.data, ...state];
	}
	return state;
}