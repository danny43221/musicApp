import React from "react";
import axios from "../../shared/axios-api";
import { useForm } from "react-hook-form";
import TextInput from "../../components/UI/Inputs/TextInput/TextInput";
import LockIcon from "../../assets/icons/light/LockIcon";
import classes from "./ResetPassword.module.css";
import Button from "../../components/UI/Button/Button";
import AuthLayout from "../../components/Layouts/AuthLayout/AuthLayout";

const ResetPassword = props => {
	const { register, watch, handleSubmit, errors } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.put(`/auth/resetpassword/${props.match.params.token}`, data)
			.then(res => {
				alert("You've successfully reset your password");
				props.history.push("/login");
			})
			.catch(err => {
				alert(err.response.data.error);
			});
	};

	const passwordError = errors.password ? errors.password.message : null;
	const confirmPasswordError = errors.confirmpassword ? errors.confirmpassword.message : null;

	const buttonColor = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	return (
		<AuthLayout>
			<form onSubmit={handleSubmit(onSubmit)} className={classes.ResetPasswordForm}>
				<TextInput
					Icon={LockIcon}
					name="password"
					label="new password"
					id="password"
					errorMessage={passwordError}
					type="password"
					register={register({
						required: "This field is required",
						minLength: {
							value: "8",
							message: "Must be atleast 8 characters",
						},
					})}
				/>
				<TextInput
					name="confirmpassword"
					Icon={LockIcon}
					errorMessage={confirmPasswordError}
					label="confirm password"
					id="confirmpassword"
					type="password"
					register={register({
						validate: value => value === watch("password") || "Passwords don't match",
						required: "This field is required",
					})}
				/>
				<div className={classes.ButtonContainer}>
					<Button color={buttonColor}>reset</Button>
				</div>
			</form>
		</AuthLayout>
	);
};

export default ResetPassword;
