import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Header from "../components/common/Header";
import Menu from "../components/common/Menu";
import NewHabit from "../components/NewHabit";
import AllHabits from "../components/AllHabits";
import UserContext from "../contexts/UserContext";

export default function Habits() {
	const { user } = useContext(UserContext);
	const [box, setBox] = useState(false);
	const [habits, setHabits] = useState([]);
	const localUser = JSON.parse(localStorage.getItem("user"));

	useEffect(() => {
		userHabits();
	},[]);
    
	function userHabits(){
		const config = { headers: { Authorization: `Bearer ${user.token || localUser}` } };

		const request = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
		request.then(res => setHabits(res.data));
		request.catch(() => alert("Ocorreu um erro na obtenção dos seus hábitos. Tente novamente mais tarde."));
	}

	return (
		<>
			<Header />
			<Container>
				<TitleLine>
					<h1>Meus hábitos</h1>
					<div onClick={() => setBox(!box)}>+</div>
				</TitleLine>
				{box === true ?
					<NewHabit box={box} setBox={setBox} userHabits={userHabits}/>
					:
					""
				}				
				{habits.length === 0 ? 
					<p>
                        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
					</p>
					:
					habits.map(h => (
						<AllHabits key={h.id} habit={h} userHabits={userHabits}/>
					))
					
				}
			</Container>
			<Menu />
		</>
	);
}

const Container = styled.div`
    background: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
    }
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