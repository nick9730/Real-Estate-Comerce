import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { GreekSortBy, SortBy } from "../../data/options";
import Select from "../../ui/Select";
import { RealEState } from "../context/Context";

export default function SortButtons({ type, kind, style }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const { i18n } = useTranslation();
	const { sortBy } = RealEState();

	function handleFilter(e) {
		searchParams.set("sortby", e.target.value);
		setSearchParams(searchParams);
	}

	return (
		<Select
			style={style}
			type={kind === "modal" ? kind : "form"}
			valuee={sortBy}
			options={i18n.language === "en" ? SortBy : GreekSortBy}
			handler={handleFilter}
		/>
	);
}
