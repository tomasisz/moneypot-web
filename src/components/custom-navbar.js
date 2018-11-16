import React from 'react'
import { Link } from 'gatsby'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import logo from '../images/logo.png'

const CustomNavbar = () => (
    <Navbar color="light" light expand="md">
        <Link
            className="navbar-brand"
            to="/"
            style={{fontWeight: '700'}}
        >
            Hookedin
        </Link>
        <img
            src={logo}
            alt="Hookedin Logo"
            style={{ maxHeight: '40px', margin: 0}}
        />
        <NavbarToggler />
        <Collapse  navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className="nav-link" to="/overview/">Overview</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/docs/">Docs</Link>
                </NavItem>
                <NavItem>
                    <Link className="nav-link" to="/tools/">Tools</Link>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
)
export default CustomNavbar
