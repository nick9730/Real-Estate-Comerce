import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { RealEState } from "../context/Context";
import SylingListItemsProperties from "./SylingListItemsProperties";
import StyledNavLink from "../../ui/StyledNavLink";

const Image = styled.img`
	width: 700px;
	height: 200px;
	border-top-right-radius: 10px;
	border-top-left-radius: 10px;

	${(props) =>
		props.type === "google" &&
		css`
			width: 300px;
			height: 200px;
			border-top-right-radius: 10px;
			border-top-left-radius: 10px;
			scale: 0.8;
		`}
`;
const Item = styled(motion.div)`
	width: 100%;
`;

export default function ItemProperties({
	property,
	i,
	type,
}) {
	const { setIndex } = RealEState();

	return (
		<Item
			initial={{ x: -1900, opacity: 1 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.6, delay: 0.1 * i }}
		>
			<StyledNavLink
				type={type === "google" ? "google" : "properties"}
				onClick={() => setIndex(property)}
				to={`/property/${property?.id}`}
			>
				<Image type={type} src={property?.image} />

				<SylingListItemsProperties property={property} />
			</StyledNavLink>
		</Item>
	);
}
