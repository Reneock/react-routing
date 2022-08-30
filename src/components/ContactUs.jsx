import React from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import logo from "..//logo.svg";

function ContactUs() {
	let { id } = useParams();
	return (
		<div>
			<h1>contact details of {id} </h1>

			<Card style={{ width: "18rem", marginLeft: "40px", marginTop: "20px" }}>
				<Card.Img variant="top" src={logo} />
				<Card.Body>
					<Card.Title>REACT LOGO</Card.Title>
					<Card.Text>
					All You Need To Know About The React Logo
					</Card.Text>
					<Button variant="primary" style={{marginLeft: "60px"}}>Logo Info</Button>
				</Card.Body>
			</Card>
		</div>
	);
}

export default ContactUs;