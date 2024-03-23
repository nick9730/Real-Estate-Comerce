import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

import { useModalContext } from "../../context/ModalContext";
import { motion } from "framer-motion";

import MobileNavigation from "./MobileNavigation";
import Button from "../../../ui/Button";

const Overlay = styled.div`
	position: absolute;
	z-index: 999;
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-end;
	overflow: hidden;
	color: black;
`;
const Modal = styled(motion.div)`
	width: 70%;
	height: 100%;
	background-color: white;
	display: flex;
	flex-direction: column;
	position: fixed;
	justify-content: flex-start;
	align-items: center;
	overflow: hidden;
	@media (min-width: 1201px) {
		display: none;
	}
`;

export default function MobileNavbar() {
	const { ModalRef, setShowModal } = useModalContext();

	const Close = () => {
		setShowModal(false);
		document.body.style.overflowY = "unset";
	};

	return (
		<Overlay>
			<Modal
				initial={{ x: 300 }}
				animate={{ x: 0 }}
				transition={{ duration: 0.5 }}
				ref={ModalRef}
			>
				<Button kind="MobileClose" onClick={Close}>
					<FaTimes size="30px" color="black" />
				</Button>

				<MobileNavigation />
			</Modal>
		</Overlay>
	);
}
