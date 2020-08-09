import React from "react";
import { useForm } from "react-hook-form";
import axios from "../../shared/axios-api";
import Input from "../../components/UI/Input/Input";
import EnvelopeIcon from "../../assets/icons/light/EnvelopeIcon";
import classes from "./ForgotPassword.module.css";
import Button from "../../components/UI/Button/Button";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";

const ForgotPassword = props => {
	const { register, errors, handleSubmit } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.post("/auth/forgotpassword", data)
			.then(res => {
				alert(res.data.data);
			})
			.catch(err => {
				alert(err.response.data.error);
			});
	};

	const emailError = errors.email ? errors.email.message : null;
	const buttonColor = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	return (
		<AuthLayout>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					name="email"
					id="email"
					label="email"
					errorMessage={emailError}
					Icon={EnvelopeIcon}
					register={register({
						required: "This field is required",
						pattern: {
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							message: "Please enter a valid email",
						},
					})}
				/>
				<div className={classes.ButtonContainer}>
					<Button color={buttonColor}>send</Button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default ForgotPassword;
