import styled, { css } from "styled-components";

const Form = styled.form`
	${(props) =>
		props.kind === "formContact" &&
		css`
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 30px;
			padding: 29px;
			color: #464646;
			font-size: 18px;
		`}

	${(props) =>
		props.kind === "modal" &&
		css`
			width: 100%;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
			gap: 30px;
			padding: 29px;
			color: white;
			font-size: 23px;
			filter: brightness(100%);
		`}
`;
Form.defaultProps = {
	kind: "formContact",
};

export default Form;
