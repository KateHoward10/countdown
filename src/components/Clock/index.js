import React from 'react';
import { Face, Hand } from './styles';

function Clock(props) {
	return (
		<Face>
			<Hand {...props} />
		</Face>
	);
}

export default Clock;
