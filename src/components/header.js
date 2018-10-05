import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <Navbar  inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>

                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} >
                        <NavLink exact activeClassName='active' to='/buses'>Buses</NavLink>
                    </NavItem>
                    <NavItem eventKey={2} >
                        <NavLink exact activeClassName='active' to='/route'>Routes</NavLink>
                    </NavItem>
                    <NavItem eventKey={3} >
                        <NavLink activeClassName='active' to='/fare'>Fare</NavLink>
                    </NavItem>
                    <NavItem eventKey={4} >
                        <NavLink activeClassName='active' to='/card'>Card</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}

export default Header;