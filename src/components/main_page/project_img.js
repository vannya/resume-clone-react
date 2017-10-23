import React from 'react';

function ProjectImg(props){

	return(
		<div className="project-img">
			<img src={ props.img } alt="" />
		</div>
	);
}

export default ProjectImg;