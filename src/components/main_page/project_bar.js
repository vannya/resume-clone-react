import React from 'react';
import ProjectInfo from './project_info';
import ProjectImg from './project_img';
import '../../styles/css/project_bar.css';

function ProjectBar(props){
	console.log(props.index%2);

	return(
		<div className={ props.index % 2 === 0 ? "project-bar row" : "project-bar row-reverse" }>
			<ProjectInfo title={ props.title } info={ props.info } website={ props.website }/>
			<ProjectImg img={ props.img } />
		</div>
	);
}

export default ProjectBar;