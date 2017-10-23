import React from 'react';

function SocialItem(props){
	return(
		<div className="social-item">
			<span className="fa-stack fa-lg">
				<i className="fa fa-circle fa-stack-2x"></i>
				<i className={ `fa fa-${ props.icon } fa-stack-1x fa-inverse` }></i>
			</span>
			<span className="label">{ props.label }</span>
		</div>
	);
}
 
export default SocialItem;