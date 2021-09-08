import React, { useState } from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

import logo from "../components/assets/logo.png";

export default function Login() {
	const [email, setEmail] = useState("");
	const [password,setPassword] = useState("");
	// eslint-disable-next-line no-unused-vars
	const [button, setButton] = useState(true);

	return (
		<>
			<Logo>
				<img src={logo} alt="TrackIt"/>
			</Logo>
			<Body>
				<form>
					<Input type="text" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} required/>
					<Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} required/>
					<Button type="submit" disabled={button===true ? "" : "disabled"}>
						{button===true ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={50} width={50} />}
					</Button>
				</form>
				<p>Não tem uma conta? Cadastre-se!</p>
			</Body>
		</> 
	);
}

const Logo = styled.div`
    width: 180px;
    height: 179px;
    margin: 15% auto 20px auto;
`;

const Body = styled.div`
    width: 80%;
    height: max-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
        font-size: 14px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
    }
`;

const Input = styled.input`
    height: 45px;
    width: 100%;
    margin-bottom: 6px;
    font-size: 20px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    padding-left: 11px;
    ::placeholder{
        color: #DBDBDB;  
    }
    :focus{
        outline: 0;
        color: #666666;
    }
`;

const Button = styled.button`
    background: #52B6FF;
    width: 100%;
    color: #FFF;
    height: 45px;
    font-size: 21px;
    border: none;
    border-radius: 5px;
    margin-bottom: 25px;
    :disabled{
        background-color: #52B6FF;
        opacity: 0.6;
        color: #FFF;
    }
`;