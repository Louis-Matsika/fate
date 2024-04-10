// import { React, useState } from "react";
// import { collection, addDoc } from "firebase/firestore";
// import db from "../firebase-config";
export default function Newsletter() {
	// var today = new Date();
	// var date =
	// 	today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
	// var time =
	// 	today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
	// var dateTime = date + " " + time;

	// const [input, setInput] = useState("");
	// // const [message, setMessage] = useState("");
	// const inputHandler = (e) => {
	// 	setInput(e.target.value);
	// };
	// const submitHandler = (e) => {
	// 	e.preventDefault();
	// 	if (input) {
	// 		console.log(input);
	// 		// add input to firebase database
	// 		addDoc(collection(db, "emails"), {
	// 			email: input,
	// 			time: dateTime,
	// 			// time: firebase.firestore.FieldValue.serverTimestamp(),
	// 		});
	// 		// reset input field once submitted
	// 		document.getElementById("email-input").value = "";
	// 	}
	// };
	return (
		<section class="section--newsletter">
			<form id="newsletter-form">
				<label for="email-input" id="input-label" class="subheading">
					Sign up for our newsletter
				</label>

				<div id="input-container">
					<input
						type="email"
						id="email-input"
						placeholder="Enter email address"
					/>
					<button type="submit" id="submit-button">
						Sign up
					</button>
				</div>
			</form>
		</section>
	);
}
