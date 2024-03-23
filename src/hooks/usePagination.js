import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../components/Helpers/constants";
import { RealEState } from "../components/context/Context";

export default function usePagination(properties) {
	const { query, number, area, shower, rooms, price } =
		RealEState();

	let paginated = properties;
	let from;
	let to;

	const [searchParams] = useSearchParams();
	const page = !searchParams.get("page")
		? 1
		: Number(searchParams.get("page"));

	if (query || number || area || shower || rooms || price) {
		to = from = properties?.length;
	} else {
		to = from = PAGE_SIZE;
	}

	if (page) {
		const startof = (page - 1) * from;
		const to =
			startof + (query ? properties?.length : PAGE_SIZE);
		paginated = properties?.slice(startof, to);
	}

	return { paginated };
}
