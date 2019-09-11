import styled from 'styled-components';

export const Container = styled.button`
	background-color: rgba(0, 0, 255, ${props => (props.disabled ? 0.5 : 1)});
	color: white;
	font-size: 20px;
	padding: 5px;
	margin: 5px;
`;
