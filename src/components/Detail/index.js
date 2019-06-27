import React from "react";
import {
	Container,
	Content,
	DetailTitle,
	DetailContent,
	ActionsContainer,
	StyledLink,
	Image
} from "./styled";

const Detail = props => {
	const { article } = props;
	return (
		<Container>
			<Content>
				<DetailTitle>{article.title}</DetailTitle>
				<DetailContent>{article.description}</DetailContent>
				<Image src={article.urlToImage} alt={article.title} />
				<ActionsContainer>
					<StyledLink onClick={() => props.onBack()}>Back</StyledLink>
					<StyledLink href={article.url} target="_blank">
						More info
					</StyledLink>
				</ActionsContainer>
			</Content>
		</Container>
	);
};

export default Detail;
