import React from 'react';
import BulletedItem from './bulleted_item';

function Work(props){

	return(
		<div className="work-box">
			<h3 className="title">Work</h3>
			{ Object.keys(props.resume.work).map(key => {
				return (
					<BulletedItem 
						key={ key } 
						position={ props.resume.work[key].position } 
						place={ props.resume.work[key].company }
						year={ props.resume.work[key].year }
						desc={ props.resume.work[key].description }
					 />
				);
			}) }
		</div>
	);
}

export default Work;