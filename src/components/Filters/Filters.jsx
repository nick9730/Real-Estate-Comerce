import { useTranslation } from "react-i18next";

import {
	Area,
	BathOptions,
	BedOptions,
	PriceOptionsForSale,
	Type,
	GreekBathOptions,
	GreekBedOptions,
	GreekArea,
	GreekType,
	GreekPriceOptionsForSale,
} from "../../data/options";

import { RealEState } from "../context/Context";
import Select from "../../ui/Select";
import SearchProperty from "./SearchProperty";
import SortButtons from "./SortButtons";
import StyledFilters from "../../ui/StyledFilters";
import { useModalContext } from "../context/ModalContext";

export default function Filters({ filter, type, kind }) {
	const {
		setNumber,
		setRooms,
		setShower,
		setArea,
		baths,
		beds,
		Area: area,
		place,
		price,
		setPrice,
	} = RealEState();
	
	const { i18n } = useTranslation();

	return (
		<>
			<SearchProperty filter={filter} />
			<StyledFilters
				type={kind === "two_buttons" ? "regular" : kind}
			>
				<Select
					type={type}
					valuee={baths}
					handler={(e) => filter(e, setShower, "baths")}
					options={
						i18n.language === "en"
							? BathOptions
							: GreekBathOptions
					}
				/>
				<Select
					type={type}
					valuee={beds}
					handler={(e) => filter(e, setRooms, "beds")}
					options={
						i18n.language === "en"
							? BedOptions
							: GreekBedOptions
					}
				/>
				<Select
					type={type}
					valuee={area}
					handler={(e) => filter(e, setArea, "area")}
					options={i18n.language === "en" ? Area : GreekArea}
				/>
				<Select
					type={type}
					valuee={place}
					handler={(e) => filter(e, setNumber, "place")}
					options={i18n.language === "en" ? Type : GreekType}
				/>
			</StyledFilters>

			<StyledFilters type={kind}>
				<Select
					style={kind === "modal" ? null : { width: "30%" }}
					type={kind === "modal" ? kind : "form"}
					valuee={price}
					handler={(e) => filter(e, setPrice, "price")}
					options={
						i18n.language === "en"
							? PriceOptionsForSale
							: GreekPriceOptionsForSale
					}
				/>
				{/* {width >800 &&  <Pagination count={count}/>}      */}
				<SortButtons
					style={kind === "modal" ? null : { width: "30%" }}
					filter={filter}
					type={type}
					kind={kind}
				/>
			</StyledFilters>
		</>
	);
}
