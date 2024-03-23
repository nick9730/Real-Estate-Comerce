import ItemsRegion from "./ItemsRegion";
import styled from "styled-components";
import { useGetRegions } from "./useGetRegions";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const CitiesSort = styled(motion.div)`
	width: 100%;
	padding: 10px;

	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	white-space: 0px;
	background-color: white;
	align-items: center;
	justify-content: center;
`;
const CitiesUl = styled(motion.ul)`
	height: 400px;
	transition: 2s;
	display: flex;
	flex-basis: 900px;
	overflow: hidden;

	@media (max-width: 1890px) {
		flex-basis: 750px;
	}

	@media (max-width: 1500px) {
		flex-basis: 750px;
	}
	@media (max-width: 1024px) {
		flex-basis: 480px;
	}
	@media (max-width: 700px) {
		flex-basis: 650px;
	}
`;
export default function ListRegion() {
	const { data: cities, isLoading } = useGetRegions();

	return (
		<CitiesSort>
			{cities?.map((city, i) => (
				<CitiesUl
					initial={i % 2 === 1 ? { x: 200 } : { x: -200 }}
					whileInView={{ x: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					key={city?.id}
				>
					<ItemsRegion city={city} key={city?.id} />
				</CitiesUl>
			))}
		</CitiesSort>
	);
}
