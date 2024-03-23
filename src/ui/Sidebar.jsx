import styled from "styled-components";
import Logo from "./Logo";
import DesktopVersion from "../components/NavBars/DesktopVersion";
import MobileButton from "../components/NavBars/Mobile/MobileButton";
import { useModalContext } from "../components/context/ModalContext";
import { useNavbarColor } from "../hooks/useNavbarColor";

const Navbar = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	position: fixed;

	background-color: #ffffff65;
	z-index: 99;
	transition: 1.1s;

	${({ height }) =>
		height &&
		`
      background-color: ${height};
      color:white;
    `}
`;

export default function Sidebar() {
	const { setNavColor, navColor } = useModalContext();

	useNavbarColor(setNavColor);

	return (
		<Navbar height={navColor}>
			<Logo />
			<MobileButton />
			<DesktopVersion />
		</Navbar>
	);
}
