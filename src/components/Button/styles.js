import styled from 'styled-components';

export const Container = styled.button`
	font-size: 20px;
	border: 1px solid lightgrey;
	border-radius: 5px;
	box-shadow: 0 0 5px grey;
	background-color: white;
	margin: 10px;
	@media screen and (max-width: 600px) {
		font-size: 6vw;
	}
`;
