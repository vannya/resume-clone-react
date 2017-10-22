import React from 'react';

function DataItem(props){

	function renderValue(item){
		if(typeof item === 'object'){
			let display = '';
			for(var i = 0; i < item.length; i++){
				if(i === item.length - 1){
					display = display.concat(item[i]);
				} else {
					display = display.concat(item[i] + ', ');
				}
			}
			return display;
		} else {
			return (props.valueName);
		}
	};

	return(
		<div className="data-item">
			<span className="keyName">{ props.keyName }</span>
			<span className="valueName">{ renderValue(props.valueName) }</span>
		</div>
	);
}

export default DataItem;