import CarouselItem from "./CarouselItem";
import styled from "styled-components";

import { useModalContext } from "../context/ModalContext";
import ButtonCarousel from "./ButtonCarousel";
import { motion } from "framer-motion";
import useGetImages from "../Property/useGetImages";

const Content = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 10px;
	overflow: hidden;
`;
const ThumbNails = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 200px;
	display: flex;
	gap: 2px;

	@media (max-width: 800px) {
		display: none;
	}
`;
const Img = styled.img`
	width: 200px;
	height: 140px;
	background-color: black;
	filter: blur(0px);

	${({ active }) =>
		active &&
		`
 
border:2px solid black;
filter:blur(1px)

`}
`;
const StyledCarouserlArrows = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export default function Carousel() {
	const { setIndexArrow, indexArrow, setLen, width } =
		useModalContext();
	const { data, isLoading } = useGetImages();

	if (!data) return;

	return (
		<>
			{!isLoading && (
				<Content>
					<StyledCarouserlArrows>
						<ButtonCarousel Images={data} />

						<CarouselItem
							setLen={setLen}
							images={data}
							indexArrow={indexArrow}
						/>
					</StyledCarouserlArrows>

					<ThumbNails>
						{data?.map((image, i) => (
							<Img
								onClick={() => setIndexArrow(i)}
								active={indexArrow === i}
								src={`${image.image}`}
								alt={image.label}
								key={image.id}
							/>
						))}
					</ThumbNails>
				</Content>
			)}
		</>
	);
}
