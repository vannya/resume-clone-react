import React from 'react';

function IconPlusLabel(props){

	return(
		<div className="hobbies-links">
			<span className="fa-stack fa-2x">
				<i className="fa fa-circle fa-stack-2x"></i>
				<i className={ `fa fa-${ props.iconName } fa-stack-1x fa-inverse` }></i>
			</span>
			<span className="hobbies-label">{ props.hobby }</span>
		</div>
	);
}

export default IconPlusLabel;