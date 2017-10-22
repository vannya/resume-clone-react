import React from 'react';
import BulletedItem from './bulleted_item';

function Work(props){

	return(
		<div className="work-box">
			<h3 className="title">Work</h3>
			<BulletedItem />
			<BulletedItem />
			<BulletedItem />
		</div>
	);
}

export default Work;