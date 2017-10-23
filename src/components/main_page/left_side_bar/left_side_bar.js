import React from 'react';
import Personal from './personal';
import Software from './software';
import Hobbies from './hobbies';
import '../../../styles/css/left_side_bar.css';

function LeftSideBar(props){

	return(
		<div className="left-side-bar">
			<div className="left-side-bar-item">
				<Personal resume={ props.resume }/>
			</div>
			<div className="left-side-bar-item">
				<Software resume={ props.resume }/>
			</div>
			<div className="left-side-bar-item">
				<Hobbies resume={ props.resume }/>
			</div>
		</div>
	);
}

export default LeftSideBar;