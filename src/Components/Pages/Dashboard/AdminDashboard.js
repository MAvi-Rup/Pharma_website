import { signOut } from "firebase/auth";
import React from "react";
import { Navbar, Nav, Container, Row, Col, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import SalesGraph from "./SalesGraph";

const AdminDashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
        signOut(auth);
        navigate('/')

    };
    return (
        <>
            <Navbar bg="primary" expand="lg" style={{ marginTop: '-18px' }}>
                <Navbar.Brand href="#" style={{ color: "#fff" }} className="container">
                    Admin Dashboard
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ color: "#fff" }}>

                        <Nav.Link href="#" className="text-whites" onClick={logout}>Logout</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container fluid>
                <Row>
                    <Col md={2} style={{ backgroundColor: "#f2f2f2" }}>
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link href="#">Dashboard</Nav.Link>
                            <Nav.Link href="#">All Employees</Nav.Link>
                            {/* <NavDropdown title="Reports" id="basic-nav-dropdown">
                <NavDropdown.Item href="#">Sales Report</NavDropdown.Item>
                <NavDropdown.Item href="#">Gross Revenue</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">Yearly Sales</NavDropdown.Item>
              </NavDropdown> */}
                            <Nav.Link  data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                Reports
                            </Nav.Link>
                            <div class="collapse ms-3" id="collapseExample">
                            <Nav.Link href="#">Sales Report</Nav.Link>
                            <Nav.Link href="#">Gross Revenue</Nav.Link>
                            <NavDropdown.Divider />
                            <Nav.Link href="#">Yearly Sales</Nav.Link>
                                
                            </div>
                        </Nav>
                    </Col>
                    <Col md={10}>
                        <h1>Welcome to the Admin Dashboard</h1>
                        
                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default AdminDashboard;
