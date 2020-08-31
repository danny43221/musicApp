import React, { useEffect, useState, useContext } from "react";
import axios from "../../shared/axios-api";
import { AuthContext } from "../../shared/AuthContext";
import Section from "../../components/Leaderboard/Section/Section";
import classes from "./Leaderboard.module.css";
import Break from "../../components/UI/Break/Break";
import PageSelect from "../../components/Leaderboard/PageSelect/PageSelect";
import usePersistedState from "../../hooks/usePersistedState";

const Leaderboard = props => {
	const [users, setUsers] = useState([]);
	const [page, setPage] = usePersistedState("page", 1);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(20);

	const { user } = useContext(AuthContext);

	useEffect(() => {
		fetchUsers();
	}, [page]);

	const fetchUsers = () => {
		console.log(page);
		axios.get(`/users/?page=${page}`).then(res => {
			setUsers(res.data.data);
			setTotalPages(res.data.pagination.totalPages);
			setLimit(res.data.pagination.limit);
		});
	};

	const userProfiles = users.map((usr, i) => {
		let link = `/leaderboard/${usr._id}`;
		if (user._id === usr._id) {
			link = "/profile";
		}
		return (
			<div className={classes.SectionContainer}>
				<div className={classes.SectionRank}>{i + 1 + (page - 1) * limit}</div>
				<div className={classes.Section}>
					<Section user={usr} link={link} />
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className={classes.Key}>
				<div className={classes.KeyNumber}>#</div>
				<div className={classes.KeyName}>Name</div>
				<div className={classes.KeySection}>Total Games</div>
				<div className={classes.KeySection}>Win / Loss</div>
				<div className={classes.KeySection}>Note Accuracy</div>
			</div>
			<Break margin="1.5rem" />
			{userProfiles}
			<PageSelect totalPages={totalPages} currentPage={page} setPage={setPage} />
		</div>
	);
};

export default Leaderboard;
