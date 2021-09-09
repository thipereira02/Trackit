import React from "react";
import styled from "styled-components";

import Header from "../components/common/Header";
import Menu from "../components/common/Menu";

export default function Historic(){
	return (
		<>
			<Header />
			<Container>
				<h1>Histórico</h1>
				<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
			</Container>
			<Menu />
		</>        
	);
}

const Container = styled.div`
    background: #EBEBEB;
	min-height: 100vh;
	padding: 98px 20px 110px 20px;

    h1 {
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;
    }

    p {
        font-size: 18px;
        line-height: 22px;
        color: #666;
    }
`;