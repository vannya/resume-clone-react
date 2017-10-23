import React from 'react';
import ProjectInfo from './project_info';
import ProjectImg from './project_img';
import '../../styles/css/project_bar.css';

function ProjectBar(props){

	return(
		<div className="project-bar">
			<ProjectInfo />
			<ProjectImg />
		</div>
	);
}

export default ProjectBar;