import React from "react";
import { connect } from "react-redux";

import { fetchNews } from "./../../actions/news";

import Loader from "react-loader-spinner";
import Article from "./../Article";
import Detail from "./../Detail";

import { ArticlesSection, LoaderContainer } from "./styled";

class ArticlesList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showDetail: false
		};
	}

	componentDidMount() {
		this.props.fetchNews();
	}

	showDetails = article => {
		this.setState({ showDetail: true, article });
	};

	render() {
		const { articles, isLoading, filterBy } = this.props;
		const { showDetail, article } = this.state;
		return isLoading ? (
			<LoaderContainer>
				<Loader type="Puff" color="#00BFFF" height="100" width="100" />
			</LoaderContainer>
		) : showDetail ? (
			<Detail
				article={article}
				onBack={() => {
					this.setState({ showDetail: false });
				}}
			/>
		) : (
			<ArticlesSection>
				{articles &&
					articles.map((article, index) => {
						return (
							<Article
								filterBy={filterBy}
								article={article}
								index={index}
								onClick={article => this.showDetails(article)}
							/>
						);
					})}
			</ArticlesSection>
		);
	}
}

const mapStateToProps = state => ({
	isLoading: state.news.isLoading,
	articles: state.news.data
});
const mapDispatchToProps = {
	fetchNews
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ArticlesList);
