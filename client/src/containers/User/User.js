import React, { useEffect, useState } from "react";
import classes from "./User.module.css";
import axios from "../../shared/axios-api";
import WinLoss from "../../components/Profile/WinLoss/WinLoss";
import NoteAccuracy from "../../components/Profile/NoteAccuracy/NoteAccuracy";
import LastGames from "../../components/Profile/LastGames/LastGames";
import Personal from "../../components/Profile/Personal/Personal";
import Loader from "../../components/UI/Loader/Loader";
import { Link } from "react-router-dom";

const User = props => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		axios.get(`/users/${props.match.params.id}`).then(res => {
			setUser(res.data.data);
			setLoading(false);
		});
	}, []);

	let content;
	if (loading) {
		content = (
			<div className={classes.LoaderContainer}>
				<Loader />
			</div>
		);
	} else {
		content = (
			<>
				<div style={{ textAlign: "right" }}>
					<Link to="/leaderboard">&larr; Go back</Link>
				</div>
				<div className={classes.User}>
					<Personal
						name={user.name}
						description={user.description}
						instrument={user.instrument}
						editable={false}
					/>
					<WinLoss wins={user.stats.wins} losses={user.stats.losses} />
					<NoteAccuracy accuracy={user.stats.noteAccuracy} />
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
			</>
		);
	}

	return content;
};

export default User;
