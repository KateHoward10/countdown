import styled from 'styled-components';

export const Face = styled.div`
	width: 100px;
	height: 100px;
	border-radius: 50%;
	background-color: #eee;
	position: relative;
	align-self: center;
`;

export const Hand = styled.div`
	width: 2px;
	height: 45px;
	background-color: navy;
	position: absolute;
	top: 5px;
	left: 49px;
	transform-origin: 0 100%;
	transform: rotate(${props => props.degrees}deg);
`;
