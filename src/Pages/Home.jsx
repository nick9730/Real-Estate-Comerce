import styled from "styled-components";
import ListRegion from "../components/Region/ListRegion";
import Services from "../ui/Services";
import H1 from "../ui/H1";
import Header from "../components/Home/Header";
import PropertyListHomePage from "../components/Home/PropertyListHomePage";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Home = () => {
	const { t } = useTranslation(["common", "titleRegion"]);

	return (
		<Content>
			<Header />
			<PropertyListHomePage />
			<Services />
			<H1 type="regions">{t("titleRegion")}</H1>
			<ListRegion />
		</Content>
	);
};

export default Home;
