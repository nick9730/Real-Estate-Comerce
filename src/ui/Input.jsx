import styled, { css } from "styled-components";

const Input = styled.input`
	${(props) =>
		props.kind === "regular" &&
		css`
			width: 100%;
			margin-top: 20px;
			padding: 0px 0px 25px 10px;
			border: 0;
			border-bottom: 1px solid #e7e7e7;
			color: black;

			&:hover,
			&:focus,
			&:visited {
				border-bottom: 1px solid black;
				outline: 0;
			}
		`}

	${(props) =>
		props.kind === "modal" &&
		css`
			width: 200px;
			height: 29px;

			display: flex;
			justify-content: center;
			align-items: center;
			font-weight: 800;
			border-radius: 20px;
		`}

    ${(props) =>
		props.kind === "form" &&
		css`
			border: 2px solid #464646;
			border-radius: 50px;
			background-color: white;
			padding: 0.8rem 1.2rem;
			width: 30%;

			@media (max-width: 1200px) {
				width: 70%;
			}
		`}

    ${(props) =>
		props.kind === "modalContact" &&
		css`
			border: 0;
			border-bottom: 1px solid black;
			background-color: transparent;
			padding: 0.8rem 1.2rem;
			width: 90%;
			&:focus {
				outline: 0;
			}
			&::placeholder {
				color: white;
			}
			@media (max-width: 1200px) {
				width: 200px;
			}
		`}
`;

Input.defaultProps = {
	kind: "regular",
};
export default Input;
