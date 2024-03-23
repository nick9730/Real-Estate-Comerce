import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

import Input from "../../ui/Input";
import { RealEState } from "../context/Context";
import { useTranslation } from "react-i18next";

const Search = styled.div`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;
	color: black;
	font-size: 20px;
	margin-left: 10px;
`;

export default function SearchProperty({ filter }) {
	const { SetQuery, queryurl } = RealEState();
	const { i18n } = useTranslation();

	return (
		<Search>
			<FaSearch color="#848484" />
			<Input
				kind={"regular"}
				onChange={(e) => filter(e, SetQuery, "region")}
				onAbort={(e) => filter(e, SetQuery, "region")}
				value={queryurl}
				placeholder={
					i18n.language === "en" ? "Address" : "Διεύθυνση"
				}
				type="text"
			/>
		</Search>
	);
}
