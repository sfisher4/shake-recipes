import React from 'react';

// I am importing these separately because typescript was complaining. There might be a better way.
import Navbar from 'react-bootstrap/Navbar';
import Toggle from 'react-bootstrap/NavbarToggle';
import Collapse from 'react-bootstrap/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import { LinkContainer, IndexLinkContainer } from 'react-router-bootstrap';

// TODO: Make the linkcontainer follow the same style as react

export const NavBar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <IndexLinkContainer to="/">
      <Navbar.Brand>Shake Recipes</Navbar.Brand>
    </IndexLinkContainer>
    <Toggle aria-controls="basic-navbar-nav" />
    <Collapse id="basic-navbar-nav">
      <Nav className="main-nav">
        <LinkContainer to="/add" activeStyle={{ fontWeight: 'bold' }}>
          <NavItem event-key={1}>Add Recipe</NavItem>
        </LinkContainer>
        <LinkContainer to="/browse" activeStyle={{ fontWeight: 'bold' }}>
          <NavItem event-key={2}>Browse Recipes </NavItem>
        </LinkContainer>
      </Nav>
    </Collapse>
  </Navbar>
);
