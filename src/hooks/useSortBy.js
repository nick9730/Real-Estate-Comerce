import { useSearchParams } from "react-router-dom";

export default function useSortBy(properties) {
	let sortedByItems = properties;
	const [searchParams] = useSearchParams();

	const SortParams = searchParams.get("sortby");

	if (SortParams === "increasing")
		sortedByItems = properties?.sort((a, b) =>
			a.price < b.price ? 1 : -1
		);
	if (SortParams === "decreasing")
		sortedByItems = properties?.sort((a, b) =>
			a.price > b.price ? 1 : -1
		);
	if (SortParams === "default") sortedByItems = properties;

	return { sortedByItems };
}
