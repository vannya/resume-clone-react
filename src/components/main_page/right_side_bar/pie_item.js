import React from 'react';
import '../../../styles/css/css-circular-prog-bar.css';

function PieItem(props){

	return(
		<div className="pie-item">
			<div className={`progress-circle p${ props.data.percentage }`}>
				<span>{ props.data.label }</span>
				<div className="left-half-clipper">
  					<div className="first50-bar"></div>
 					<div className="value-bar"></div>
				</div>
			</div>
		</div>
	);
}

export default PieItem;