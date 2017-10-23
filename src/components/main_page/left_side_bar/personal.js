import React from 'react';
import DataItem from './data_item';

function Personal(props){

	return(
		<div className="personal-box">
			<h3 className="title">Personal</h3>
			{ Object.keys(props.resume.personal).map(key => {
				return(
					<div className='data-item-wrapper' key={ key }>
						<DataItem keyName={ key } valueName={ props.resume.personal[key] } />
						<hr />
					</div>
				);
			}) }
		</div>
	);
}

export default Personal;