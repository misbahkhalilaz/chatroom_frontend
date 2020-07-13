import { createStore } from "redux";
import reducer from "./reducer";

const initState = {
	messages: ["hi redux"],
	room: null,
};

const store = createStore(reducer, initState);

export default store;
