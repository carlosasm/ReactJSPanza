import React from 'react'
import * as ReactBootstrap from 'react-bootstrap'

const Inicio = () => {
    return (
        <div>
            <ReactBootstrap.Navbar bg="dark" variant="dark" expand="md">
                <ReactBootstrap.Navbar.Brand href="#home">Panza Admin</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="mr-auto">
                        <ReactBootstrap.Nav.Link href="#home">Home</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.NavDropdown title="Host" id="collasible-nav-dropdown">
                            <ReactBootstrap.NavDropdown.Item href="#action/3.1">New Host</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.2">Update Host</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.3">Delete Host</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.3">List Hosts</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Divider />
                            <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                        </ReactBootstrap.NavDropdown>
                        <ReactBootstrap.NavDropdown title="Menu" id="collasible-nav-dropdown">
                            <ReactBootstrap.NavDropdown.Item href="#action/3.1">New Menu</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.2">New Item</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.3">Update Item</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.3">Delete Item</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Item href="#action/3.3">List Items from Host</ReactBootstrap.NavDropdown.Item>
                            <ReactBootstrap.NavDropdown.Divider />
                            <ReactBootstrap.NavDropdown.Item href="#action/3.4">Separated link</ReactBootstrap.NavDropdown.Item>
                        </ReactBootstrap.NavDropdown>
                    </ReactBootstrap.Nav>
                    <ReactBootstrap.Form inline>
                        <ReactBootstrap.FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <ReactBootstrap.Button variant="outline-success">Search</ReactBootstrap.Button>
                    </ReactBootstrap.Form>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
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