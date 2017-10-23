import React from 'react';
import SocialItem from './social_item';

function SocialBar(props){

	return(
		<div className="social-bar">
			{ Object.keys(props.resume.social).map(key => {
				return(
					<div className='social-item-wrapper' key={ key }>
						<SocialItem 
							icon={ props.resume.social[key].icon } 
							label={ props.resume.social[key].info }
						/>
					</div>
				);
			}) }
		</div>
	);
}

export default SocialBar;