import React from 'react';
import '../../../styles/css/css-circular-prog-bar.css';

function PieItem(props){

	return(
		<div className="pie-item">
			<div class="progress-circle p35">
				<span>Design</span>
				<div className="left-half-clipper">
  					<div className="first50-bar"></div>
 					<div className="value-bar"></div>
				</div>
			</div>
		</div>
	);
}

export default PieItem;