import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../components/Home";
import { Service } from "../components/Service";
import { Contacts } from "../components/Contacts";

export default (
	<Router>
		<Switch>
			<Route path="/" exact component={Home} />
			<Route path="/service" exact component={Service} />
			<Route path="/contacts" exact component={Contacts} />
		</Switch>
	</Router>
);
