import React from "react";
import io from "socket.io-client";

const socket = io.connect("localhost:4000");

export default function App(props) {
	socket.on("message", (msg) => console.log(msg));
	socket.on("joined", (room) => console.log(room));

	return (
		<form>
			<input type="text" id="room"></input>
			<button
				onClick={(e) => {
					e.preventDefault();
					socket.emit("join", document.getElementById("room").value);
				}}
			>
				join class
			</button>
			<br />
			<button
				onClick={(e) => {
					e.preventDefault();
					socket.emit("msg", "hi");
				}}
			>
				say Hi..
			</button>
		</form>
	);
}
