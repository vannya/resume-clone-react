import React from 'react';
import PieItem from './pie_item';

function Skills(props){

	return(
		<div className="skills-box">
			<h3 className="title">Professional Skills</h3>
			<div className="skills-row">
				<PieItem data={ props.resume.skills.circle1 }/>
				<PieItem data={ props.resume.skills.circle2 }/>
				<PieItem data={ props.resume.skills.circle3 }/>
				<PieItem data={ props.resume.skills.circle4 }/>
				<PieItem data={ props.resume.skills.circle5 }/>
			</div>
		</div>
	);
}

export default Skills;