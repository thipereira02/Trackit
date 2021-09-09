import React from "react";
import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

export default function AllHabits() {
	const weekdays = ["D","S","T","Q","Q","S","S"];

	return (
		<Content>
			<Title>
				<p>asfasfasf</p>
				<BsTrash color="#666" />
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
    margin: 0 auto;
    height: 91px;
    background: #FFFFFF;
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
