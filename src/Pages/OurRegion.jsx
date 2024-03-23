import React from "react";
import styled from "styled-components";

import ListRegion from "../components/Region/ListRegion";

import ImageTitle from "../ui/ImageTitle";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
	width: 100%;
	height: 100%;
`;

export default function OurRegion() {
	const { t } = useTranslation(["region", "region"]);

	return (
		<Content>
			<ImageTitle image={"neighborhoods.jpg"}>
				{t("region")}
			</ImageTitle>

			<ListRegion />
		</Content>
	);
}
