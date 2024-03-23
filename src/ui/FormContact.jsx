import React, { useRef, useState } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import H3 from "./H3";
import TextArea from "./Textarea";
import Button from "./Button";
import Input from "./Input";
import Form from "./Form";
import Required from "./Required";
import Sent from "./Sent";

export default function FormContact() {
	const [sent, setHasSent] = useState(false);
	const [message, setMessage] = useState();
	const { t } = useTranslation(["form"]);
	const form = useRef();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const SendEmail = () => {
		emailjs
			.sendForm(
				"service_zeigneg",
				"template_8kf034j",
				form.current,
				{
					publicKey: "F-bxBvGOjRl8J1FyQ",
				}
			)
			.then(
				() => {
					setHasSent(false);
					toast(<Sent sent={sent} />);
					form.current.reset();
					setMessage("");
				},
				(error) => {
					setHasSent(true);
					toast(<Sent sent={sent} />);
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<Form
			kind={"formContact"}
			ref={form}
			onSubmit={handleSubmit(SendEmail)}
		>
			<H3 type="caption" style={{ textAlign: "center" }}>
				{t("caption")}
			</H3>

			<Input
				kind={"form"}
				placeholder={t("name")}
				type="text"
				name="user_name"
				id="name"
				{...register("name", {
					required: true,
					maxLength: 20,
				})}
			/>

			{errors.name && errors.name.type === "required" && (
				<Required />
			)}

			<Input
				kind={"form"}
				placeholder="Email"
				type="email"
				name="user_email"
				id="email"
				{...register("email", {
					required: true,
					maxLength: 25,
				})}
			/>
			{errors.email && errors.email.type === "required" && (
				<Required />
			)}

			<TextArea
				onChange={(e) => setMessage(e.target.value)}
				placeholder={t("message")}
				value={message}
				name="message"
				type="text"
			/>

			<Button kind="form" type="submit" value="Send">
				{t("contactus")}
			</Button>
		</Form>
	);
}
