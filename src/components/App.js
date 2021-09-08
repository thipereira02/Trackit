import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

import GlobalStyle from "./common/GlobalStyle";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact>
						<Login />
					</Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}