import React from 'react'
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link, Route } from "react-router-dom";

class Header extends React.Component {
    render() {
        return(
            <Route>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                            <Link to="/about"><Nav.Link href="#about">About</Nav.Link></Link>
                            <Link to="/signin"><Nav.Link href="#signin">Signin</Nav.Link></Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Route>
        )
    }
}

export default Header ;