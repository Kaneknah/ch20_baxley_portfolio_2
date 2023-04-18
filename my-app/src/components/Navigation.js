import React from "react";
import Nav from "react-bootstrap/Nav";

function Navigation({ currentPage, HandlePageChange }) {
	return (
		<>
			<Nav>
				<Nav.Item>
					<Nav.Link
						href="#Home"
						onClick={() => HandlePageChange("Home")}
						className={currentPage === "Home" ? "nav-link active" : "nav-link"}>
						Home
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link
						href="#About"
						onClick={() => HandlePageChange("Resume")}
						className={
							currentPage === "Resume" ? "nav-link active" : "nav-link"
						}>
						About
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link
						href="#contact"
						onClick={() => HandlePageChange("Contact")}
						className={
							currentPage === "Contact" ? "nav-link active" : "nav-link"
						}>
						Contact
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link
						href="#Resume"
						onClick={() => HandlePageChange("Resume")}
						className={
							currentPage === "Resume" ? "nav-link active" : "nav-link"
						}>
						Resume
					</Nav.Link>
				</Nav.Item>

				<Nav.Item>
					<Nav.Link
						href="#Portfolio"
						onClick={() => HandlePageChange("Portfolio")}
						className={
							currentPage === "Portfolio" ? "nav-link active" : "nav-link"
						}>
						Portfolio
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</>
	);
}

export default Navigation;
