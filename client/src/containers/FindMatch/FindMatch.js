import React, { useState, useEffect, useContext } from "react";
import Paper from "../../components/UI/Paper/Paper";
import Game from "../../containers/Game/Game";
import Button from "../../components/UI/Button/Button";
import Loading from "../../components/UI/Loader/Loader";
import classes from "./FindMatch.module.css";
import axios from "../../shared/axios-api";
import { AuthContext } from "../../shared/AuthContext";
import { initiateSocket, disconnectSocket, subscribeToQueue } from "../../shared/socket";

const FindMatch = props => {
	const [finding, setFinding] = useState(false);
	const { user } = useContext(AuthContext);
	const [matchFound, setMatchFound] = useState(false);
	const [opponent, setOpponent] = useState({});

	useEffect(() => {
		if (finding) {
			initiateSocket(user._id, "queue");

			subscribeToQueue((err, opponentId) => {
				if (err) return;
				axios
					.get(`/users/${opponentId}`)
					.then(res => {
						setOpponent(res.data.data);
						setMatchFound(true)
					})
					.catch(res => {
						resetHandler();
					});
			});
		}

		return () => {
			disconnectSocket();
		};
	}, [finding]);

	const resetHandler = () => {
		setMatchFound(false);
		setFinding(false);
		setOpponent({});
		disconnectSocket();
	};

	const buttonColor = getComputedStyle(document.documentElement).getPropertyValue("--pink-dark");
	let content = (
		<>
			{finding ? (
				<>
					<div className={classes.LinkContainer}>
						<span className={classes.Link} onClick={resetHandler}>
							&larr; Cancel
						</span>
					</div>
					<Loading label="Finding Opponent..." />
				</>
			) : (
				<div className={classes.Card}>
					<Paper>
						<Button color={buttonColor} onClick={() => setFinding(true)}>
							Find Match
						</Button>
					</Paper>
				</div>
			)}
		</>
	);
	if (matchFound) content = <Game user={user} opponent={opponent} disconnect={resetHandler} />;

	return content;
};

export default FindMatch;
