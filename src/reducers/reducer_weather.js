import { FETCH_WEATHER } from '../actions/index';

export default function(state= [], action){
	//shows received data after promise middleware kicked in.
	console.log('action was received', action);
	switch(action.type) {
		case FETCH_WEATHER:
					//this the only part of the response that we are interested 
					//this is used instead of concat to add a new element without mutating our initial state
			return [action.payload.data, ...state];
	}
	return state;
}