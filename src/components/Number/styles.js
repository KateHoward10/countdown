import styled from 'styled-components';

export const Container = styled.button`
	background-color: rgba(0, 0, 255, ${props => (props.disabled ? 0.5 : 1)});
	color: white;
	font-size: 20px;
	border: 1px solid grey;
	margin: 5px;
	width: 50px;
	height: 50px;
`;
