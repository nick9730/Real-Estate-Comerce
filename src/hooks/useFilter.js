import { useTranslation } from "react-i18next";
import { RealEState } from "../components/context/Context";

export default function useFilter(properties) {
	const {
		rooms,
		shower,
		query,
		area,
		number,
		setRooms,
		square,
		Area,
		beds,
		baths,
		place,
		price,
	} = RealEState();
	const { i18n } = useTranslation();

	let filtered = properties;
	let english;
	let greek;
	let filteredByType;
	let filterByArea;
	let filterByRooms;
	let filterByShower;
	let filterByPrice;

	if (query) {
		english = properties?.filter((property) =>
			property?.location
				?.toLocaleLowerCase()
				.replace(/\s/g, "")
				.includes(
					query?.replace(/\s/g, "").toLocaleLowerCase()
				)
		);
		greek = properties?.filter((property) =>
			property?.GreekLocation?.toLocaleLowerCase()
				?.replace(/\s/g, "")
				.includes(
					query?.replace(/\s/g, "").toLocaleLowerCase()
				)
		);
		if (english?.length === 0) {
			filtered = greek;
		} else {
			filtered = english;
		}
	}

	if (
		price === "30000" ||
		price === 600000 ||
		price > 700000 ||
		price > 800000 ||
		price === 900000
	) {
		filterByPrice = filtered;
		filtered = filterByPrice?.filter(
			(property) => property?.price > price
		);
	}

	if (
		place === "diamerisma" ||
		place === "monokatoikia" ||
		place === "agrotemaxio"
	) {
		filteredByType = filtered;
		filtered = filteredByType?.filter(
			(property) =>
				property?.type?.toLocaleLowerCase() ===
				place?.toLocaleLowerCase()
		);
	}

	if (
		Area === "0" ||
		Area === "100" ||
		Area === "150" ||
		Area === "250"
	) {
		filterByArea = filtered;
		filtered = filterByArea?.filter(
			(property) => property.area > area
		);
	}

	if (
		beds === "1" ||
		beds === "2" ||
		beds === "3" ||
		beds === "4" ||
		beds === "5"
	) {
		filterByRooms = filtered;
		filtered = filterByRooms?.filter(
			(property) => property.bed >= rooms
		);
	}

	if (
		baths === "1" ||
		baths === "2" ||
		baths === "3" ||
		baths === "4" ||
		baths === "5"
	) {
		filterByShower = filtered;
		filtered = filterByShower?.filter(
			(property) => property.baths >= shower
		);
	}

	return { filtered };
}
