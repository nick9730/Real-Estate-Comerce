import styled from "styled-components";
import { useModalContext } from "../context/ModalContext";



import CarouselItem from "../Carousel/CarouselItem";
import FullscreenButton from "./FullscreenButton";
import Button from "../../ui/Button";

const Content = styled.div`
	background-color: black;
	overflow-y: scroll;
	position: absolute;
	z-index: 999;
	height: 100vh;
	width: 100%;
	flex-direction: row;
	display: flex;

	justify-content: flex-start;
	align-items: center;
	gap: 20px;
	overflow: hidden;
	@media (max-width: 1200px) {
		justify-content: space-between;
		align-items: center;
		height: 100vh;
	}
`;

const Fullscreen = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1200px) {
		height: 70%;
		width: 100%;
		justify-content: center;
	}
`;

export default function FullScreen() {
	const {
		fullscreen,
		setFullSreen,
		indexArrow,
		filterValue,
	} = useModalContext();
	const { width } = useModalContext();

	if (fullscreen) {
		document.body.style.overflowY = "hidden";
	}
	console.log(width);

	return (
		<Content>
			<Fullscreen>
				{width > 1200 ? (
					<FullscreenButton />
				) : (
					<CarouselItem
						images={filterValue}
						indexArrow={indexArrow}
					/>
				)}

				<Button
					kind={"closeFullscreen"}
					onClick={() => (
						setFullSreen(false),
						(document.body.style.overflowY = "scroll")
					)}
				>
					&times;
				</Button>
			</Fullscreen>
		</Content>
	);
}
