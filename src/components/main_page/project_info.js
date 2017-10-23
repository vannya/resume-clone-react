import React from 'react';

function ProjectInfo(props){

	return(
		<div className="project-info">
			<h3 className="title">{ props.title }</h3>
			<div className="info">{ props.info }</div>
			<div className="website"><a href={`http://${ props.website }`} target="_blank">{ props.website }</a></div>
		</div>
	);
}

export default ProjectInfo;