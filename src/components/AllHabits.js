/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

import UserContext from "../contexts/UserContext";

export default function AllHabits({ habit, userHabits }) {
	const { user } = useContext(UserContext);
	const weekdays = ["D","S","T","Q","Q","S","S"];

	function deleteHabit(habit){
		if (confirm(`Deseja realmente apagar o hábito "${habit.name}"?`)){
			const config = { headers: { Authorization: `Bearer ${user.token}` } };

			const request = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config);
			request.then(() => userHabits());
			request.catch(() => alert("Ocorreu um erro na exclusão do hábito. Tente novamente."));
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
					<div key={i}>
						{w}
					</div>
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

    div {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        background: #FFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #DBDBDB;
        background-color: #FFF;
        font-size: 20px;
    }
`;
