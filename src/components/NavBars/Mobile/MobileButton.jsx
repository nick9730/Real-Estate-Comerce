import styled from "styled-components";
import { useModalContext } from "../../context/ModalContext";

import { ImMenu } from "react-icons/im";
import Button from "../../../ui/Button";

const Navigation = styled.ul`
	display: none;
	@media (max-width: 1200px) {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		width: 16%;
		height: 90px;
		line-height: 20px;
	}
`;

export default function MobileButton() {
	const { setShowModal } = useModalContext();

	const Show = () => {
		setShowModal(true);
		document.body.style.overflow = "hidden";
	};

	return (
		<Navigation>
			<Button kind="open" onClick={Show}>
				<ImMenu size="30px" color="black" />
			</Button>
		</Navigation>
	);
}
