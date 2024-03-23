import { useTranslation } from "react-i18next";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FaRegTimesCircle } from "react-icons/fa";
import styled from "styled-components";
import Span from "./Span";

const Content = styled.span`
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
`;

export default function Sent({ sent }) {
	const { t } = useTranslation([
		"common",
		"hasSent",
		"notSent",
	]);

	return (
		<Content>
			{sent ? (
				<Span>
					{t("hasSent")}
					<IoCheckmarkCircleSharp color="green" size={30} />
				</Span>
			) : (
				<Span>
					{t("notSent")}
					<FaRegTimesCircle color="red" size={30} />
				</Span>
			)}
		</Content>
	);
}
