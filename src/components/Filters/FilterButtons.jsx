import ModalButtonFilter from "./ModalButtonFilter";
import DesktopFilters from "./DesktopFilters";
import { useModalContext } from "../context/ModalContext";

export default function FilterButtons({ filter }) {
	const { width } = useModalContext();

	return (
		<>
			{width < 900 ? (
				<ModalButtonFilter />
			) : (
				<DesktopFilters filter={filter} />
			)}
		</>
	);
}
