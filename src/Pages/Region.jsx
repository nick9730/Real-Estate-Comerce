import styled from "styled-components";
import { useGetOneRegion } from "../components/Region/useGetOneRegion";
import ImageContentRegion from "../components/Region/ImageContentRegion";
import CaptionTextRegion from "../components/Region/CaptionTextRegion";
import CarouselRegion from "../components/Region/CarouselRegion";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 10px;
`;

const Wrapper = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 19px;
	color: black;

	@media (max-width: 1300px) {
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		padding: 0px;
		gap: 0px;
		height: 100%;
	}
`;

export default function Region() {
	const { oneRegion, isLoading } = useGetOneRegion();

	if (isLoading) return <div>dsaf</div>;

	return (
		<Content>
			<ImageContentRegion region={oneRegion} />
			<Wrapper>
				<CaptionTextRegion region={oneRegion} />
				<CarouselRegion />
			</Wrapper>
		</Content>
	);
}
