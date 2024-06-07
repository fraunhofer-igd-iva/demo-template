import * as React from "react";

const AboutPage: React.FunctionComponent<Record<string, never>> = () => {
	return (
		<div style={{ width: "100%", padding: "2rem 5vw", overflowY: "auto" }}>
			<h2 style={{ textAlign: "center", fontWeight: 400 }}>About</h2>

			<hr />

			<p>Here, you can describe the context of this project.</p>

			<h5>[Project Organisation]</h5>

			<p>
				<em>
					<strong>[Project Organisation]</strong>
					<br />
					[Street]]
					<br />
					[City]]
					<br />
					Phone: [Phone number]]
					<br />
					<a href="">[Website]</a>
				</em>
			</p>

			<p />

			<h5>[Sample Heading]</h5>

			<p>[Sample Description]</p>
		</div>
	);
};

export default AboutPage;
