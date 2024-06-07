import * as React from "react";
import { Nav, Navbar, NavbarBrand } from "reactstrap";

import * as Constants from "../config/constants";
import { Routes } from "../config/routes";

import "./Header.css";

const Header: React.FunctionComponent<Record<string, never>> = () => {
	return (
		<div id="header">
			<Navbar light expand="xl" fixed="top">
				<NavbarBrand href={Routes.root}>{Constants.PROJECT_NAME}</NavbarBrand>
				<Nav className="ml-auto mr-auto" navbar></Nav>
			</Navbar>
		</div>
	);
};

export default Header;
