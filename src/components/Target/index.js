import React, { useState, useEffect } from 'react';
import useInterval from '../../hooks/useInterval';
import { Container, Box, Text } from './styles';

function Target({ target, toggleCountingDown, setTarget }) {
	const [settingNumber, toggleSettingNumber] = useState(false);
	const [iterations, setIterations] = useState(0);

	useInterval(
		() => {
			if (typeof target === 'number') {
				if (iterations < 10) {
					setTarget(Math.ceil(Math.random() * 899) + 100);
					setIterations(iterations + 1);
				} else {
					setTarget(target);
					toggleSettingNumber(false);
					toggleCountingDown(true);
					setIterations(0);
				}
			}
		},
		settingNumber ? 80 : null
	);

	useEffect(() => {
		toggleSettingNumber(true);
	}, [target]);

	return (
		<Container>
			<Box>
				<Text>{target}</Text>
			</Box>
		</Container>
	);
}

export default Target;
