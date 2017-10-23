import React from 'react';
import NavBar from './navbar';
import Introduction from './introduction';
import '../../styles/css/header.css';

function Header(props){

	return(
		<div className="header">
			<NavBar />
			<Introduction resume={ props.resume }/>
		</div>
	);
}

export default Header;