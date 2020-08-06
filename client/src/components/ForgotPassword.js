import React from "react";
import { useForm } from "react-hook-form";
import axios from "../axios-api";

const ForgotPassword = props => {
	const { register, errors, handleSubmit } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.post("/auth/forgotpassword", data)
			.then(res => {
            alert(res.data.data)
         })
			.catch(err => {
            alert(err.response.data.error)
         });
	};

	const emailErrors = errors.email ? <span> - {errors.email.message}</span> : null;
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<label for="email">EMAIL{emailErrors}</label>
				<input
					name="email"
					id="email"
					ref={register({
						required: "This field is required",
						pattern: {
							value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
							message: "Please enter a valid email",
						},
					})}
				/>
				<input type="submit" />
			</form>
		</div>
	);
};

export default ForgotPassword;
