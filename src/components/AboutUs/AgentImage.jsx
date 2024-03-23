import styled from "styled-components";

import { motion } from "framer-motion";

const Img = styled(motion.img)`
	border: 1px solid transparent;
	border-radius: 50px;
	flex-basis: 300px;
	height: 800px;
	padding: 20px;
	width: 500px;
`;

export default function AgentImage() {
	return (
		<Img
			initial={{ opacity: 0, x: -200 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ duration: 2, delay: 1 }}
			src="./aboutus.jpg"
			alt="aboutus"
		/>
	);
}
