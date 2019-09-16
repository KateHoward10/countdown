import React from 'react';
import { Container, Box, Text } from './styles';

function Target({ target }) {
	return (
		<Container>
			<Box>
				<Text>{target ? target : '___'}</Text>
			</Box>
		</Container>
	);
}

export default Target;
