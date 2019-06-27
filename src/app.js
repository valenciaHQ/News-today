import React from "react";
import Articles from "./components/Articles";
import AppTitle from "./components/AppTitle";
import SearchBox from "./components/SearchBox";
import styled from "styled-components";

const Container = styled.div`
	padding: 10px;
`;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { key: undefined };
	}

	render() {
		const { key } = this.state;
		return (
			<Container>
				<AppTitle />
				<SearchBox searchKey={key => this.setState({ key })} />
				<Articles filterBy={key} />
			</Container>
		);
	}
}
