import React, { Component } from "react";
import axios from "axios";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const NavbarStyle = {
      "background-color": "#007bff"
    };
    const textColor = {
      color: "white",
      "text-align": "center"
    };
    return (
      <Navbar light expand="md" style={NavbarStyle}>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink style={textColor} href="/home">
                HOME
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle style={textColor} nav caret>
                USERS
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem href="/entryfrom">ADD</DropdownItem>
                <DropdownItem href="/delete">VIEW</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink style={textColor} href="/login">
                LOGIN
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={textColor} href="/insurence">
                REGISTRATION
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
export default Header;
