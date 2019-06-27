import React from "react";
import { Container, StyledInput, StyledButton, Info } from "./styled";

export default class SearchBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { input: "", showInfo: false };
	}

	handleChange = e => {
		this.setState({ input: e.target.value });
	};

	handleOnClick = () => {
		this.props.searchKey(this.state.input);
	};

	render() {
		return (
			<>
				<Container
					onMouseOver={() => this.setState({ showInfo: true })}
					onMouseLeave={() => this.setState({ showInfo: false })}>
					<StyledInput name="search" onChange={e => this.handleChange(e)} />
					<StyledButton onClick={this.handleOnClick}>Search</StyledButton>
				</Container>
				{this.state.showInfo && (
					<Info>
						* Type any word included in a title and a checkmark will appear
					</Info>
				)}
			</>
		);
	}
}
