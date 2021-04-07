import React from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const Inicio = () => {
    return (
        <div>
            
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="#home">Panza Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Host" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">New Host</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Update Host</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Delete Host</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">List Hosts</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">New Menu</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">New Item</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Update Item</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Delete Item</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">List Items from Host</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            {/**
             * <div>
                <ReactBootstrap.Form>
                    <ReactBootstrap.Form.Group controlId="exampleForm.ControlInput1">
                        <ReactBootstrap.Form.Label>Email address</ReactBootstrap.Form.Label>
                        <ReactBootstrap.Form.Control type="email" placeholder="name@example.com" />
                    </ReactBootstrap.Form.Group>
                    <ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect1">
                        <ReactBootstrap.Form.Label>Example select</ReactBootstrap.Form.Label>
                        <ReactBootstrap.Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </ReactBootstrap.Form.Control>
                    </ReactBootstrap.Form.Group>
                    <ReactBootstrap.Form.Group controlId="exampleForm.ControlSelect2">
                        <ReactBootstrap.Form.Label>Example multiple select</ReactBootstrap.Form.Label>
                        <ReactBootstrap.Form.Control as="select" multiple>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </ReactBootstrap.Form.Control>
                    </ReactBootstrap.Form.Group>
                    <ReactBootstrap.Form.Group controlId="exampleForm.ControlTextarea1">
                        <ReactBootstrap.Form.Label>Example textarea</ReactBootstrap.Form.Label>
                        <ReactBootstrap.Form.Control as="textarea" rows={3} />
                    </ReactBootstrap.Form.Group>
                </ReactBootstrap.Form>
            </div>
             */}
        </div>
    )
}

export default Inicio