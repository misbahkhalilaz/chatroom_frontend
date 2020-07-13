import React from "react";
import { InputGroup, Form, Button } from "react-bootstrap";

export default function MessageForm({ socket }) {
	return (
		<Form>
			<InputGroup>
				<Form.Control id="msg" placeholder="Message" />
				<InputGroup.Append>
					<Button
						onClick={() =>
							socket.emit("msg", document.getElementById("msg").value)
						}
					>
						Send
					</Button>
				</InputGroup.Append>
			</InputGroup>
		</Form>
	);
}
