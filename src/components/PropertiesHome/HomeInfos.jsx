import styled from "styled-components";

import { RealEState } from "../context/Context";

import StyledNavLink from "../../ui/StyledNavLink";
import ListInfos from "./ListInfos";

const MoreInfos = styled.div`
	display: flex;
	width: 100%;
`;

export default function HomeInfos({ properties }) {
	const { setIndex } = RealEState();

	return (
		<MoreInfos>
			<ListInfos properties={properties} />
			<StyledNavLink
				type={"homeInfos"}
				onClick={() => setIndex(properties)}
				to={`/property/${properties.id}`}
			>
				Details
			</StyledNavLink>
		</MoreInfos>
	);
}
