import React from "react";
import styled, { css } from "styled-components";
import {
	FaFacebookSquare,
	FaGoogle,
	FaInstagram,
} from "react-icons/fa";
import StyledNavLink from "../../ui/StyledNavLink";

const Content = styled.div`
	${(props) =>
		props.type === "regular" &&
		css`
			width: 100%;
			display: flex;
			justify-content: center;
			gap: 20px;
		`}

	${(props) =>
		props.type === "aboutus" &&
		css`
			width: 100%;
			display: flex;
			justify-content: flex-end;
			gap: 20px;
			svg {
				color: black;
				font-size: 15px;
				border: 1px solid wheat;
				border-radius: 50px;
			}
		`}
`;
Content.defaultProps = {
	type: "regular",
};

export default function SocialMediaIcons({ type }) {
	return (
		<Content type={type}>
			<StyledNavLink
				type="social"
				to={"https://www.facebook.com/"}
			>
				<FaFacebookSquare />
			</StyledNavLink>
			<StyledNavLink
				type="social"
				to={"https://mail.google.com/"}
			>
				<FaGoogle />
			</StyledNavLink>
			<StyledNavLink
				type="social"
				to={"https://www.instagram.com/"}
			>
				<FaInstagram />
			</StyledNavLink>
		</Content>
	);
}
