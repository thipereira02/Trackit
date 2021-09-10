/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Loader from "react-loader-spinner";

import UserContext from "../contexts/UserContext";

export default function NewHabit({box, setBox, userHabits}) {
	const { user } = useContext(UserContext);
	const [name, setName] = useState("");
	const [days, setDays] = useState([]);
	const [enabled, setEnabled] = useState(true);
	const weekdays = ["D","S","T","Q","Q","S","S"];
	const localUser = JSON.parse(localStorage.getItem("user"));
    
	function selectDay(i) {
		(days.includes(i)) ? 
			setDays(days.filter(s => s !== i))
			:
			setDays([...days, i]);
	}
    
	function createNewHabit(e) {
		e.preventDefault();

		setEnabled(false);

		const body = {name, days};
		const config = { headers: { Authorization: `Bearer ${user.token || localUser}` } };

		const request = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);
		request.then(() => {
			userHabits();
			setName("");
			setDays([]);
			setEnabled(true);
			setBox(!box);
		});
		request.catch(() => {
			setName("");
			setDays([]);
			setEnabled(true);
			alert("Ocorreu um erro. Tente novamente.");
		});
	}

	return (
		<Box>
			<form onSubmit={createNewHabit}>
				<input placeholder="nome do hábito" maxLength="16" onChange={(e) => setName(e.target.value)} value={name} required/>
				<Days>
					{weekdays.map((w,i) => (
						<Day key={i} selected={days.includes(i)} onClick={() => selectDay(i)} disabled={enabled===true ? "" : "disabled"} >
							{w}
						</Day>
					))}
				</Days>
				<Buttons>
					<p onClick={() => setBox(!box)}>
                        Cancelar
					</p>
					<button type="submit" disabled={enabled ? "" : "disabled"} >
						{enabled===true ? "Salvar" : <Loader type="ThreeDots" color="#FFF" height={35} width={35} />}
					</button>
				</Buttons>
			</form>
		</Box>
	);
}

const Box = styled.div`
    width: 100%;
    height: 180px;
    background: #FFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    margin-bottom: 29px;

    input {
        width: 303px;
        height: 45px;
        background: #FFFFFF;
        padding-left: 11px;
        border: 1px solid #D5D5D5;
        font-size: 20px;
        border-radius: 5px;
        margin-bottom: 8px;

        ::placeholder {
        color: #DBDBDB;  
        }

        :focus {
            outline: 0;
            color: #666666;
        }
    }
`;

const Days = styled.div`
    display: flex;
    margin-bottom: 29px;
`;

const Day= styled.div`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: #FFFFFF;
    border: 1px solid ${props => (props.selected ? "#CFCFCF" : "#D4D4D4")};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => (props.selected ? "#FFF" : "#DBDBDB")};
    background-color: ${props => (props.selected ? "#CFCFCF" : "#FFF")};
    font-size: 20px;
`;

const Buttons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    p {
        font-size: 15.976px;
        line-height: 20px;
        color: #52B6FF;
        margin-right: 23px;
    }

    button {
        width: 84px;
        height: 35px;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
        font-size: 16px;
        line-height: 20px;
        color: #FFFFFF;
    }
`;