//library to use 
import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine, SparklinesSpots } from 'react-sparklines';

function average(data){
	return _.round(_.sum(data)/data.length);
};


//class base component or function base component? 
	//we dont need to talk to state 
	//no need for component state
	//just make a functional component 
export default (props) => {
	return (
		<div>
		<Sparklines height={120} width={180} data={props.data}>
			  <SparklinesLine color={props.color} />
			  <SparklinesReferenceLine type="avg" />
			  <SparklinesSpots />
		</Sparklines>
		<div>{average(props.data)}{props.units}</div>
		</div>
	)
}	

