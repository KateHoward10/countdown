import React from 'react';
import { Container } from './styles';

function Number(props) {
	return <Container {...props}>{props.value}</Container>;
}

export default Number;
