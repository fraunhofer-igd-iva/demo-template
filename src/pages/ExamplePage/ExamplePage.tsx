import * as React from "react";

import { Content, Sidebar, SidebarItem, SidebarLayout } from "react-layout-components";

const ExamplePage: React.FunctionComponent<Record<string, never>> = () => {
	return (
		<SidebarLayout>
			<Sidebar>
				<SidebarItem title={"First section"}>
					<div>Here goes your control.</div>
				</SidebarItem>
				<SidebarItem title={"Another section"}>
					<div>You can add sections as you need.</div>
				</SidebarItem>
			</Sidebar>
			<Content>
				<h1>Hello world!</h1>
			</Content>
		</SidebarLayout>
	);
};

export default ExamplePage;
