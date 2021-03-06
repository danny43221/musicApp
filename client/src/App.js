import React, { useState, useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import HomeLayout from "./components/Layouts/HomeLayout/HomeLayout";
import axios from "./shared/axios-api";
import { AuthContext } from "./shared/AuthContext";
import Profile from "./containers/Profile/Profile";
import FindMatch from "./containers/FindMatch/FindMatch";
import Leaderboard from "./containers/Leaderboard/Leaderboard";
import User from "./containers/User/User";
import Loader from "./components/UI/Loader/Loader";

const App = props => {
	const [isLoading, setIsLoading] = useState(true);
	const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get("/auth/me")
			.then(res => {
				setIsAuthenticated(true);
				setUser(res.data.data);
				setIsLoading(false);
			})
			.catch(e => {
				setIsAuthenticated(false);
				setUser({});
				setIsLoading(false);
			});
		return () => {
			localStorage.clear();
		};
	}, [isAuthenticated]);

	let content;
	if (isLoading) {
		content = (
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100vh",
				}}
			>
				<Loader />
			</div>
		);
	} else if (isAuthenticated) {
		content = (
			<HomeLayout>
				<Switch>
					<Route path="/profile" component={Profile} />
					<Route path="/match" component={FindMatch} />
					<Route path="/leaderboard/:id" component={User} />
					<Route path="/leaderboard" component={Leaderboard} />
					<Redirect to="/profile" />
				</Switch>
			</HomeLayout>
		);
	} else {
		content = (
			<Switch>
				<Route path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/forgotpassword" component={ForgotPassword} />
				<Route path="/resetpassword/:token" component={ResetPassword} />
				<Redirect to="/register" />
			</Switch>
		);
	}

	return <div>{content}</div>;
};

export default App;
