import React from 'react';
import { Face, Hand, LongLine, ShortLine, Middle } from './styles';

function Clock(props) {
	return (
		<Face>
			<LongLine />
			<LongLine across />
			{[30, 60, 120, 150].map((angle, index) => (
				<ShortLine key={index} angle={angle} />
			))}
			<Hand {...props} />
			<Middle />
		</Face>
	);
}

export default Clock;
