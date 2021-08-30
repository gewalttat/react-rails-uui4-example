import React from "react";
import { Layout, Menu } from "antd";
import { Link } from 'react-router-dom'
const { Header } = Layout;

export default () => (
	<Header>
		<div className="logo" />
		<Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
			<Menu.Item key="1">Home</Menu.Item>
			<Menu.Item key="2"><Link to="/service">Service</Link></Menu.Item>
			<Menu.Item key="3"><Link to="/contacts">Contacts</Link></Menu.Item>
		</Menu>
		<div>
		</div>
	</Header>
);
