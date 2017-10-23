import React from 'react';
import '../../styles/css/main_page.css';

function Home(props){

	return(
		<div className="home">
			<div className="center-stripe">
				<h1>Hello! I'm { props.resume.personal.Name }.</h1>
				<h2> I'm a { props.resume.job } with { props.resume.tagline }.</h2>
			</div>
			<div className="button-stripe">
				<form>
					<button type="submit" formaction="/resume-clone-react/resume">View My Resume</button>
					<button type="submit" formaction="/resume-clone-react/portfolio">View My Projects</button>
				</form>
			</div>
			

		</div>
	);
}

export default Home;