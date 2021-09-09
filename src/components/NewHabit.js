/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";

export default function NewHabit({active}) {
	
	const [name, setName] = useState("");
	const weekdays = ["D","S","T","Q","Q","S","S"];

	return (
		<Box status={active}>
			<form>
				<input placeholder="nome do hábito" onChange={(e) => setName(e.target.value)} value={name} required/>
				<Days>
					{weekdays.map((w,i) => (
						<div key={i} >
							{w}
						</div>
					))}
				</Days>
				<Buttons>
					<p>Cancelar</p>
					<button>Salvar</button>
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
    display: ${props => (props.status===false) ? "block" : "none"};
    overflow: ${props => (props.status===false) ? "visible" : "hidden"};

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

    div {
        width: 30px;
        height: 30px;
        margin-right: 4px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #DBDBDB;
        background-color: #FFFFFF;
        font-size: 20px;
    }
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
