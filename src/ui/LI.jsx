import styled, { css } from "styled-components";

const Li = styled.li`
	${(props) =>
		props.type === "properties" &&
		css`
			height: 50px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			gap: 5px;
			font-size: 14px;
		`}

	${(props) =>
		props.type === "property" &&
		css`
			width: 50%;
			height: 70px;
			font-family: "Roboto";
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 20px;
			gap: 19px;
			font-weight: 900;
			svg {
				color: #dcbf7d;
			}

			@media (max-width: 700px) {
				font-size: 10px;
				gap: 5px;
			}
		`}

${(props) =>
		props.type === "propertyHome" &&
		css`
			width: 35%;
			height: 20px;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 5px;

			&:nth-child(2),
			&:nth-child(1) {
				margin-right: 5px;
				border-right: 1px solid black;
			}
		`}

${(props) =>
		props.type === "aboutus" &&
		css`
			width: 40%;

			@media (max-width: 800px) {
				width: 100%;
			}
		`}


${(props) =>
		props.type === "footer" &&
		css`
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			align-items: center;
			letter-spacing: 1px;

			@media (max-width: 1024px) {
				height: 90%;
			}
		`}

${(props) =>
		props.type === "ListNavbar" &&
		css`
			min-width: 14%;
			min-height: 50px;
			text-decoration: none;
			color: white;
			font-size: 2.5rem;
			transition: 1s;
			padding: 1px;
			display: flex;
			justify-content: center;
			align-items: flex-start;

			@media (max-width: 1500px) {
				width: 20%;
			}
		`}

${(props) =>
		props.type === "propertyItem" &&
		css`
			width: 100%;
			height: 100%;
			background-color: black;
			display: flex;
			flex-direction: row;
			border-radius: 4px;
		`}

${(props) =>
		props.type === "listinforegion" &&
		css`
			width: 100%;
			height: 80px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 15px;
			@media (max-width: 1200px) {
				width: 100%;
				gap: 5px;
			}
		`}
`;

Li.defaultProps = {
	type: "properties",
};

export default Li;
