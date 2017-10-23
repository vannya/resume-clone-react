import React from 'react';

function Introduction(props){

	return(
		<div className="introduction">
			<div className="left">
				<div className="name">{ props.resume.personal.Name }</div>
				<div className="job">{ props.resume.job }</div>
			</div>
			<div className="right">
				<img src={ props.resume.profileImg } className='header-image' alt=''/>
			</div>
		</div>
	);
}

export default Introduction;