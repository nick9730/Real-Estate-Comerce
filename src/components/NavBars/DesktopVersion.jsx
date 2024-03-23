import styled from "styled-components";
import { useTranslation } from "react-i18next";

import { RealEState } from "../context/Context";
import ChangeLanguageSelect from "./ChangeLanguageSelect";
import NavbarItem from "./NavbarItem";

const Navigation = styled.ul`
	width: 80%;
	height: 10vh;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
	gap: 4px;
	color: black;
	z-index: 999;
	padding: 10px;

	@media (max-width: 1500px) {
		gap: 29px;
	}

	@media (max-width: 1200px) {
		display: none;
	}
`;

export default function DesktopVersion() {
	const { Reset } = RealEState();
	const { t } = useTranslation([
		"navbar",
		"home,region,contact,about,properties",
	]);

	return (
		<Navigation>
			<NavbarItem
				type={"Desktopnavbaritem"}
				address={"/home"}
				content={t("home")}
			/>
			<NavbarItem
				type={"Desktopnavbaritem"}
				address={"/regions"}
				content={t("region")}
			/>
			<NavbarItem
				type={"Desktopnavbaritem"}
				address={"/contact"}
				content={t("contact")}
			/>
			<NavbarItem
				type={"Desktopnavbaritem"}
				address={"/whyus"}
				content={t("about")}
			/>
			<NavbarItem
				type={"Desktopnavbaritem"}
				address={"/properties"}
				content={t("properties")}
				onClick={Reset}
			/>
			<ChangeLanguageSelect />
		</Navigation>
	);
}
