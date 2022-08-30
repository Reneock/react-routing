import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Home() {
	let navigate = useNavigate();

	return (
		<div>
		  <h1 style={{textAlign:"center"}}> Home Page </h1>
			<img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMHBhZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="a homescreen on a laptop" style={{height:"50vh", width:"100%", marginBottom:"10px"}}/>
			<div style={{textAlign:"center"}}>
			<Link to="/contact" style={{marginBottom: "35px"}}>Contact</Link>
			
			<Button onClick={() => {navigate("/projects")}} style={{marginLeft: "15px", marginBottom: "10px", padding:"2px 2px"}}> Projects </Button>
			<br/>
			<Link to="/contactus:ReactLogo" >Details of React Logo</Link>
			</div>
		</div>
	);
}

export default Home;