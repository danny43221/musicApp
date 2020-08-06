import React from "react";
import axios from "../axios-api";
import { useForm } from "react-hook-form";

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

	const passwordErrors = errors.password ? <span> - {errors.password.message}</span> : null;
	const confirmPasswordErrors = errors.confirmpassword ? (
		<span> - {errors.confirmpassword.message}</span>
	) : null;
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label for="password">PASSWORD{passwordErrors}</label>
				<input
					name="password"
					id="password"
					type="password"
					ref={register({
						required: "This field is required",
						minLength: {
							value: "8",
							message: "Password must be atleast 8 characters",
						},
					})}
				/>
				<label for="confirmpassword">CONFIRM PASSWORD{confirmPasswordErrors}</label>
				<input
					name="confirmpassword"
					id="confirmpassword"
					type="password"
					ref={register({
						validate: value => value == watch("password") || "Passwords don't match",
					})}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default ResetPassword;
