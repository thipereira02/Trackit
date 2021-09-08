import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import axios from "axios";

import logo from "../components/assets/logo.png";
import { Logo, Body, Input, Button } from "../layouts/Login_SignUp";

export default function SignUp() {
	const history = useHistory();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [image, setImage] = useState("");
	const [button, setButton] = useState(true);

	function signUp(e){
		e.preventDefault();

		setButton(false);

		const body = {
			email,
			name,
			image,
			password
		};
		const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", body);
		request.then(() => history.push("/"));
		request.catch(() =>{
			alert("Erro no preenchimento. Tente novamente.");
			setButton(true);
		});
	}

	return (
		<>
			<Logo>
				<img src={logo} alt="TrackIt"/>
			</Logo>
			<Body>
				<form onSubmit={signUp}>
					<Input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
					<Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
					<Input type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} required/>
					<Input type="url" placeholder="foto" value={image} onChange={e => setImage(e.target.value)} required/>
					<Button type="submit" disabled={button===true ? "" : "disabled"}>
						{button===true ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={50} width={50} />}
					</Button>
				</form>
				<Link to="/">
					<p>Já tem uma conta? Faça login!</p>
				</Link>
			</Body>
		</>
	);
}