import React from 'react';

const Scroll = (props) => {

	return (

		<div style={
				{
					overflowY: 'scroll',
					height: 'calc(100vh - 187.32px)'}
				} >
			{props.children}
		</div>


	)

};

export default Scroll; 