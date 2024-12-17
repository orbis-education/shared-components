import React from "react";
import { createRoot } from "react-dom/client";
import { FormInput } from "../lib";

const root = createRoot(document.getElementById("root"));

const App = () => (
	<div>
		<FormInput inputType="text" placeholderText="hello" />
	</div>
)

root.render(<App />);

