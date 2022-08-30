import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbars() {
	return (
		<>
			<Navbar bg="secondary" className="mb-3">
				<Container fluid>
					<Navbar.Brand href="#"> <Link to="/details">Details</Link></Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Offcanvas placement="end">
						{/* <Offcanvas.Header closeButton> */}
						{/* <Offcanvas.Title> */}

						{/* </Offcanvas.Title> */}
						{/* </Offcanvas.Header> */}
						<Offcanvas.Body>
							<Nav className="justify-content-end flex-grow-1 pe-3">
								<Nav.Link><Link to="/">Home</Link></Nav.Link>
								<Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
								<NavDropdown style={{color: "white"}} title="Dropdown" >
									<NavDropdown.Item href="#action3"><Link to="/project">project</Link>
									</NavDropdown.Item>
									<NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
								</NavDropdown>
							</Nav>

							<Form className="d-flex">
								<Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
								<Button variant="outline-info">Search</Button>
							</Form>
						</Offcanvas.Body>
					</Navbar.Offcanvas>
				</Container>
			</Navbar>
		</>
	);
}

export default Navbars;