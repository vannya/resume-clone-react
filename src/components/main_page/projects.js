import React from 'react';
import ProjectBar from './project_bar';
import '../../styles/css/main_page.css';

function Projects(props){

	return(
		<div className="projects">
			<ProjectBar />
			<ProjectBar />
			<ProjectBar />
		</div>
	);
}

export default Projects;