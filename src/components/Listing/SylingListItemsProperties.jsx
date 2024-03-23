import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { BiBed } from "react-icons/bi";
import {
	FaBath,
	FaLocationDot,
	FaLocationPin,
	FaSignsPost,
	FaTruckMonster,
} from "react-icons/fa6";

import Li from "../../ui/LI";
import P from "../../ui/P";
import FormatNumber from "../Helpers/FormatNumber";

const ItemInfos = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 10px;
`;

const HouseInfosol = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 20px;
`;

export default function SylingListItemsProperties({
	property,
}) {
	const { i18n } = useTranslation();
	if (!property) return;
	const { formatedNumber } = FormatNumber(property?.price);

	return (
		<ItemInfos>
			<P>Price: {formatedNumber} €</P>

			<HouseInfosol>
				<Li>
					<BiBed />
					{property?.bed}
				</Li>
				<Li>
					<FaTruckMonster />
					{property?.date}
				</Li>
				<Li>
					<FaLocationPin />
					{i18n.language === "en-US" || i18n.language === "en"
						? property?.location
						: property?.GreekLocation}
				</Li>
				<Li>
					<FaBath />
					{property?.baths}
				</Li>
			</HouseInfosol>

			<HouseInfosol>
				<Li>
					<FaLocationDot />
					Address
				</Li>
				<Li>
					<FaSignsPost />
					TK
				</Li>
			</HouseInfosol>
		</ItemInfos>
	);
}
