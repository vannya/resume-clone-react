import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(props){

	return(
		<div className="navbar">
			<div className={ window.location.pathname === '/resume-clone-react/' ? "nav-link active" : "nav-link" }><Link to='/resume-clone-react/'>Home</Link></div>
			<div className={ window.location.pathname === '/resume-clone-react/resume' ? "nav-link active" : "nav-link" }><Link to='/resume-clone-react/resume'>Resume</Link></div>
			<div className={ window.location.pathname === '/resume-clone-react/portfolio' ? "nav-link active" : "nav-link" }><Link to='/resume-clone-react/portfolio'>Portfolio</Link></div>
		</div>
	);
}

export default NavBar;