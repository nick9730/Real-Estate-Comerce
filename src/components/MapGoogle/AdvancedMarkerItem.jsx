import {
	AdvancedMarker,
	Pin,
} from "@vis.gl/react-google-maps";

export default function AdvancedMarkerItem({
	property,
	index,
	open,
	showIndex,
}) {
	return (
		<AdvancedMarker
			key={property.id}
			position={{
				lat: property.position_x,
				lng: property.position_y,
			}}
			onClick={() => (open(true), showIndex(index))}
		>
			<Pin
				background={"grey"}
				borderColor={"green"}
				glyphColor={"purple"}
			/>
		</AdvancedMarker>
	);
}
