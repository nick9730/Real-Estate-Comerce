import React from "react";
import styled from "styled-components";
import ClipLoader from "react-spinners/ClipLoader";

const Spinners = styled.div`
	height: 100%;
	width: 100%;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Spinner() {
	return (
		<Spinners>
			<ClipLoader size={50} color="black" margin={260} />
		</Spinners>
	);
}
