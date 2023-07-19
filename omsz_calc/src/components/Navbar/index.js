import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/omsz_salary_calculator/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/omsz_salary_calculator/contact" activeStyle>
						Contact Us
					</NavLink>
					<NavLink to="/omsz_salary_calculator/blogs" activeStyle>
						Blogs
					</NavLink>
					<NavLink to="/omsz_salary_calculator/sign-up" activeStyle>
						Sign Up
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
