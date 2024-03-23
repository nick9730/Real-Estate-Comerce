import styled from "styled-components";

import { motion } from "framer-motion";
import { useModalContext } from "../context/ModalContext";
import { useTranslation } from "react-i18next";

import P from "../../ui/P";
import Li from "../../ui/LI";
import SocialMediaIcons from "../Footer/SocialMediaIcons";

const Content = styled(motion.div)`
	width: 55%;
	height: 100%;
	display: flex;
	flex-direction: column;
	color: black;
	align-items: center;

	padding: 20px;

	background-color: #d3d3d339;

	font-size: 14px;
	@media (max-width: 1600px) {
		width: 80%;
		height: 25vh;
	}

	@media (max-width: 800px) {
		background-color: transparent;
		width: 100%;
		height: 35vh;
	}
`;
const Ul = styled.ul`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	gap: 10px;

	@media (max-width: 800px) {
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
`;

export default function AgentInfos() {
	const { width } = useModalContext();
	const { t } = useTranslation([
		"aboutus",
		"title,label,summary,agentname,address,visitus,get",
	]);
	const { t: common } = useTranslation([
		"common",
		"address,number",
	]);

	return (
		<Content
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 3 }}
			viewport={{ once: true }}
		>
			<P type={width < 1200 ? "agentname" : "whyus"}>
				{t("agentname")}
			</P>

			<Ul>
				<Li type="aboutus">
					<P type="label">{common("number")}</P>
					<P type="whyus">(805) 451-4442</P>
				</Li>
				<Li type="aboutus">
					<P type="label">Email</P>
					<P type="whyus">ouranoupolirealestate@gmail.com</P>
				</Li>
				<Li type="aboutus">
					<P type="label">{common("address")}</P>
					<P type="whyus">{t("address")}</P>
				</Li>
			</Ul>

			<SocialMediaIcons type={"aboutus"} />
		</Content>
	);
}
