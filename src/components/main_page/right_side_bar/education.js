import React from 'react';
import BulletedItem from './bulleted_item';

function Education(props){

	return(
		<div className="education-box">
			<h3 className="title">Education</h3>
			<BulletedItem />
			<BulletedItem />
			<BulletedItem />
		</div>
	);
}

export default Education;