import React from "react";
import { useTranslation } from "react-i18next";
import Select from "../../ui/Select";

const Languages = [
	{
		value: "en",
		label: "EN",
	},
	{
		value: "gr",
		label: "GR",
	},
];

export default function ChangeLanguageSelect() {
	const { i18n } = useTranslation();

	const HandleChange = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<>
			<Select
				type={"translator"}
				valuee={i18n.language}
				handler={(e) => HandleChange(e.target.value)}
				options={Languages}
			/>
		</>
	);
}
