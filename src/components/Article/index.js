import React from "react";
import { ArticleContainer, Title, Author, Favorite } from "./styled";

export default class Article extends React.Component {
	handleClick = () => {
		const { article } = this.props;
		this.props.onClick(article);
	};

	render() {
		const { article, index, filterBy } = this.props;
		return (
			<div key={index}>
				<ArticleContainer onClick={() => this.handleClick(article, index)}>
					{article.title.includes(filterBy) && <Favorite />}
					<Title>{article.title}</Title>
					{article.author && <Author> By {article.author}</Author>}
				</ArticleContainer>
			</div>
		);
	}
}
