import React, { useState, useContext } from "react";
import classes from "./Profile.module.css";
import { AuthContext } from "../../shared/AuthContext";
import WinLoss from "../../components/User/WinLoss/WinLoss";
import NoteAccuracy from "../../components/User/NoteAccuracy/NoteAccuracy";
import LastGames from "../../components/User/LastGames/LastGames";
import Personal from '../../components/User/Personal/Personal'
import Modal from '../../components/UI/Modal/Modal'
import Button from '../../components/UI/Button/Button'

const Profile = props => {
	const [showModal, setShowModal] = useState(true)
	const { user } = useContext(AuthContext);


	return (
		<div className={classes.Profile}>
			<button onClick={() => setShowModal(true)}>show</button>
			<Modal isOpen={showModal} onClose={() => setShowModal(false)}>
				hello nigger
				<Button color="blue" outlined>
					hello
				</Button>
			</Modal>
			<Personal name={user.name} description={user.description} />
			<WinLoss wins={5} losses={34} />
			<NoteAccuracy accuracy={30} />
			<LastGames
				values={[
					{ accuracy: 100, won: true },
					{ accuracy: 15, won: true },
					{ accuracy: 20, won: false },
					{ accuracy: 40, won: true },
               { accuracy: 30, won: false },
               { accuracy: 60, won: true },
               { accuracy: 90, won: false },
				]}
			/>
		</div>
	);
};

export default Profile;
