import React from 'react';
import ProjectBar from './project_bar';
import '../../styles/css/main_page.css';

function Projects(props){

	return(
		<div className="projects">
			{ Object.keys(props.resume.projects).map(key => {
				return(
					<ProjectBar 
						key={ key } 
						index={ key }
						resume={ props.resume } 
						title={ props.resume.projects[key].title } 
						info={ props.resume.projects[key].info }
						website={ props.resume.projects[key].website }
						img={ props.resume.projects[key].img }
					/>
				);
			}) }
		</div>
	);
}

export default Projects;