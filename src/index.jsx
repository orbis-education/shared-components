import React from "react";
import { createRoot } from "react-dom/client";
import { FormInput, Header, AlertPopup } from "../lib";

const root = createRoot(document.getElementById("root"));

const App = () => (
	<div>
		<Header />
		<FormInput inputType="text" placeholderText="hello" />
		<FormInput inputType="textarea" placeholderText="hello" />
		<FormInput inputType="password" />
		<AlertPopup message="also hello" alertType="success" />
		<AlertPopup message="also hello, again" alertType="error" />
	</div>
)

root.render(<App />);

