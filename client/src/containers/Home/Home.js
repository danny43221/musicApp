import React, { useContext } from "react";
import { AuthContext } from "../../shared/AuthContext";
import axios from "../../shared/axios-api";

const Home = props => {
	const { user } = useContext(AuthContext);
return <h1>was good ma nigga {user.email}</h1>;
};
export default Home;
