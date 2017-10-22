import React from 'react';
import Work from './work';
import Skills from './skills';
import Education from './education';
import '../../../styles/css/right_side_bar.css';

function RightSideBar(props){

	return(
		<div className="right-side-bar">
			<div className="right-side-bar-item">
				<Work />
			</div>
			<div className="right-side-bar-item">
				<Skills />
			</div>
			<div className="right-side-bar-item">
				<Education />
			</div>
		</div>
	);
}

export default RightSideBar;