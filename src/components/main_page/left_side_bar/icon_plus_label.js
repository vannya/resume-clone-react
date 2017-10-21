import React from 'react';

function IconPlusLabel(props){

	return(
		<div className="hobbies-links">
			<span class="fa-stack fa-2x">
				<i class="fa fa-circle fa-stack-2x"></i>
				<i class={ `fa fa-${ props.iconName } fa-stack-1x fa-inverse` }></i>
			</span>
			<span className="hobbies-label">{ props.hobby }</span>
		</div>
	);
}

export default IconPlusLabel;