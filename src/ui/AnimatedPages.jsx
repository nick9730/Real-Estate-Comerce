import React, { Suspense } from "react";

import {
	Routes,
	Navigate,
	Route,
	useLocation,
	useNavigation,
} from "react-router-dom";
import Applayout from "./Applayout";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import OurRegion from "../Pages/OurRegion";
import WhyUs from "../Pages/WhyUs";
import Properties from "../Pages/Properties";
import Property from "../Pages/Property";
import Region from "../Pages/Region";
import NotPageFound from "../Pages/NotPageFound";
import Modal from "../components/context/ModalContext";
import Context from "../components/context/Context";
import { AnimatePresence } from "framer-motion";
import "../i18n.js";

export default function AnimatedPages() {
	const location = useLocation();

	return (
		<Context>
			<Modal>
				<AnimatePresence initial={false} mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route element={<Applayout />}>
							<Route
								index
								element={<Navigate replace to="/home" />}
							></Route>
							<Route path="/contact" element={<Contact />}>
								{" "}
							</Route>
							<Route path="/home" element={<Home />}>
								{" "}
							</Route>
							<Route path="/regions" element={<OurRegion />}>
								{" "}
							</Route>
							<Route path="/whyus" element={<WhyUs />}>
								{" "}
							</Route>
							<Route
								path="/properties"
								element={<Properties />}
							>
								{" "}
							</Route>
							<Route
								path="/region/:name"
								element={<Region />}
							>
								{" "}
							</Route>
							<Route
								path="/property/:id"
								element={<Property />}
							>
								{" "}
							</Route>
							<Route path="*" element={<NotPageFound />}>
								{" "}
							</Route>
						</Route>
					</Routes>
				</AnimatePresence>
			</Modal>
		</Context>
	);
}
