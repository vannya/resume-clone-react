import React from 'react';
import LeftSideBar from './left_side_bar/left_side_bar';
import RightSideBar from './right_side_bar/right_side_bar';
import '../../styles/css/main_page.css';

function MainPage(props){

	return(
		<div className="main-page">
			<LeftSideBar resume={ props.resume }/>
			<RightSideBar resume={ props.resume }/>
		</div>
	);
}

export default MainPage;