import React, { Component } from 'react'
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
  DropdownItem} from "reactstrap";
import logo from '../assets/Profile.jpg'

export class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <div>
            <NavbarBrand href="/">Tyler Olsen</NavbarBrand>            
          </div>
          <img src={logo} alt={'../assets/Finn.jpg'} width="8%" /> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="https://www.linkedin.com/in/tylerolsen14/">LinkedIn</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TylerOlsen14">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Examples: 
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <a href="https://tutordatabase-4958f.firebaseapp.com/" target="_blank" rel="noopener noreferrer">
                    Tyler's Tutors
                  </a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="https://salty-rogue-app-front-of-house.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                      Salty Rogue Real Estate
                    </a>
                  </DropdownItem>
                  {/* <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
