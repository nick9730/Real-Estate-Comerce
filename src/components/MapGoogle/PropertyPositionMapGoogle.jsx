import styled from "styled-components";
import {
	Map,
	AdvancedMarker,
	Pin,
} from "@vis.gl/react-google-maps";

const StyledMap = styled(Map)`
	width: 100%;
	height: 300px;
	filter: brightness(50%);
	border: 0;
	&:hover {
		filter: brightness(100%);
	}
`;

export default function PropertyPositionMapGoogle({
	property,
}) {
	console.log(property);
	if (!property) return;

	return (
		<StyledMap
			center={{
				lat: property[0]?.position_x,
				lng: property[0]?.position_y,
			}}
			defaultZoom={9}
			mapId={"ce5d7c7d5c3a8c26 "}
			fullscreenControlOptions={"bottom"}
		>
			<AdvancedMarker
				key={property[0]?.id}
				position={{
					lat: property[0]?.position_x,
					lng: property[0]?.position_y,
				}}
			>
				<Pin
					background={"grey"}
					borderColor={"green"}
					glyphColor={"purple"}
				/>
			</AdvancedMarker>
		</StyledMap>
	);
}
