import React from 'react';
import { Container, Button } from './styles';

function ClearButtons({ prev, next, backspace, clearAll }) {
	return (
		<Container>
			<div>
				<Button onClick={prev}>←</Button>
				<Button onClick={next}>→</Button>
			</div>
			<div>
				<Button onClick={backspace}>Backspace</Button>
				<Button onClick={clearAll}>Clear All</Button>
			</div>
		</Container>
	);
}

export default ClearButtons;
