import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";



import Text from "../components/AboutUs/Text";
import AgentImage from "../components/AboutUs/AgentImage";
import AgentInfos from "../components/AboutUs/AgentInfos";

import GetDirections from "../components/AboutUs/GetDirections";
import ImageTitle from "../ui/ImageTitle";
import { motion } from "framer-motion";
import { useModalContext } from "../components/context/ModalContext";

const Content = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 36px;
	transition: 1s;
	font-family: "Cormorant Garamond";
`;

const Infos = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	font-family: "Cormorant Garamond";

	@media (max-width: 800px) {
		flex-direction: column;
		width: 100%;
		background-color: #f8f8f881;
	}
`;

export default function WhyUs() {
	const { width } = useModalContext();
	const { t } = useTranslation(["aboutus", "title"]);

	return (
		<Content>
			<ImageTitle image={"aboutus2.jpg"}>
				{t("title")}
			</ImageTitle>

			<Infos>
				<AgentImage />
				{width < 800 ? <AgentInfos /> : ""}
				<Text />
			</Infos>

			<Infos>{width > 801 ? <AgentInfos /> : ""}</Infos>

			<GetDirections />
		</Content>
	);
}
