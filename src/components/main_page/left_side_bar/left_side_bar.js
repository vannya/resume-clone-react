import React from 'react';
import Personal from './personal';
import '../../../styles/css/left_side_bar.css';

function LeftSideBar(props){

	return(
		<div className="left-side-bar">
			<div className="left-side-bar-item">
				<Personal />
			</div>
			<div className="left-side-bar-item">Software</div>
			<div className="left-side-bar-item">Hobbies</div>
		</div>
	);
}

export default LeftSideBar;