import * as React from "react";
import { Route } from "react-router-dom";

import { Routes } from "./config/routes";
import Header from "./layouts/Header";
import AboutPage from "./pages/AboutPage/AboutPage";
import ExamplePage from "./pages/ExamplePage/ExamplePage";
import LandingPage from "./pages/LandingPage/LandingPage";

import "bootstrap/dist/css/bootstrap.min.css"; // Because Reactstrap does not include Bootstrap CSS
import "./App.css";

// Handling Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight, faTimes);

const App: React.FunctionComponent<Record<string, never>> = () => {
	return (
		<div id="app">
			<Header />
			<main className="page-content">
				<Route exact path={Routes.root} component={() => <LandingPage />} />
				<Route path={Routes.demo} component={() => <ExamplePage />} />
				<Route path={Routes.about} component={() => <AboutPage />} />
			</main>
		</div>
	);
};

export default App;
