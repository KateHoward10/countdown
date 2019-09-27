import styled from 'styled-components';

export const Line = styled.div`
	width: 2px;
	height: 20px;
	background-color: black;
	display: inline-block;
	visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`;
