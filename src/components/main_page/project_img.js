import React from 'react';

function ProjectImg(props){

	return(
		<div className="project-img">
			<img src={ process.env.PUBLIC_URL+ '/' + props.img} alt="" />
		</div>
	);
}

export default ProjectImg;