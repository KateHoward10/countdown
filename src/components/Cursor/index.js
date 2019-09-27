import React, { useState } from 'react';
import useInterval from '../../hooks/useInterval';
import { Line } from './styles';

function Cursor() {
	const [visible, setVisible] = useState(true);

	useInterval(() => {
		setVisible(!visible);
	}, 800);

	return <Line visible={visible} />;
}

export default Cursor;
