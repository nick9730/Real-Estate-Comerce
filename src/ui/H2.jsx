import styled, { css } from "styled-components";

const H2 = styled.h2`
	${(props) =>
		props.type === "regular" &&
		css`
			width: 100%;
			margin-top: 20px;
			padding: 0px 0px 25px 10px;
			border: 0;
			border-bottom: 1px solid #e7e7e7;
			color: #00000088;

			&:hover,
			&:focus,
			&:visited {
				border-bottom: 1px solid black;
				outline: 0;
			}
		`}

	${(props) =>
		props.type === "home" &&
		css`
			text-align: center;
			@media (max-width: 1300px) {
				font-size: 15px;
			}
		`}

${(props) =>
		props.type === "contactModal" &&
		css`
			display: flex;
			justify-content: center;
			align-items: center;
		`}

${(props) =>
		props.type === "caption" &&
		css`
			text-align: center;
			font-size: 40px;
			@media (max-width: 1200px) {
				font-size: 30px;
			}
		`}
`;

H2.defaultProps = {
	type: "regular",
};
export default H2;
