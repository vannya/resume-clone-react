import React from 'react';
import IconPlusLabel from './icon_plus_label';

function Hobbies(props){

	return(
		<div className="hobbies-box">
			<h3 className="title">Hobbies</h3>
			<span className="hobbies-item">
			{ Object.keys(props.resume.hobbies).map(key => {
					return(
						<IconPlusLabel key={ key } iconName={ props.resume.hobbies[key].icon } hobby={ props.resume.hobbies[key].name } />
					);	
			}) }
			</span>
		</div>
	);
}

export default Hobbies;