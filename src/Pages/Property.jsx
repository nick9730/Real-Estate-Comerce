import styled from "styled-components";
import Card from "../components/Property/Card";
import PhotoCarousel from "../components/Property/PhotoCarousel";

import FullScreen from "../components/Property/FullScreen";
import { useModalContext } from "../components/context/ModalContext";
import H1 from "../ui/H1";
import { useTranslation } from "react-i18next";

const Content = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	@media (max-width: 1200px) {
		gap: 20px;
	}
`;

const PositionCard = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #d8d8d815;

	@media (max-width: 1200px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 140vh;
	}
`;

export default function Property() {
	const { fullscreen } = useModalContext();
	const { t } = useTranslation(["property", "title"]);

	return (
		<>
			{fullscreen ? (
				<FullScreen />
			) : (
				<Content>
					<PhotoCarousel />
					<PositionCard>
						<H1 type="property">{t("title")}</H1>
						<Card />
					</PositionCard>
				</Content>
			)}
		</>
	);
}
