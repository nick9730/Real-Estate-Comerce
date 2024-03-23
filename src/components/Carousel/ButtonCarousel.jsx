import { useModalContext } from "../context/ModalContext";

import {
	IoIosArrowDropleftCircle,
	IoIosArrowDroprightCircle,
} from "react-icons/io";
import { MdOutlineFullscreen } from "react-icons/md";
import Button from "../../ui/Button";

export default function ButtonCarousel({ Images }) {
	const {
		setLen,
		setFullSreen,
		SetFilterValue,
		Next,
		Prev,
		width,
	} = useModalContext();

	if (!Images) return;

	return (
		<div>
			{width > 800 && (
				<>
					<Button
						kind="carouselleft"
						onClick={() => (Prev(), setLen(Images.length))}
					>
						<IoIosArrowDropleftCircle size={60} />
					</Button>

					<Button
						kind="carouselright"
						onClick={() => (setLen(Images.length), Next())}
					>
						<IoIosArrowDroprightCircle size={60} />
					</Button>
				</>
			)}

			<Button
				kind="fullscreen"
				onClick={() => (
					setFullSreen(true), SetFilterValue(Images)
				)}
			>
				<MdOutlineFullscreen />
			</Button>
		</div>
	);
}
