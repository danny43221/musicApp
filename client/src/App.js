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
import Loader from './components/UI/Loader/Loader'

const App = props => {
	const [isLoading, setIsLoading] = useState(false)
	const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

	useEffect(() => {
		setIsLoading(true)
		axios
			.get("/auth/me")
			.then(res => {
				setIsAuthenticated(true);
				setUser(res.data.data);
				setIsLoading(false)
			})
			.catch(e => {
				setIsAuthenticated(false);
				setUser({});
				setIsLoading(false)
			});
	}, []);

	let routes = (
		<Switch>
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Route path="/forgotpassword" component={ForgotPassword} />
			<Route path="/resetpassword/:token" component={ResetPassword} />
			<Redirect to="/register" />
		</Switch>
	);

	if (isAuthenticated) {
		routes = (
			<HomeLayout>
				<Switch>
					<Route path="/profile" component={Profile} />
					<Redirect to="/profile" />
				</Switch>
			</HomeLayout>
		);
	}

	if (isLoading) {
		routes = (
			<Loader />
		)
	}

	return <div>{routes}</div>;
};

export default App;
