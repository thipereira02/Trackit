/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { Link } from "react-router-dom";

import PercentageContext from "../../contexts/PercentageContext";

export default function Menu(){
	const { percentage } = useContext(PercentageContext);

	return(
		<Content>
			<div>
				<Link to="/habits">
					<Button>Hábitos</Button>
				</Link>
				<Link to="/today">
					<MainButton>
						<CircularProgressbar value={percentage} text="Hoje" backgroundPadding={5} styles={buildStyles({textSize: "22px", textColor: "#FFF", trailColor: "#52B6FF", pathColor: "#FFF"})}/>
					</MainButton>
				</Link>
				<Link to="/historic">
					<Button>Histórico</Button>
				</Link>
			</div>
		</Content>
	);
}

const Content = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    z-index: 1;
    justify-content: space-around;
    align-items: center;
    background: #FFF;

    div {
        width: 85%;
        display: flex;
        justify-content: space-between;
    }
`;

const Button = styled.a`
    border: none;
    font-size: 18px;
    color: #52B6FF;
`;

const MainButton = styled.button`
    width: 91px;
    height: 91px;
    border: none;
    border-radius: 50%;
    position: fixed;
    z-index: 2;
    right: calc(50% - (91px/2));
    bottom: 10px;
    background: #52B6FF;
`;