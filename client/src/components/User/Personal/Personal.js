import React from "react";
import Paper from "../../UI/Paper/Paper";
import classes from "./Personal.module.css";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import TextInput from "../../UI/Inputs/TextInput/TextInput";
import TextField from "../../UI/Inputs/TextField/TextField";
import { useForm } from "react-hook-form";
import axios from "../../../shared/axios-api";

const Personal = props => {
	const { register, errors, handleSubmit } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios.put("/users", data).then(res => {
			props.setUser(res.data.data)
			props.onCloseModal()
		});
	};

	const nameError = errors.name ? errors.name.message : null;
	const descError = errors.description ? errors.description.message : null;

	const primaryButtonColor = getComputedStyle(document.documentElement).getPropertyValue(
		"--pink-dark"
	);
	const secondaryButtonColor = getComputedStyle(document.documentElement).getPropertyValue(
		"--text-primary"
	);

	return (
		<div className={classes.Personal}>
			<Paper>
				<h3 className={classes.CardHeader}>Personal</h3>
				<Modal show={props.showModal} onClose={props.onCloseModal}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<TextInput
							defaultValue={props.name}
							name="name"
							autoComplete="off"
							id="name"
							label="name"
							errorMessage={nameError}
							register={register({
								required: "This field is required",
								maxLength: {
									value: "15",
									message: "Longer than 15 characters",
								},
							})}
						/>
						<TextField
							defaultValue={props.description}
							errorMessage={descError}
							name="description"
							autoComplete="off"
							id="description"
							label="description"
							register={register({
								maxLength: {
									value: "280",
									message: "Longer than 280 characters"
								}
							})}
						/>
						<div className={classes.ButtonsContainer}>
							<Button color={primaryButtonColor}>update</Button>
							<Button color={secondaryButtonColor} onClick={props.onCloseModal} outlined>
								cancel
							</Button>
						</div>
					</form>
				</Modal>
				<div>
					{props.name}
					{props.description}
				</div>
				<Button color={primaryButtonColor} onClick={props.onShowModal} outlined>
					edit
				</Button>
			</Paper>
		</div>
	);
};

export default Personal;
