import styled from "styled-components";
import { motion } from "framer-motion";

import { useGetProperties } from "./useGetProperties";

import ItemProperties from "./ItemProperties";
import FilterButtons from "../Filters/FilterButtons";
import NotResultsFound from "../../ui/NotResultsFound";
import Spinner from "../../ui/Spinner";

const StyledSquareView = styled.div`
	width: 75%;
	height: 100%;
	display: flex;
	background-color: white;
	flex-direction: column;
	align-items: center;

	@media (max-width: 1200px) {
		width: 90%;
	}
`;

const AreaOfProperties = styled.div`
	width: 100%;
	height: 90%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
`;

const StyledUl = styled(motion.ul)`
	display: flex;
	flex-direction: column;
	background-color: white;
	padding: 20px;
`;
const StyledPositionButton = styled.div`
	width: 80%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
`;

export default function ListProperties({
	properties,
	filter,
}) {
	const { isLoading } = useGetProperties();

	return (
		<StyledSquareView>
			<StyledPositionButton>
				<FilterButtons filter={filter} />
			</StyledPositionButton>

			<AreaOfProperties>
				{isLoading ? (
					<Spinner />
				) : (
					<>
						{properties?.length === 0 ? (
							<NotResultsFound />
						) : (
							""
						)}

						{properties?.map((property, i) => (
							<StyledUl
								key={i}
								initial={{ x: -400 }}
								animate={{ x: 0 }}
							>
								<ItemProperties
									i={i}
									property={property}
									key={property.id}
								/>
							</StyledUl>
						))}
					</>
				)}
			</AreaOfProperties>
		</StyledSquareView>
	);
}
