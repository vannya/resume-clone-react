import React from 'react';

function BulletedItem(props){

	return(
		<div className="bulleted-item">
			<div className="left">
				<div className="bullet">
					<span className="fa-stack">
						<i className="fa fa-circle fa-stack-2x"></i>
						<i className="fa fa-circle fa-stack-1x"></i>
					</span>
				</div>
			</div>
			<div className="right">
				<span className="item-header">
					<span className="position">{ props.position }@{ props.place }</span>
					<span className="year">{ props.year }</span>
				</span>
				<div className="item-desc">{ props.desc }</div>
				<hr />
			</div>
		</div>
	);
}

export default BulletedItem;