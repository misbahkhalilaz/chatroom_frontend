import React from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function JoinForm({ socket }) {
	return (
		<Form>
			<InputGroup>
				<Form.Control id="room" placeholder="Room ID" />
				<InputGroup.Append>
					<Button
						onClick={() => {
							socket.emit("join", document.getElementById("room").value);
						}}
					>
						Join
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
}
