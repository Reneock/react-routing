import React from "react";
import { Link } from "react-router-dom";
//import '...///contactpage.avif'

function Contact() {
	return (
		<div>
			<Link to="/contactus:Logo" style={{marginLeft:"560px"}}>Contact the ReactLogo</Link>
			<img src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGFjdCUyMHBhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="vintage phones on wall" style={{height:"70vh", width:"100%"}}/>

		</div>
	);
}

export default Contact;