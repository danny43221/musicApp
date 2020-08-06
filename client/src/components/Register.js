import React from "react";
import { Link } from "react-router-dom";
import axios from "../axios-api";
import { useForm } from "react-hook-form";

const Register = props => {
	const { handleSubmit, errors, setError, register, watch } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.post("auth/register", data)
			.then(res => {
				axios
					.post("auth/login", data)
					.then(res => {
						props.history.push("/home");
					})
					.catch(err => {
						props.history.push("/login");
					});
			})
			.catch(err => {
				setError("email", {
					type: "manual",
					message: err.response.data.error,
				});
			});
	};

	const emailErrors = errors.email ? <span> - {errors.email.message}</span> : null;
	const passwordErrors = errors.password ? <span> - {errors.password.message}</span> : null;
	const confirmPasswordErrors = errors.confirmpassword ? (
		<span> - {errors.confirmpassword.message}</span>
	) : null;

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

			<Link to="/login">Already have an account?</Link>
		</div>
	);
};

export default Register;
