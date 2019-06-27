import styled from "styled-components";
import { InputChecked } from "styled-icons/typicons/InputChecked";

export const ArticleContainer = styled.div`
	position: relative;
	width: 250px;
	margin: 15px 0 10px 10px;
	text-align: center;
	padding: 15px;
	border: 10px solid white;
`;

export const Title = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Viga&display=swap");
	font-family: "Viga", sans-serif;
	overflow-wrap: break-word;
`;

export const Author = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Fjalla+One&display=swap");
	font-family: "Fjalla One", sans-serif;
	margin-top: 15px;
	overflow-wrap: break-word;
`;

export const Favorite = styled(InputChecked)`
	float: right;
	color: lightblue;
	height: 20px;
	width: 20px;
`;
