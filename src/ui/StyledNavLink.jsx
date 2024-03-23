import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledNavLink = styled(NavLink)`
	${(props) =>
		props.type === "getdirection" &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			border: 3px solid white;
			background-color: white;
			width: 200px;
			background-color: transparent;
			height: 50px;
			font-weight: 300;
			margin-top: 20px;
			font-family: "Cormorant Garamond";

			&:hover {
				background-color: white;
				color: wheat;
			}
		`}

	${(props) =>
		props.type === "activeFilters" &&
		css`
			flex-basis: 135px;
			height: 40px;
			border: 1px solid black;
			border-radius: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 2px;
			gap: 10px;
			font-size: small;
			font-weight: 900;

			&:focus {
				outline: 0;
			}
		`}


${(props) =>
		props.type === "box" &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			border: 3px solid white;
			width: 200px;
			height: 50px;
			font-weight: 300;
			margin-top: 20px;
			font-family: "Cormorant Garamond";
			margin: 2px;

			&:hover {
				background-color: white;
				color: wheat;
			}
		`}

${(props) =>
		props.type === "footer" &&
		css`
			min-width: 25%;
			display: flex;
			justify-content: center;
			transition: 1s;
			&:hover {
				color: wheat;
				text-decoration: underline;
			}

			@media (max-width: 1100px) {
				width: 340px;
			}
		`}

${(props) =>
		props.type === "headerHome" &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			border: 3px solid white;

			width: 200px;
			height: 50px;
			font-weight: 300;
			margin-top: 20px;
			font-family: "Cormorant Garamond";

			&:hover {
				background-color: white;
				color: wheat;
			}
		`}

${(props) =>
		props.type === "google" &&
		css`
			width: 300px;
			height: 350px;
			display: flex;
			flex-direction: column;
			color: black;
			gap: 10px;
			border-radius: 10px;
			border: 1px solid #d6d3d3;
			scale: 0.8;
		`}


${(props) =>
		props.type === "properties" &&
		css`
			width: 310px;
			height: 350px;
			display: flex;
			flex-direction: column;
			color: black;
			gap: 10px;
			border-radius: 10px;
			border: 1px solid #d6d3d3;
			box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
		`}

${(props) =>
		props.type === "Desktopnavbaritem" &&
		css`
			min-width: 200px;
			min-height: 5px;
			display: flex;
			justify-content: center;
			padding: 2px;
			&:hover,
			&:active,
			&.active:link,
			&.active:visited {
				color: #b98c39;
				font-size: 25px;
			}
		`}

${(props) =>
		props.type === "Mobilenavbaritem" &&
		css`
			min-width: 200px;
			min-height: 5px;
			display: flex;
			justify-content: center;
			padding: 2px;
			color: black;
			&:hover,
			&:active,
			&.active:link,
			&.active:visited {
				color: #b98c39;
				font-size: 25px;
				border-bottom: 1px solid silver;
			}
		`}
${(props) =>
		props.type === "homeInfos" &&
		css`
			display: flex;
			align-items: center;
			justify-content: center;
			color: white;
			border: 3px solid white;
			width: 200px;
			height: 50px;
			font-weight: 300;

			&:hover {
				background-color: white;
				color: wheat;
			}

			@media (max-width: 1200px) {
				width: 100px;
			}
		`}

${(props) =>
		props.type === "itemsRegion" &&
		css`
			width: 100%;
			height: 100%;
			${({ data }) =>
				data && ` background-image: url(${data});`}
			color: #ffffff;

			background-repeat: no-repeat;
			background-position-x: center;
			background-position-y: center;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 40px;
			transition: 0.5s;

			&:hover {
				filter: brightness(50%);
				flex-direction: column;
				justify-content: space-between;
				align-items: center;
			}
			@media (max-width: 1200px) {
				&:hover {
					flex-direction: row;
					justify-content: center;
				}
			}
		`}

${(props) =>
		props.type === "social" &&
		css`
			border: 1px solid wheat;
			border-radius: 50px;
			padding: 10px;
			color: wheat;
			display: flex;
			background-color: transparent;
			font-size: 30px;
			transition: 1s;
			&:hover {
				background-color: wheat;
				color: white;
			}
		`}
`;

StyledNavLink.defaultProps = {
	type: "home",
};

export default StyledNavLink;
