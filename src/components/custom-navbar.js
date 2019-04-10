import React from 'react'
import { Link } from 'gatsby'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from "reactstrap";
import './custom-navbar.scss'


const CustomNavbar = (props) => {
    let {isHomepage} = props

    let navbarColorClass = isHomepage ? 'custom-navbar-homepage' : 'custom-navbar-not-homepage';


    return(
    <Navbar expand="md">
        <Link
            className={'custom-navbar-brand '+ navbarColorClass }
            to="/"
            style={{fontWeight: '700', letterSpacing:".05rem"}}
        >
            hookedin
        </Link>

        <NavbarToggler />
        <Collapse  navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <Link className={'nav-link '+ navbarColorClass } to="/overview/">Overview</Link>
                </NavItem>
                <NavItem>
                    <a className={'nav-link '+ navbarColorClass } href="https://wallet.hookedin.com/">Wallet</a>
                </NavItem>
                <NavItem>
                    <Link className={'nav-link '+ navbarColorClass } to="/fees/">Fees</Link>
                </NavItem>
                <NavItem>
                    <Link className={'nav-link '+ navbarColorClass } to="/docs/">Docs</Link>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
    )
}
export default CustomNavbar
