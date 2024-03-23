import styled from "styled-components";

const TextArea = styled.textarea`
	width: 30%;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: 800;
	border-radius: 10px;

	background-color: white;
	padding: 0.8rem 1.2rem;

	&:hover,
	&:focus,
	&:visited {
		border-bottom: 1px solid black;
		outline: 0;
	}

	@media (max-width: 1200px) {
		width: 70%;
	}
`;

export default TextArea;
