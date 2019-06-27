import React from "react"
import styled from "styled-components"

const AppTitleContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	border-top: 3px solid black;
	border-bottom: 3px solid black;
	font-size: 30px;
	justify-content: center;
	margin: 10px 0 50px 0;
`;

const MainPart = styled.h1`
	margin-right: 15px;
	@import url("https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap");
	font-family: "Rubik Mono One", sans-serif;
`;

const SecondPart = styled.h1`
	@import url("https://fonts.googleapis.com/css?family=Merriweather&display=swap");
	font-family: "Merriweather", serif;
`;

const AppTitle = () => {
	return (
		<AppTitleContainer>
			<MainPart>NEWS</MainPart>
			<SecondPart>Today</SecondPart>
		</AppTitleContainer>
	);
};

export default AppTitle