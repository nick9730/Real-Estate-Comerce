import React from "react";
import styled from "styled-components";
import PropertyItem from "./PropertyItem";
import { useGetProperties } from "../Listing/useGetProperties";
import H1 from "../../ui/H1";

const StyledDiv = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Available = styled.section`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 20px;
	padding: 0;
`;

const StyledUL = styled.ul`
	width: 45%;
	height: 500px;
	display: flex;
	flex-direction: row;

	@media (max-width: 1200px) {
		width: 100%;
		height: 300px;

		justify-content: center;
	}
`;

export default function Propertylist() {
	const { data: properties, isLoading } = useGetProperties();

	if (isLoading) return;
	return (
		<StyledDiv>
			<H1 type="caption">Featured Properties </H1>

			<Available>
				{properties?.map((property, index) =>
					index < 4 ? (
						<StyledUL key={property.id}>
							<PropertyItem
								key={property.id}
								properties={property}
							/>
						</StyledUL>
					) : (
						""
					)
				)}
			</Available>
		</StyledDiv>
	);
}
