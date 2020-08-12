import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { AuthProvider } from "./shared/AuthContext";

const app = (
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
	</BrowserRouter>
);

ReactDOM.render(app, document.getElementById("root"));

serviceWorker.unregister();
