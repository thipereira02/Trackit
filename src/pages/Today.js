import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";

import Header from "../components/common/Header";
import Menu from "../components/common/Menu";
import TodayHabit from "../components/TodayHabit";

import UserContext from "../contexts/UserContext";
import PercentageContext from "../contexts/PercentageContext";

export default function Today() {
	const { user } = useContext(UserContext);
	const { percentage, setPercentage } = useContext(PercentageContext);
	const [habits, setHabits] = useState([]);
	const localUser = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		habitsOfTheDay();
	},[]);
	
	function habitsOfTheDay(){
		const config = { headers: { Authorization: `Bearer ${user.token || localUser}` } };

		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today", config);
		request.then(res => {
			setHabits(res.data);
			value(res.data);
		});
		request.catch(() => alert("Ocorreu um erro na obtenção dos seus hábitos do dia. Tente novamente mais tarde."));
	}

	function value(data){
		const done = data.filter(d => d.done===true);
		setPercentage((done.length/data.length)*100);
	}

	return (
		<>
			<Header />
			<Content>
				<h1>{dayjs().locale("pt-br").format("dddd, DD/MM")}</h1>
				{habits.find(h => h.done!==false) ? 
					<h2>{percentage%1===0 ? percentage.toFixed(0) : percentage.toFixed(2)}% dos hábitos concluídos</h2>
					:
					<h2>Nenhum hábito concluído ainda</h2>
				}
				{habits.map(h => (
					<TodayHabit key={h.id} habit={h} habitsOfTheDay={habitsOfTheDay}/>
				))}
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