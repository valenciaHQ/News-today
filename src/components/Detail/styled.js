import styled from "styled-components";
import { Title } from "./../Article/styled";

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	color: white !important;
	background-color: black;
`;

export const Content = styled.div`
	width: 500px;
	height: 700px;
`;

export const DetailTitle = styled(Title)`
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	font-size: 26px;
	padding: 20px 0 10px 0;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid white;
`;

export const DetailContent = styled.div`
	@import url("https://fonts.googleapis.com/css?family=Laila&display=swap");
	font-family: "Laila", sans-serif;
	overflow-wrap: break-word;
	padding: 20px;
`;

export const Image = styled.img`
	width: 100%;
	height: 50%;
	max-width: 100%;
	max-height: 100%;
`;

export const ActionsContainer = styled.div`
	margin-top: 25px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

export const StyledLink = styled.a`
	@import url("https://fonts.googleapis.com/css?family=Laila&display=swap");
	font-family: "Laila", sans-serif;
	padding-left: 10px;
	color: white;
	margin: 5px 0 5px 0;
	cursor: pointer;
	text-decoration: underline;
	text-decoration-color: blueviolet;
`;
