import React from "react";
import styled from "styled-components";

import Header from "../components/common/Header";
import Menu from "../components/common/Menu";
import NewHabit from "../components/NewHabit";

export default function Habits() {
	return (
		<>
			<Header />
			<Container>
				<TitleLine>
					<h1>Meus hábitos</h1>
					<div>+</div>
				</TitleLine>
				<NewHabit />
				<p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
				</p>
			</Container>
			<Menu />
		</>
	);
}

const Container = styled.div`
    background: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;
`;

const TitleLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-bottom: 25px;

    div {
        width: 40px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #FFF;
    }
`;