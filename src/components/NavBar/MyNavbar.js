import React, { Component } from 'react';
import './Stylesheet.css'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'


class MyNavbar extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      navCollapsed: true,
      showNavBar: false
    };    
  }

  toggle() {
    console.log("clicked");

    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="custom-navbar">
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand href="/">Urban Save</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about">About Us</Nav.Link>
              <NavDropdown title="Products" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/tables">Office Tables</NavDropdown.Item>
                <NavDropdown.Item href="/chairs">Office Chairs</NavDropdown.Item>
                <NavDropdown.Item href="/other-equipments">Other Office Equipments</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <NavDropdown title="Login">
                <NavDropdown.Item href="/sign-in">Sign In</NavDropdown.Item>
                <NavDropdown.Item href="/sign-up">Sign Up</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/shopping-cart">Shopping Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}
export default MyNavbar