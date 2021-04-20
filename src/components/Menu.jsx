import React, {useState, useEffect} from 'react'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'
import { auth } from '../firebaseconfig'
import {Link, useHistory} from 'react-router-dom'

const Menu = () =>{
    const history = useHistory()
    const [usuario, setUsuario] = useState(null)
    /** Comprueba si hay un usuario activo **/
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                setUsuario(user.email)
                console.log(user.email)
            }
        })
    }, [])

    const cerrarSesion = () => {
        auth.signOut()
        setUsuario(null)
        history.push('/')
    }

    return (
        <div>
            
            <Navbar bg="dark" variant="dark" expand="md">
                <Navbar.Brand href="#home">Panza Admin</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Host" id="collasible-nav-dropdown">
                            <Link className="nav-dropdown-item" to='/'>MENUU</Link>
                            <NavDropdown.Item href="#action/3.1" to='/Formulario'>New Host</NavDropdown.Item>
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
                        {
                            usuario ? <Button onClick={cerrarSesion} variant="outline-success">Log Out</Button> 
                            : <span></span>
                        }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        
        </div>
    )
}

export default Menu