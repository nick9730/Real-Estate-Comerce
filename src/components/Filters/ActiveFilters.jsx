import { RealEState } from "../context/Context";
import styled from "styled-components";

import { FaX } from "react-icons/fa6";

import useTakeValue from "../../hooks/useTakeValue";
import FormatNumber from "../Helpers/FormatNumber";
import StyledNavLink from "../../ui/StyledNavLink";

const Content = styled.ul`
	width: 100%;
	height: 100%;
	color: black;
	display: flex;
	flex-wrap: wrap;
	padding: 10px;
	gap: 5px;
`;

export default function ActiveFilters() {
	const {
		query,
		number,
		area,
		shower,
		rooms,
		SetQuery,
		setShower,
		setNumber,
		setRooms,
		setArea,
		HandleDelete,
		price,
		setPrice,
	} = RealEState();
	const { translation } = useTakeValue(number);
	const { formatedNumber } = FormatNumber(Number(price));

	return (
		<Content>
			{query ? (
				<StyledNavLink
					type="activeFilters"
					onClick={() => HandleDelete(SetQuery)}
				>
					{" "}
					{query} <FaX size={12} />{" "}
				</StyledNavLink>
			) : (
				""
			)}
			{number ? (
				<StyledNavLink
					type="activeFilters"
					onClick={() => HandleDelete(setNumber)}
				>
					{translation} <FaX size={12} />
				</StyledNavLink>
			) : (
				""
			)}
			{area > 0 ? (
				<StyledNavLink
					type="activeFilters"
					onClick={() => HandleDelete(setArea)}
				>
					Area: {area} <FaX size={12} />{" "}
				</StyledNavLink>
			) : (
				""
			)}
			{shower > 0 ? (
				<StyledNavLink
					type="activeFilters"
					onClick={() => HandleDelete(setShower)}
				>
					Baths: {shower} <FaX size={12} />
				</StyledNavLink>
			) : (
				""
			)}
			{rooms > 0 ? (
				<StyledNavLink
					type="activeFilters"
					onClick={() => HandleDelete(setRooms)}
				>
					Beds: {rooms} <FaX size={12} />
				</StyledNavLink>
			) : (
				""
			)}
			{price > 0 ? (
				<StyledNavLink
					type="activeFilters"
					onClick={() => HandleDelete(setPrice)}
				>
					Price: {formatedNumber} <FaX size={12} />
				</StyledNavLink>
			) : (
				""
			)}
		</Content>
	);
}
