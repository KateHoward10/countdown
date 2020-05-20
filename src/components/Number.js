import styled from 'styled-components';

const Number = styled.button`
	background-color: ${props => (props.value === '' ? '#50c9eb' : `rgba(0, 0, 255, ${props.disabled ? 0.3 : 1})`)};
	color: white;
	font-size: 20px;
	border: 2px solid grey;
	border-bottom-color: lightgrey;
	border-right-color: lightgrey;
	width: 50px;
	height: 50px;
	margin-top: 5px;
	text-align: center;
	padding: 0;
	@media screen and (max-width: 600px) {
		font-size: 5vw;
		width: 15vw;
		height: 15vw;
	}
`;

export default Number;