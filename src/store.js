import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";

const store = createStore(rootReducer, compose(applyMiddleware(thunk)));

export default store;
