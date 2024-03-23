import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled(NavLink)`
	min-width: 220px;
	min-height: 60px;
	display: flex;
	flex-wrap: wrap;
	overflow: visible;
	margin-top: 10px;
	margin-left: 20px;
	background-image: url("./lol.png");
	background-repeat: no-repeat;
`;

export default function Logo() {
	return <StyledLogo to={"/home"} />;
}
