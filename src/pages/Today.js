import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import Header from "../components/common/Header";
import Menu from "../components/common/Menu";
import Habit from "../components/Habit";

import UserContext from "../contexts/UserContext";

export default function Today() {
	const { user } = useContext(UserContext);
	const config = { headers: { Authorization: `Bearer ${user.token}` } };
	const [habits, setHabits] = useState([]);

	useEffect(() => {
		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
		request.then(res => {
			setHabits(res.data);
		});
		request.catch(() => alert("Ocorreu um erro na obtenção dos seus hábitos. Tente novamente mais tarde."));
	},[]);

	return (
		<>
			<Header />
			<Content>
				<h1>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h1>
				<h2>Nenhum hábito concluído ainda</h2>
				{habits.map(h => {
					<Habit key={h.id} habit={h}/>;
				})}
			</Content>
			<Menu />
		</>
	);
}

const Content = styled.div`
	background: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;

	h1 {
		font-size: 23px;
		line-height: 29px;
		color: #126ba5;
  	}

	h2 {
		font-size: 18px;
		line-height: 22px;
		color: #BABABA;
		margin-bottom: 28px;
	}
`;