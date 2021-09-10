/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";
import axios from "axios";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({ habit, habitsOfTheDay }){
	const { user } = useContext(UserContext);
	const [color, setColor] = useState(false);

	function checkOrUncheck(habit){
		let url = "";
		const body = {};
		const config = { headers: { Authorization: `Bearer ${user.token}` } };

		if (habit.done) url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`;
		else url = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`;

		const request = axios.post(url, body, config);
		request.then(() => {
			habitsOfTheDay();
			setColor(true);
		});
		request.catch(() => alert("Ocorreu um erro na marcação do hábito. Tente novamente."));
	}


	return (
		<> 
			<Content>
				<div>
					<h1>{habit.name}</h1>
					<p>Sequência atual: <Sequence color={habit.done && color}>{habit.currentSequence} {habit.currentSequence===1 ? "dia" : "dias"}</Sequence></p>
					<p>Seu recorde: <Sequence color={habit.highestSequence>0 && habit.highestSequence===habit.currentSequence}>{habit.highestSequence} {habit.highestSequence===1 ? "dia" : "dias"}</Sequence></p>
				</div>
				<Check color={habit.done} onClick={() => checkOrUncheck(habit)}/>
			</Content>
		</>
	);
}

const Content = styled.div`
    margin: 0 auto;
    height: 94px;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    div {
        width: max-content;
    }

    h1 {
        font-size: 20px;
        color: #666;
        margin-bottom: 3px;
    }

    p {
        font-size: 13px;
        color: #666;
        margin-bottom: 2px;
    }
`;

const Check = styled(AiFillCheckSquare)`
  font-size: 89px;
  color: ${props => (!props.color) ? "#EBEBEB" : "#8FC549"};
`;

const Sequence = styled.span`
    color: ${props => (!props.color) ? "#666" : "#8FC549"};
`;