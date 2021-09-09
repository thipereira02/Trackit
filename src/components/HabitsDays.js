/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";

export default function HabitsDays({ day }){
	return (
		<Day marked>
			{day}
		</Day>
	);
}

const Day = styled.div`
    width: 30px;
    height: 30px;
    margin-right: 4px;
    background: #FFF;
    border: 1px solid ${props => (props.selected ? "#CFCFCF" : "#D4D4D4")};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => (props.selected ? "#FFF" : "#DBDBDB")};
    background-color: ${props => (props.selected ? "#CFCFCF" : "#FFF")};
    font-size: 20px;
`;