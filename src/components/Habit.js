import React from "react";
import styled from "styled-components";
import { AiFillCheckSquare } from "react-icons/ai";

export default function Habit() {
	return (
		<>
			<Content>
				<div>
					<h1>Ler 1 capítulo de livro</h1>
					<p>Sequência atual: 3 dias</p>
					<p>Seu recorde: 3 dias</p>
				</div>
				<Check />
			</Content>
			<Content>
				<div>
					<h1>Ler 1 capítulo de livro</h1>
					<p>Sequência atual: 3 dias</p>
					<p>Seu recorde: 3 dias</p>
				</div>
				<Check />
			</Content>
			<Content>
				<div>
					<h1>Ler 1 capítulo de livro</h1>
					<p>Sequência atual: 3 dias</p>
					<p>Seu recorde: 3 dias</p>
				</div>
				<Check />
			</Content>
		</>
	);
}

const Content = styled.div`
    margin: 0 auto;
    height: 94px;
    background: #FFFFFF;
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
        color: #666666;
        margin-bottom: 3px;
    }

    p {
        font-size: 13px;
        color: #666666;
        margin-bottom: 2px;
    }
`;

const Check = styled(AiFillCheckSquare)`
  font-size: 89px;
  color: #8FC549;
`;