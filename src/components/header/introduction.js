import React from 'react';
import logo from '../../logo.svg';

function Introduction(props){

	return(
		<div className="introduction">
			<div className="left">
				<div className="name">Name</div>
				<div className="job">Job</div>
			</div>
			<div className="right">
				<img src={ logo } className='header-image' alt=''/>
			</div>
		</div>
	);
}

export default Introduction;