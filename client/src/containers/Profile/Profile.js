import React, { useState, useContext } from "react";
import classes from "./Profile.module.css";
import { AuthContext } from "../../shared/AuthContext";
import WinLoss from "../../components/User/WinLoss/WinLoss";
import NoteAccuracy from "../../components/User/NoteAccuracy/NoteAccuracy";
import LastGames from "../../components/User/LastGames/LastGames";
import Personal from "../../components/User/Personal/Personal";

const Profile = props => {
	const [showModal, setShowModal] = useState(false);
	const { user, setUser } = useContext(AuthContext);

	return (
		<div className={classes.Profile}>
			<Personal
				name={user.name}
				description={user.description}
				showModal={showModal}
				onCloseModal={() => setShowModal(false)}
				onShowModal={() => setShowModal(true)}
				setUser={setUser}
			/>
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
