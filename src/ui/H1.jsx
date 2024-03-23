import styled, { css } from "styled-components";

const H1 = styled.h1`
	${(props) =>
		props.type === "regular" &&
		css`
			font-size: 90px;
			@media (max-width: 1200px) {
				font-size: 34px;
				width: 100%;
			}
		`}

	${(props) =>
		props.type === "caption" &&
		css`
			font-size: 40px;
			color: black;
			@media (max-width: 1200px) {
				font-size: 26px;
			}
		`}
${(props) =>
		props.type === "footer" &&
		css`
			font-size: 30px;
			color: white;
			@media (max-width: 1200px) {
				font-size: 26px;
			}
		`}

${(props) =>
		props.type === "home" &&
		css`
			font-size: 60px;
			text-align: center;

			@media (max-width: 1300px) {
				font-size: 25px;
			}
		`}

${(props) => props.type === "aboutus" && css``}


${(props) =>
		props.type === "contact" &&
		css`
			z-index: 5;
			color: white;
			font-size: 80px;
			@media (max-width: 1200px) {
				font-size: 50px;
			}
		`}
${(props) =>
		props.type === "regions" &&
		css`
			color: #464646;
			margin-top: 10px;
			width: 100%;
			text-align: center;
		`}

${(props) =>
		props.type === "property" &&
		css`
			width: 100%;
			height: 80px;
			color: black;
			display: flex;
			justify-content: center;
			@media (max-width: 600px) {
				height: 150px;
			}
		`}

${(props) =>
		props.type === "contactModal" &&
		css`
			font-size: 35px;
		`}
`;
H1.defaultProps = {
	type: "regular",
};

export default H1;
