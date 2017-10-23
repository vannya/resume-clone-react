import React from 'react';

function ContactBar(props){

	return(
		<div className="contact-bar">
			<div className="left">
				<span className="contact-info">{ props.resume.contact.address }</span>
				<span className="contact-info">Cell: { props.resume.contact.cell }</span>
				<span className="contact-info">Email: { props.resume.contact.email }</span>
			</div>
			<div className="right">{ props.resume.contact.website }</div>
		</div>
	);
}

export default ContactBar;