import React from 'react';
import Blurb from './blurb';
import LeftSideBar from './left_side_bar/left_side_bar';
import RightSideBar from './right_side_bar/right_side_bar';
import '../../styles/css/main_page.css';

function Resume(props){

	return(
		<div className="resume">
			<Blurb resume={ props.resume }/>
			<div className="main-page">
				<LeftSideBar resume={ props.resume }/>
				<RightSideBar resume={ props.resume }/>
			</div>
		</div>

	);
}

export default Resume;