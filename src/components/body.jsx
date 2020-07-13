import React from "react";
import { connect } from "react-redux";

function MessageBody({ messages }) {
	console.log(messages);
	return (
		<>
			{messages.map((msg) => (
				<h1 key={msg}>{msg}</h1>
			))}
		</>
	);
}

const mapStateToProps = (state, ownProps) => ({
	messages: state.messages,
});

export default connect(mapStateToProps)(MessageBody);
