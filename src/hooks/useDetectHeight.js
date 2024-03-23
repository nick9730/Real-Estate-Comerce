import { useEffect, useState } from "react";

export function useDetectHeight(handler) {
	const [prevScrollpos, setPrevScrollpos] = useState(
		window.scrollY
	);

	useEffect(() => {
		const DetectHeight = () => {
			const current = window.scrollY;
			if (prevScrollpos > current) {
				handler(true);
			} else {
				handler(false);
			}
			setPrevScrollpos(current);
		};

		window.addEventListener("scroll", DetectHeight);
		return () => {
			window.removeEventListener("scroll", DetectHeight);
		};
	}, [prevScrollpos, setPrevScrollpos, handler]);
}
