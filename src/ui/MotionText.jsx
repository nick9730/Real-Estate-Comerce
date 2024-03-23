import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function MotionText() {
	const x = "Your Search Our Priority";

	return (
		<AnimatePresence>
			{x.split("").map((letter, index) => (
				<motion.span
					key={index}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 10, delay: index * 0.1 }}
				>
					{letter}
				</motion.span>
			))}
		</AnimatePresence>
	);
}
