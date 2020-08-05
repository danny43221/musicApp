import React, { useState } from "react";
import axios from "axios";

const App = props => {
	const [registerUsername, setRegisterUsername] = useState("");
	const [registerPassword, setRegisterPassword] = useState("");
	const [loginUsername, setLoginUsername] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [data, setData] = useState(null);
	const register = () => {
		axios({
			method: "POST",
			data: {
				username: registerUsername,
				password: registerPassword,
			},
			withCredentials: true,
			url: "http://localhost:5000/auth/register",
		}).then(res => console.log(res.body));
	};
	const login = () => {
		axios({
			method: "POST",
			data: {
				username: loginUsername,
				password: loginPassword,
			},
			withCredentials: true,
			url: "http://localhost:5000/auth/login",
		}).then(res => console.log(res.body));
	};

	const logout = () => {
		axios({
			method: 'GET',
			withCredentials: true,
			url: "http://localhost:5000/auth/logout"
		}).then(res => setData(res.data))
	}
	const getUser = () => {
		axios({
			method: "GET",
			withCredentials: true,
			url: "http://localhost:5000/auth/user",
		}).then(res => setData(res.data));
	};
	return (
		<div>
			<h1>Register</h1>
			<input placeholder="username" onChange={e => setRegisterUsername(e.target.value)} />
			<input placeholder="password" onChange={e => setRegisterPassword(e.target.value)} />
			<button onClick={register}>submit</button>

			<h1>Login</h1>
			<input placeholder="username" onChange={e => setLoginUsername(e.target.value)} />
			<input placeholder="password" onChange={e => setLoginPassword(e.target.value)} />
			<button onClick={login}>submit</button>
			<div></div>
			<button onClick={logout}>logout</button>
			<h1>Get user</h1>
			<button onClick={getUser}>Submit</button>
			{data ? <h1>Welcome back fucking nigger {data.username}</h1> : null}
		</div>
	);
};

export default App;
