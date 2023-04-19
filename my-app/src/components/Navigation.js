import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

function Navigation({ currentPage, handlePageChange }) {
	return (
		<Nav>
			<Nav.Item>
				<Link
					to="/"
					onClick={() => handlePageChange("Home")}
					className={currentPage === "Home" ? "nav-link active" : "nav-link"}>
					Home
				</Link>
			</Nav.Item>

			<Nav.Item>
				<Link
					to="/About"
					onClick={() => handlePageChange("About")}
					className={currentPage === "About" ? "nav-link active" : "nav-link"}>
					About
				</Link>
			</Nav.Item>

			<Nav.Item>
				<Link
					to="/Contact"
					onClick={() => handlePageChange("Contact")}
					className={
						currentPage === "Contact" ? "nav-link active" : "nav-link"
					}>
					Contact
				</Link>
			</Nav.Item>

			<Nav.Item>
				<Link
					to="/Resume"
					onClick={() => handlePageChange("Resume")}
					className={currentPage === "Resume" ? "nav-link active" : "nav-link"}>
					Resume
				</Link>
			</Nav.Item>

			<Nav.Item>
				<Link
					to="/Projects"
					onClick={() => handlePageChange("Projects")}
					className={
						currentPage === "Projects" ? "nav-link active" : "nav-link"
					}>
					Projects
				</Link>
			</Nav.Item>
		</Nav>
	);
}

export default Navigation;
