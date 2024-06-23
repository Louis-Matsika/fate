import { Outlet, Link } from "react-router-dom";

const Layout = () => {
	return (
		<>
			<header>
				<a
					href="https://www.youtube.com/@saisfate"
					target="_blank"
					rel="noreferrer"
					class="header-logo-wrapper"
				>
					<img
						src="utilities/branding/omologo.png"
						alt="OMO logo"
						class="header-logo omo-logo"
					/>
				</a>
			</header>

			<Outlet />
		</>
	);
};

export default Layout;
