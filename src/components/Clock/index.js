import React from 'react';
import { Container, Face, Hand, LongLine, ShortLine, Middle, Score } from './styles';

function Clock(props) {
	return (
		<Container>
			<Face>
				<LongLine />
				<LongLine across />
				{[30, 60, 120, 150].map((angle, index) => (
					<ShortLine key={index} angle={angle} />
				))}
				<Hand {...props} />
				<Middle />
			</Face>
			<Score>
				<p>Score: {props.score}</p>
				<p>Games played: {props.gamesPlayed}</p>
			</Score>
		</Container>
	);
}

export default Clock;
