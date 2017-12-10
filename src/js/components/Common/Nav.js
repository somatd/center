import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';

class NavbarInstance extends React.Component{

render(){
  const { handleDataSet } = this.props;
  console.log('hand: ', handleDataSet);
return(
    <div>
 <Navbar inverse collapseOnSelect>
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1} href="/" value ="first" onClick={({target})=> handleDataSet(target.value)}>Auth History</NavItem>
        <NavItem eventKey={2} href="/" value ="second" onClick={({target})=> handleDataSet(target.value)}>Auth Session</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
)}
};

export default NavbarInstance;
