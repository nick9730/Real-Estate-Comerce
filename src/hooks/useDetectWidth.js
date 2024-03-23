import { useCallback, useEffect } from "react";

export function useDetectWidth(handler) {
	const DetectWidth = useCallback(
		(event) => {
			handler(window.innerWidth);
		},
		[handler, window.innerWidth]
	);

	useEffect(
		function () {
			window.addEventListener("resize", DetectWidth);
			return () => {
				window.removeEventListener("resize", DetectWidth);
			};
		},
		[DetectWidth]
	);
}
