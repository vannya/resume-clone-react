import React from 'react';

function BarItem(props){
	var style = {
		width: props.width
	};

	return(
		<div className="bar-item">
			<span className="language-name">{ props.language }</span>
			<div className="progress-bar">
				<div className="the-bar" style={ style }></div>
			</div>
		</div>
	);
}

export default BarItem;