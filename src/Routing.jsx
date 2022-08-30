import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Details from "./components/Details";
import Projects from "./components/Projects";
import Navbars from "./components/Navbars";
import ErrorPage from "./components/ErrorPage";
import ContactUs from "./components/ContactUs";

function Routing() {
	return (
		<BrowserRouter>
			<Navbars />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/details" element={<Details />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="*" element={<ErrorPage />} />
				<Route path="/contactus:id" element={<ContactUs />} />
			</Routes>
		</BrowserRouter>
	);
}

export default Routing;