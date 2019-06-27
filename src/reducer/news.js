import {
	FETCH_NEWS_REQUEST,
	FETCH_NEWS_SUCCESS,
	FETCH_NEWS_ERROR
} from "../constants/action-types";

const news = (state = {}, action) => {
	switch (action.type) {
		case FETCH_NEWS_REQUEST:
			return {
				...state,
				isLoading: true
			};
		case FETCH_NEWS_SUCCESS:
			return {
				...state,
				data: action.data,
				isLoading: false
			};
		case FETCH_NEWS_ERROR:
			return { err: action.err, isLoading: false };
		default:
			return state;
	}
};

export default news;
