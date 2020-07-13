import { Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import JoinForm from "./components/joinForm";
import MessageBody from "./components/body";
import MessageForm from "./components/messageForm";
import { connect } from "react-redux";
import { msgAdded, roomJoined } from "./redux/actionCreator";

const socket = io.connect("localhost:4000");
function App({ msgAdded, roomJoined }) {
	let [message, setMessage] = useState(["hi"]);
	useEffect(() => {
		socket.on("message", (msg) => {
			msgAdded(msg);
			console.log(msg);
		});
		socket.on("joined", (room) => {
			roomJoined(room);
			console.log(room);
		});
	});

	return (
		<Card id="card">
			<Card.Header>
				<JoinForm socket={socket} />
			</Card.Header>
			<Card.Body
				style={{
					minHeight: window.innerHeight - 128,
					maxHeight: window.innerHeight - 128,
					overflow: "auto",
				}}
			>
				<MessageBody />
			</Card.Body>
			<Card.Footer>
				<MessageForm socket={socket} />
			</Card.Footer>
		</Card>
	);
}

export default connect(null, { msgAdded, roomJoined })(App);
