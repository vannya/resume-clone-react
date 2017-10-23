import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props){

	return(
		<div className="navbar">
			<div className={ window.location.pathname === '/' ? "nav-link active" : "nav-link" }><Link to='/'>Home</Link></div>
			<div className={ window.location.pathname === '/resume' ? "nav-link active" : "nav-link" }><Link to='/resume'>Resume</Link></div>
			<div className={ window.location.pathname === '/portfolio' ? "nav-link active" : "nav-link" }><Link to='/portfolio'>Portfolio</Link></div>
		</div>
	);
}

export default NavBar;