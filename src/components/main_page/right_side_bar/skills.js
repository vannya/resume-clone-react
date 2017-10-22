import React from 'react';
import PieItem from './pie_item';

function Skills(props){

	return(
		<div className="skills-box">
			<h3 className="title">Professional Skills</h3>
			<div className="skills-row">
				<PieItem />
				<PieItem />
				<PieItem />
				<PieItem />
				<PieItem />
			</div>
		</div>
	);
}

export default Skills;