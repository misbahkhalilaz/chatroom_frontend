import { MSG_ADDED, ROOM_JOINED } from "./actionTypes";

export default function reducer(state, action) {
	switch (action.type) {
		case MSG_ADDED:
			return Object.assign({}, state, {
				messages: [...state.messages, ...action.payload],
			});
		case ROOM_JOINED:
			return Object.assign({}, state, { room: action.payload });
		default:
			return state;
	}
}
