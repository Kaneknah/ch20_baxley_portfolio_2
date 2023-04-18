import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Projects from "./Projects";
import Footer from "./Footer";
import Header from "./Header";

 function MainContainer() {
	const [currentPage, setCurrentPage] = useState("");

	const HandlePageChange = (page) => setCurrentPage(page);

	return (
		<div>
			<Header />
			<Navigation
				currentPage={currentPage}
				HandlePageChange={HandlePageChange}
			/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/resume" element={<Resume />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default MainContainer;