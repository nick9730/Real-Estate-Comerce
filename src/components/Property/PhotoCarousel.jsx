import React from "react";
import styled from "styled-components";

import Carousel from "../Carousel/Carousel";

const StyledCarousel = styled.div`
	width: 100%;
`;

export default function PhotoCarousel() {
	return (
		<StyledCarousel>
			<Carousel />
		</StyledCarousel>
	);
}
