/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

import HabitsDays from "./HabitsDays";
import {deleteAnHabit} from "../services/requests";

import UserContext from "../contexts/UserContext";

export default function AllHabits({ habit, userHabits }) {
	const { user } = useContext(UserContext);
	const weekdays = ["D","S","T","Q","Q","S","S"];
	const localUser = JSON.parse(localStorage.getItem("user"));

	function deleteHabit(habit){
		if (confirm(`Deseja realmente apagar o hábito "${habit.name}"?`)){
			const config = { headers: { Authorization: `Bearer ${user.token || localUser}` } };
			const id = habit.id;
			const req = deleteAnHabit(id, config);

			req.then(() => userHabits());
			req.catch(() => alert("Ocorreu um erro na exclusão do hábito. Tente novamente."));
		}
	}

	return (
		<Content>
			<Title>
				<p>{habit.name}</p>
				<BsTrash color="#666" size="16px" onClick={() => deleteHabit(habit)}/>
			</Title>
			<Days>
				{weekdays.map((w,i) => (
					<HabitsDays key={i} day={w} markedDay={habit.days.includes(i)} />
				))}
			</Days>
		</Content>
	);
}

const Content = styled.div`
    margin: 0 auto 10px auto;
    height: 91px;
    background: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 10px 10px;

    p {
        font-size: 20px;
        line-height: 25px;
        color: #666;
    }
`;

const Title = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

const Days = styled.div`
    display: flex;
`;
