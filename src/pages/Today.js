import React from "react";
import styled from "styled-components";

import Header from "../components/common/Header";
import Menu from "../components/common/Menu";
import Habit from "../components/Habit";

export default function Today() {
	return (
		<>
			<Header />
			<Content>
				<h1>Segunda, 17/05</h1>
				<h2>Nenhum hábito concluído ainda</h2>
				<Habit />
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