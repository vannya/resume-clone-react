import React from 'react';
import BarItem from './bar_item';

function Software(props){

	return(
		<div className="software-box">
			<h3 className="title">Software</h3>
			{ Object.keys(props.resume.software).map(key => {
				return (
					<BarItem key={ key } language={ props.resume.software[key].name } width={ props.resume.software[key].percentage } />
				);
			}) }
		</div>
	);
}

export default Software;