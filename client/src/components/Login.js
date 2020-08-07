import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "../shared/axios-api";
import { useForm } from "react-hook-form";

const Login = props => {
	const [serverError, setServerError] = useState("");
	const { register, errors, handleSubmit } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios
			.post("/auth/login", data)
			.then(res => {
				props.history.push("/home");
			})
			.catch(err => {
				setServerError(err.response.data.error);
			});
	};

	const emailErrors = errors.email ? <span> - {errors.email.message}</span> : null;
	const passwordErrors = errors.password ? <span> - {errors.password.message}</span> : null;
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
					type="password"
					id="password"
					ref={register({
						required: "This field is required",
					})}
				/>
				<Link to="/forgotpassword">Forgot your password?</Link>
				<input type="submit" onClick={() => setServerError("")} /> {serverError}
			</form>
			Need an account? <Link to="/register">Register</Link>
		</div>
	);
};

export default Login;
