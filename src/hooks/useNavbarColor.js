import { useEffect } from "react";

export const useNavbarColor = (handler) => {
	const setNav = () => {
		if (window.scrollY === 0) {
			handler("transparent");
		} else {
			handler("#00000083");
		}
	};

	useEffect(function () {
		window.addEventListener("scroll", setNav);
		return () => {
			window.addEventListener("scroll", setNav);
		};
	});
};
