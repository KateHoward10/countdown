import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`;

export const Face = styled.div`
	width: 100px;
	height: 100px;
	margin: 0 10px;
	border-radius: 50%;
	border: 2px solid blue;
	box-shadow: 0 0 10px grey;
	background-color: #f7f6c8;
	position: relative;
`;

export const Hand = styled.div`
	width: 4px;
	height: 45px;
	background-color: blue;
	position: absolute;
	transform-origin: 50% 100%;
	transform: translate(48px, 5px) rotate(${props => props.degrees}deg);
`;

export const LongLine = styled.div`
	width: ${props => (props.across ? 100 : 2)}px;
	height: ${props => (props.across ? 2 : 100)}px;
	background-color: lightgrey;
	position: absolute;
	top: ${props => (props.across ? 49 : 0)}px;
	left: ${props => (props.across ? 0 : 49)}px;
`;

export const ShortLine = styled.div`
	width: 1px;
	height: 100px;
	background-image: linear-gradient(lightgrey 15%, #f7f6c8 15% 85%, lightgrey 85%);
	position: absolute;
	top: 0;
	left: 49.5px;
	transform: rotate(${props => props.angle}deg);
`;

export const Middle = styled.div`
	width: 10px;
	height: 10px;
	border-radius: 50%;
	position: absolute;
	top: 45px;
	left: 45px;
	background-color: blue;
`;

export const Score = styled.span`
	font-size: 20px;
	font-family: cursive;
	font-weight: bold;
	margin: 0 10px;
`;
