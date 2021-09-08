import React from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

export default function Menu() {
	return (
		<Content>
			<Link to="/habits">
				<p>Hábitos</p>
			</Link>
			<div>
				<CircularProgressbar 
					background
					backgroundPadding={6}
					value={75}
					text={"Hoje"}
					styles={buildStyles({
						pathColor: "#fff",
						textColor: "#fff",
						trailColor: "#52B6FF",
						backgroundColor: "#52B6FF",
					})} />
			</div>
			<p>Histórico</p>
		</Content>
	);
}

const Content = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #52B6FF;
    background-color: #FFF;
    font-size: 18px;
    line-height: 22px;

    p:first-child {
        margin-right: 35px;
    }

    p:last-child {
        margin-left: 35px;
    }

    div {
        position: absolute;
        bottom: 20px;
        left: calc((100vw / 2) - 45.5px);
        width: 91px;
        height: 91px;
        border-radius: 50%;
        background-color: #52B6FF;
    }
`;