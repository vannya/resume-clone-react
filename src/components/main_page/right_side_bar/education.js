import React from 'react';
import BulletedItem from './bulleted_item';

function Education(props){

	return(
		<div className="education-box">
			<h3 className="title">Education</h3>
			{ Object.keys(props.resume.education).map(key => {
				return (
					<BulletedItem 
						key={ key } 
						position={ props.resume.education[key].degree } 
						place={ props.resume.education[key].school }
						year={ props.resume.education[key].year }
						desc={ props.resume.education[key].description }
					 />
				);
			}) }
		</div>
	);
}

export default Education;