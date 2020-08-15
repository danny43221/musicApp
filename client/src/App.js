import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import HomeLayout from "./components/Layouts/HomeLayout/HomeLayout";
import axios from "./shared/axios-api";
import { AuthContext } from "./shared/AuthContext";
import Profile from "./containers/Profile/Profile";

const App = props => {
	const { isAuthenticated, setIsAuthenticated, setUser } = useContext(AuthContext);

	useEffect(() => {
		axios
			.get("/auth/user")
			.then(res => {
				setIsAuthenticated(true);
				setUser(res.data.data);
				
			})
			.catch(e => {
				setIsAuthenticated(false);
				setUser({});
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

	return <div>{routes}</div>;
};

export default App;
