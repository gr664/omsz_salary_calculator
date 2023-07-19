import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/omsz_salary_calculator/home" activeStyle>
						Home
					</NavLink>
					<NavLink to="/omsz_salary_calculator/about" activeStyle>
						About
					</NavLink>
					<NavLink to="/omsz_salary_calculator/shifts" activeStyle>
						Shifts
					</NavLink>
					<NavLink to="/omsz_salary_calculator/newshift" activeStyle>
						NewShift
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
