import React from 'react';
import ContactBar from './contact_bar';
import SocialBar from './social_bar';
import '../../styles/css/footer.css';

function Footer(props){

	return(
		<div className="footer">
			<SocialBar />
			<ContactBar />
		</div>
	);
}

export default Footer;