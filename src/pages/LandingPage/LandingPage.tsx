import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as Constants from "../../config/constants";
import { Routes } from "../../config/routes";
import Footer from "../../layouts/Footer";

import "./LandingPage.css";

import image from "../../assets/img/Paper-Preview.jpeg";

const LandingPage: React.FunctionComponent<Record<string, never>> = () => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	return (
		<div style={{ width: "100%" }}>
			<div className="page-container" style={{ width: "70%" }}>
				<h1>{Constants.PROJECT_NAME}</h1>
				<h2>{Constants.PROJECT_DESCRIPTION}</h2>
				<a id="live-demo" className="button" href={Routes.demo}>
					Live Demo
				</a>
				<Tooltip
					isOpen={tooltipOpen}
					arrowClassName={"arrow-demo-tooltip"}
					innerClassName={"inner-demo-tooltip"}
					placement="right"
					offset={"0px"}
					target={"live-demo"}
					toggle={() => setTooltipOpen(true)}>
					<FontAwesomeIcon
						id="tooltip-close"
						icon="times"
						className="icon"
						onClick={() => setTooltipOpen(false)}
					/>
					<strong>Demo</strong>
					<br />
					<span>Here goes a short description of the demo.</span>
				</Tooltip>
				<div className="publication">
					<div>
						<img src={image} height={125} alt="" />
					</div>
					<div id="description">
						<p>
							This project is based on the publication
							<br />
							[Author 1, Author 2, Author 3]
							<br />
							<strong>
								<a href="" target="_blank" rel="noreferrer">
									[Publication Title]
								</a>
							</strong>
							<br />
							[Journal], [Year]
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default LandingPage;
