import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Register from "./containers/Register/Register";
import Login from "./containers/Login/Login";
import ForgotPassword from "./containers/ForgotPassword/ForgotPassword";
import ResetPassword from "./containers/ResetPassword/ResetPassword";
import Home from "./containers/Home/Home";
import HomeLayout from "./components/Layouts/HomeLayout/HomeLayout";

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
			<HomeLayout>{routes}</HomeLayout>
		</div>
	);
};

export default App;
