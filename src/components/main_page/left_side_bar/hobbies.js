import React from 'react';
import IconPlusLabel from './icon_plus_label';

function Hobbies(props){

	return(
		<div className="hobbies-box">
			<h3 className="title">Hobbies</h3>
			<div className="hobbies-row">
				<IconPlusLabel iconName="binoculars" hobby="Travel" />
				<IconPlusLabel iconName="binoculars" hobby="Travel" />
				<IconPlusLabel iconName="binoculars" hobby="Travel" />
			</div>
			<div className="hobbies-row">
				<IconPlusLabel iconName="binoculars" hobby="Travel" />
				<IconPlusLabel iconName="binoculars" hobby="Travel" />
				<IconPlusLabel iconName="binoculars" hobby="Travel" />
			</div>
		</div>
	);
}

export default Hobbies;