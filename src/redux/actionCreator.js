import { MSG_ADDED, ROOM_JOINED } from "./actionTypes";

export const msgAdded = (msg) => ({
	type: MSG_ADDED,
	payload: [msg],
});

export const roomJoined = (room) => ({
	type: ROOM_JOINED,
	payload: room,
});
