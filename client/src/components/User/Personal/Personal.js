import React from "react";
import Paper from "../../UI/Paper/Paper";
import classes from "./Personal.module.css";
import Modal from "../../UI/Modal/Modal";
import Button from "../../UI/Button/Button";
import TextInput from "../../UI/Inputs/TextInput/TextInput";
import TextField from "../../UI/Inputs/TextField/TextField";
import Select from "../../UI/Inputs/Select/Select";
import { useForm } from "react-hook-form";
import axios from "../../../shared/axios-api";
import instruments from "../../../shared/instruments";

const Personal = props => {
	const { register, errors, handleSubmit } = useForm({
		reValidateMode: "onSubmit",
		shouldFocusError: true,
	});

	const onSubmit = data => {
		axios.put("/users", data).then(res => {
			props.setUser(res.data.data);
			props.onCloseModal();
		});
	};

	const InstrumentIcon = instruments[props.instrument];

	const nameError = errors.name ? errors.name.message : null;
	const descError = errors.description ? errors.description.message : null;

	const pinkDark = getComputedStyle(document.documentElement).getPropertyValue(
		"--pink-dark"
	);
	const pinkLight = getComputedStyle(document.documentElement).getPropertyValue(
		"--pink-light"
	);
	const textPrimary = getComputedStyle(document.documentElement).getPropertyValue(
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
						<Select
							defaultValue={props.instrument}
							name="instrument"
							id="instrument"
							label="instrument"
							register={register}
						>
							<option value="none">None</option>
							<option value="clarinet">Clarinet</option>
							<option value="flute">Flute</option>
							<option value="guitar">Guitar</option>
							<option value="percussion">Percussion</option>
							<option value="piano">Piano</option>
							<option value="saxophone">Saxophone</option>
							<option value="trumpet">Trumpet</option>
							<option value="violin">Violin</option>
							<option value="vocals">Vocals</option>
						</Select>
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
									message: "Longer than 280 characters",
								},
							})}
						/>

						<div className={classes.ButtonsContainer}>
							<Button color={pinkDark}>update</Button>
							<Button color={textPrimary} onClick={props.onCloseModal} outlined>
								cancel
							</Button>
						</div>
					</form>
				</Modal>
				<div>
					{props.name}
					{props.description}
					{props.instrument}
					<InstrumentIcon primary={pinkDark} secondary={pinkLight} />
				</div>
				<Button color={pinkDark} onClick={props.onShowModal} outlined>
					edit
				</Button>
			</Paper>
		</div>
	);
};

export default Personal;
