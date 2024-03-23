import React from "react";
import styled from "styled-components";
import FormatNumber from "../Helpers/FormatNumber";
import { useTranslation } from "react-i18next";
import P from "../../ui/P";

const StyledLocation = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const StyledText = styled.p`
	letter-spacing: 2px;
	font-size: 50px;

	@media (max-width: 1200px) {
		font-size: 20px;
	}
`;

export default function Caption({ properties }) {
	const { formatedNumber } = FormatNumber(properties?.price);
	const { i18n } = useTranslation();

	return (
		<StyledLocation>
			<P type="caption">
				{i18n.language === "en-US" || i18n.language === "en"
					? properties?.location
					: properties?.GreekLocation}
			</P>

			<P type="caption">{formatedNumber} €</P>
		</StyledLocation>
	);
}
