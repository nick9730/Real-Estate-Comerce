import React, { useState } from "react";
import styled from "styled-components";

const Content = styled.div`
	width: 370px;
	height: 30px;
	display: flex;

	background-color: #e7e7e7;
	border-radius: 19px;
	padding: 2.5px;
`;
const Buttons = styled.button`
	width: 80%;
	height: 100%;
	border: 0;
	background-color: transparent;
	border-radius: 10px;
	color: black;
	opacity: 0.5;
	font-size: 14px;
	transition: 1s;

	${({ active }) =>
		active &&
		`
    background-color: #FFFFFF;
    opacity: 1;
    font-weight : bold;
  `}
`;

export default function DoubleButtons({ types = [] }) {
	const [activeButton, setActiveButton] = useState(types[0]);

	return (
		<Content>
			{types.map((type, i) => (
				<Buttons
					key={i}
					onClick={() => setActiveButton(type)}
					active={activeButton === type}
				>
					{type}
				</Buttons>
			))}
		</Content>
	);
}
