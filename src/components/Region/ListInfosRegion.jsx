import React from "react";
import styled from "styled-components";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import { useTranslation } from "react-i18next";
import Li from "../../ui/LI";
import P from "../../ui/P";

const StyledUl = styled.ul`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	gap: 10px;
	@media (max-width: 1200px) {
		width: 100%;
		gap: 10px;
		padding: 30px;
	}
`;

const Span = styled.span`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40%;
	text-align: center;

	@media (max-width: 1200px) {
		width: 50%;
		justify-content: center;
		align-items: center;
	}
`;
const Icon = styled.div`
	background-color: #888c88;
	border-radius: 50px;
	padding: 10px;
	display: flex;
	font-size: 50px;
	text-align: center;

	svg {
		color: white;
		font-size: 50px;
	}
	@media (max-width: 1200px) {
		padding: 4px;
		font-size: 30px;
		svg {
			color: white;
			font-size: 30px;
		}
	}
`;

const H5 = styled.h5`
	font-size: 25px;

	text-align: center;
	&:last-child {
		width: 60%;
	}

	@media (max-width: 1200px) {
		font-size: 15px;
	}
`;

export default function ListInfosRegion({ region }) {
	const { t, i18n } = useTranslation([
		`${region[0]?.name}`,
		"density",
	]);
	const { t: region_common } = useTranslation([
		"region",
		"density,population,age,people,median",
	]);

	return (
		<StyledUl>
			<Li type="listinforegion">
				<Icon>
					<FaPeopleGroup />
				</Icon>

				<Span>
					<H5>{region[0]?.population}</H5>
					<P type="listinforegion">
						{region_common("population")}
					</P>
				</Span>
			</Li>

			<Li type="listinforegion">
				<Icon>
					<FaPeopleRoof />
				</Icon>

				<Span>
					<h5>
						{i18n.language === "en"
							? region[0]?.population_density.toUpperCase()
							: t("density")}
					</h5>
					<P type="listinforegion">
						{region_common("density")}
					</P>
				</Span>
			</Li>

			<Li>
				<Icon>
					<MdWatchLater />
				</Icon>

				<Span>
					<h5>{region[0]?.median_age}</h5>
					<P type="listinforegion">{region_common("age")}</P>
				</Span>
			</Li>
		</StyledUl>
	);
}
