import React from 'react';

function ProjectInfo(props){

	return(
		<div className="project-info">
			<h3 className="title">{ props.title }</h3>
			<div className="info">{ props.info }</div>
			<div className="website">{ props.website }</div>
		</div>
	);
}

export default ProjectInfo;