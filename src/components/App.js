import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import PercentageContext from "../contexts/PercentageContext";
import GlobalStyle from "../layouts/GlobalStyle";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Today from "../pages/Today";
import Habits from "../pages/Habits";
import Historic from "../pages/Historic";

export default function App() {
	const [user, setUser] = useState("");
	const [percentage, setPercentage] = useState(0);

	console.log(percentage);

	return (
		<>
			<UserContext.Provider value={{user, setUser}}>
				<PercentageContext.Provider value={{percentage, setPercentage}}>
					<BrowserRouter>
						<GlobalStyle />
						<Switch>
							<Route path="/" exact>
								<Login />
							</Route>
							<Route path="/signup" exact>
								<SignUp />
							</Route>
							<Route path="/today" exact>
								<Today />
							</Route>
							<Route path="/habits" exact>
								<Habits />
							</Route>
							<Route path="/historic" exact>
								<Historic />
							</Route>
						</Switch>
					</BrowserRouter>
				</PercentageContext.Provider>
			</UserContext.Provider>
		</>
	);
}