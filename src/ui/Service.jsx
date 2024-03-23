import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import P from "./P";

const StyledService = styled(motion.div)`
	flex-basis: 300px;
	min-height: 390px;
	display: flex;
	flex-direction: column;
`;
const StyledServiceInfos = styled.span`
	min-width: 200px;
	min-height: 140px;
	display: flex;

	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const Icon = styled.div`
	min-height: 40px;
	min-width: 50px;
	display: flex;
	flex-direction: row;
	justify-content: center;
`;

export default function Service({
	caption,
	paragraph,
	icon,
	delay,
}) {
	return (
		<StyledService
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay: delay }}
			viewport={{ once: true }}
		>
			<StyledServiceInfos>
				<Icon>{icon}</Icon>
				<Icon>{caption}</Icon>
			</StyledServiceInfos>

			<P type="services">{paragraph}</P>
		</StyledService>
	);
}
