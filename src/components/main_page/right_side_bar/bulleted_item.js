import React from 'react';

function BulletedItem(props){

	return(
		<div className="bulleted-item">
			<div className="left">
				<div className="bullet">
					<span class="fa-stack">
						<i class="fa fa-circle fa-stack-2x"></i>
						<i class="fa fa-circle fa-stack-1x"></i>
					</span>
				</div>
			</div>
			<div className="right">
				<span className="item-header">
					<span className="position">Position@Company/Degree@School</span>
					<span className="year">Year</span>
				</span>
				<div className="item-desc">Description</div>
				<hr />
			</div>
		</div>
	);
}

export default BulletedItem;