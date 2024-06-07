import * as React from "react";

import * as Constants from "../config/constants";
import { Routes } from "../config/routes";

import "./Footer.css";

const Footer: React.FunctionComponent<Record<string, never>> = () => (
	<div id="footer">
		<div className="footer-items">
			<div className="footer-item">
				<span>
					{Constants.PROJECT_NAME} is a project maintained by{" "}
					<a href={Constants.PROJECT_ORGANISATION_URL}>{Constants.PROJECT_ORGANISATION}</a> under the lead of{" "}
					<a href={Constants.PROJECT_LEAD_URL}>{Constants.PROJECT_LEAD}</a>
				</span>
			</div>
			<div className="footer-item">
				<a href={Routes.about}>About</a>
			</div>
		</div>
	</div>
);

export default Footer;
