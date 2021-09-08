import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../pages/Login";

import UserContext from "../contexts/UserContext";
import GlobalStyle from "./common/GlobalStyle";

export default function App() {
	const [user, setUser] = useState("");

	return (
		<>
			<UserContext.Provider value={{user, setUser}}>
				<BrowserRouter>
					<GlobalStyle />
					<Switch>
						<Route path="/" exact>
							<Login />
						</Route>
					</Switch>
				</BrowserRouter>
			</UserContext.Provider>
		</>
	);
}