import React from 'react';

function Blurb(props){

	return(
		<div className="blurb">
			<p>{ props.resume.blurb }</p>
		</div>
	);
}

export default Blurb;