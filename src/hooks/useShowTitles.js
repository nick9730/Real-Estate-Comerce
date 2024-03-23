import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const useShowTitles = (location, name) => {
	let titles;
	const { t } = useTranslation([
		"navbar",
		"home,region,contact,about,properties,ammouliani,nearoda,ierissos,ouranoupoli",
	]);

	if (location.pathname === "/contact") {
		titles = t("contact");
	} else if (location.pathname === "/home") {
		titles = t("home");
	} else if (location.pathname === "/regions") {
		titles = t("region");
	} else if (location.pathname === "/whyus") {
		titles = t("about");
	} else if (location.pathname === "/properties") {
		titles = t("properties");
	} else if (location.pathname === `/region/${name}`) {
		titles = t(`${name}`);
	} else {
		titles = "";
	}

	return { titles };
};

export default useShowTitles;
