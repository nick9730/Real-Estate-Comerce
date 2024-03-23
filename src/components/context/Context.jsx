import React, {
	createContext,
	useContext,
	useMemo,
	useState,
} from "react";
import { useSearchParams } from "react-router-dom";
import { useGetRegions } from "../Region/useGetRegions";

const SiteOuranoypoli = createContext();

export default function Context({ children }) {
	const { data: regions } = useGetRegions();

	const [searchParams, setSearchParams] = useSearchParams();
	const baths = searchParams?.get("baths") || "";
	const beds = searchParams?.get("beds") || "";
	const Area = searchParams?.get("area") || "";
	const place = searchParams?.get("place") || "";
	const queryurl = searchParams.get("region") || "";
	const sortBy = searchParams.get("sortby") || "";
	const Price = searchParams.get("price") || "";

	const [value, setValue] = useState(false);
	const [cities, setCities] = useState();
	const [showCity, setCity] = useState(0);
	const [square, setSquare] = useState();
	const [name, setName] = useState("");
	const [PathName, setPathName] = useState("");

	const [query, SetQuery] = useState(queryurl);
	const [number, setNumber] = useState(place);
	const [rooms, setRooms] = useState(beds);
	const [shower, setShower] = useState(baths);
	const [area, setArea] = useState(Area);
	const [price, setPrice] = useState(Price);
	const [propertiesUseState, setProperties] =
		useState(regions);

	const [index, setIndex] = useState();
	const [region, setRegion] = useState();

	function Reset() {
		setRooms(0);
		setNumber("");
		SetQuery("");
		setShower(0);
		setArea(0);
		setSquare("");
	}

	function HandleDelete(handler) {
		handler("");
	}

	useMemo(
		function () {
			if (query !== undefined && query !== "") {
				searchParams.set("region", query);
				setSearchParams(searchParams);
			}

			if (number !== "") {
				searchParams.set("place", number);
				setSearchParams(searchParams);
			}
		},
		[query, number]
	);

	return (
		<SiteOuranoypoli.Provider
			value={{
				name,
				setName,
				setValue,
				value,
				cities,
				setCities,
				showCity,
				setCity,
				square,
				setSquare,
				query,
				SetQuery,
				queryurl,
				HandleDelete,
				sortBy,
				number,
				setNumber,
				rooms,
				setRooms,
				Reset,
				baths,
				beds,
				Area,
				place,
				shower,
				setShower,
				area,
				setArea,
				propertiesUseState,
				setProperties,
				index,
				setIndex,
				region,
				setRegion,
				price,
				setPrice,
				PathName,
				setPathName,
			}}
		>
			{children}
		</SiteOuranoypoli.Provider>
	);
}

function RealEState() {
	const context = useContext(SiteOuranoypoli);
	if (context === undefined)
		throw new Error(
			"CiitiesContext was used outside the CitiesProvider"
		);
	return context;
}

export { RealEState, Context };
