import React from 'react';
import { Container } from './styles';

function Button(props) {
	return <Container {...props}>{props.children}</Container>;
}

export default Button;
