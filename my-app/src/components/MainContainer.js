import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import Footer from "./Footer";
import Header from "./Header";

//function to render different pages from inside the Main container.
function MainContainer() {
	const [currentPage, setCurrentPage] = useState("");

	const handlePageChange = (page) => setCurrentPage(page);
	//Always have Header and Footer and Navigation displayed. current page will also be displayed.
	return (
		<div className="MainContainer">
			<Header />
			<Navigation
				currentPage={currentPage}
				handlePageChange={handlePageChange}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
				<Route path="/Resume" element={<Resume />} />
				<Route path="/Projects" element={<Projects />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default MainContainer;
