import React from 'react';
import { Container, Box, Text } from './styles';

function Target({ value }) {
	return (
		<Container>
			<Box>
				<Text>{value}</Text>
			</Box>
		</Container>
	);
}

export default Target;
