import React from "react";
import NavbarItem from "../NavbarItem";
import { useTranslation } from "react-i18next";
import { RealEState } from "../../context/Context";
import { useModalContext } from "../../context/ModalContext";
import ChangeLanguageSelect from "../ChangeLanguageSelect";
import styled from "styled-components";

const Navigation = styled.ul`
	height: 100%;
	width: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 50px;
	padding: 100px;
`;

export default function MobileNavigation() {
	const { Reset } = RealEState();
	const { setShowModal } = useModalContext();
	const { t } = useTranslation([
		"navbar",
		"home,region,contact,about,properties",
	]);

	const Show = () => {
		setShowModal(false);
		document.body.style.overflowY = "unset";
	};

	const PropertiesClose = () => {
		Show();
		Reset();
	};

	return (
		<Navigation>
			<NavbarItem
				type="Mobilenavbaritem"
				address={"/home"}
				content={t("home")}
				onClick={Show}
			/>
			<NavbarItem
				type="Mobilenavbaritem"
				address={"/regions"}
				content={t("region")}
				onClick={Show}
			/>
			<NavbarItem
				type="Mobilenavbaritem"
				address={"/contact"}
				content={t("contact")}
				onClick={Show}
			/>
			<NavbarItem
				type="Mobilenavbaritem"
				address={"/whyus"}
				content={t("about")}
				onClick={Show}
			/>
			<NavbarItem
				type="Mobilenavbaritem"
				address={"/properties"}
				content={t("properties")}
				onClick={PropertiesClose}
			/>
			<ChangeLanguageSelect />
		</Navigation>
	);
}
