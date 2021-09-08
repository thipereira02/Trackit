import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";

import logo from "../components/assets/logo.png";
import { Logo, Body, Input, Button } from "../layouts/Login_SignUp";
import UserContext from "../contexts/UserContext";

export default function Login() {
	const { setUser } = useContext(UserContext);
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password,setPassword] = useState("");
	const [button, setButton] = useState(true);

	function login(e){
		e.preventDefault();
		setButton(false);

		const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {email, password});
		request.then(res => {
			const newUserData = {id: res.data.id, name: res.data.name, token: res.data.token, image: res.data.image};
			setUser(newUserData);
			history.push("/today");
		});
		request.catch(() => {
			alert("Email ou senha incorretos");
			setButton(true);
		});
	}

	return (
		<>
			<Logo>
				<img src={logo} alt="TrackIt"/>
			</Logo>
			<Body>
				<form onSubmit={login}>
					<Input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
					<Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
					<Button type="submit" disabled={button===true ? "" : "disabled"}>
						{button===true ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={50} width={50} />}
					</Button>
				</form>
				<Link to="/signup">
					<p>Não tem uma conta? Cadastre-se!</p>
				</Link>
			</Body>
		</> 
	);
}