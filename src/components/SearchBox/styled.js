import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: right;
	height: 50px;
	width: 45%;
	align-items: baseline;
	justify-content: space-between;
	& > input,
	button {
		@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
		font-family: "Merriweather", serif;
		font-size: 0.8em;
	}
`;

export const StyledInput = styled.input`
	padding: 0 0 0 10px;
	height: 30px;
	border: 0;
	border-bottom: 2px solid #8fb299;
`;

export const StyledButton = styled.button`
	height: 40px;
	width: 100px;
	border: 2px solid #8fb299;
	background-color: transparent;
	border-radius: 15px;
	font-weight: bold;
`;

export const Info = styled.div`
	margin-bottom: 20px;
	@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
	font-family: "Merriweather", serif;
	font-size: 1em;
`;
