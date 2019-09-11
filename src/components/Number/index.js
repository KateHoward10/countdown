import React from 'react';
import { Container } from './styles';

function Number({ value, disabled, onClick }) {
	return (
		<Container disabled={disabled} onClick={onClick}>
			{value}
		</Container>
	);
}

export default Number;
