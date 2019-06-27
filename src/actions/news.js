import axios from "axios";

import {
	FETCH_NEWS_REQUEST,
	FETCH_NEWS_SUCCESS,
	FETCH_NEWS_ERROR
} from "../constants/action-types";

export const fetchNews = () => async dispatch => {
	dispatch({ type: FETCH_NEWS_REQUEST });
	try {
		const response = await axios.get(
			"https://newsapi.org/v2/top-headlines?country=us&apiKey=95665d0609f8495ca653730c0d6c8aa1"
		);
		return dispatch({
			type: FETCH_NEWS_SUCCESS,
			data: response.data.articles
		});
	} catch (err) {
		return dispatch({ type: FETCH_NEWS_ERROR, err });
	}
};
