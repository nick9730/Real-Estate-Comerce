import { useTranslation } from "react-i18next";

import H1 from "../../ui/H1";
import FilterProperties from "./FilterProperties";
import ImageTitle from "../../ui/ImageTitle";
import MapGoogle from "../MapGoogle/MapGoogle";

export default function ListingContent({
	FilterTheItems,
	sortedByItems,
}) {
	const { t } = useTranslation([
		"properties",
		"header,header1",
	]);

	return (
		<>
			<ImageTitle image={"image10.jpg"}>
				{t("header")}
			</ImageTitle>

			<H1 type={"caption"}>{t("header1")}</H1>

			<FilterProperties
				filter={FilterTheItems}
				properties={sortedByItems}
			/>
			<MapGoogle properties={sortedByItems} />
		</>
	);
}
