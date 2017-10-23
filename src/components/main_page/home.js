import React from 'react';
import LeftSideBar from './left_side_bar/left_side_bar';
import RightSideBar from './right_side_bar/right_side_bar';
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
					<button type="submit" formaction="/resume">View My Resume</button>
					<button type="submit" formaction="/portfolio">View My Projects</button>
				</form>
			</div>
			

		</div>
	);
}

export default Home;