import styled from "styled-components";
import Map from "../../ui/MapIframe";
import { useTranslation } from "react-i18next";
import P from "../../ui/P";

const Content = styled.div`
	width: 100%;
	height: 80%;

	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 29px;
	@media (max-width: 900px) {
		flex-direction: column;
	}
`;
const ContentInfos = styled.div`
	width: 20%;
	height: 30%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 900px) {
		width: 90%;
		height: 40%;
	}
`;
export default function ContactInfos() {
	const { t } = useTranslation([
		"footer",
		"summary,titlesummary,location,contact",
	]);

	return (
		<Content>
			<ContentInfos>
				<h2>{t("titlesummary")}</h2>
				<P type="footer">{t("summary")}</P>
			</ContentInfos>

			<ContentInfos>
				<h2>
					{t("location")}
					<br />
				</h2>

				<Map />
			</ContentInfos>
			<ContentInfos>
				<h2>{t("contact")}</h2>
				<p> ouranoupolirealestate@gmail.com</p>
				<p> +30 69477 97433</p>
				<p> +30 23770 71604​</p>
			</ContentInfos>
		</Content>
	);
}
