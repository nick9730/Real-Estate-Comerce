import styled from "styled-components";

const Content = styled.div`
	height: 50vh;
	color: #858585;
`;
export default function NotResultsFound({ map }) {
	return (
		<Content>
			{map === "map"
				? "We cannot find the properties on the map"
				: " Not Results Found"}
		</Content>
	);
}
