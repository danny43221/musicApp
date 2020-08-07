import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Home from "./components/Home";
import Layout from "./components/Layout/Layout";

const App = props => {
	const routes = (
		<Switch>
			<Route path="/register" component={Register} />
			<Route path="/login" component={Login} />
			<Route path="/forgotpassword" component={ForgotPassword} />
			<Route path="/resetpassword/:token" component={ResetPassword} />
			<Route path="/home" component={Home} />
			<Redirect to="/register" />
		</Switch>
	);
	
	return (
		<div>
			<Layout>{routes}</Layout>
		</div>
	);
};

export default App;
