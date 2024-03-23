import ListProperties from "./ListProperties";

export default function FilterProperties({
	properties,
	filter,
}) {
	return (
		<ListProperties filter={filter} properties={properties} />
	);
}
