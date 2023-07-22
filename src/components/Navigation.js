import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

function Navigation() {
  return (
    <Dropdown class= 'dropdown' style={{ float: 'right', paddingRight: '40px' }}>
      <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
        Navigation
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/">About Me</Dropdown.Item>
        <Dropdown.Item as={Link} to="/projects">Portfolio</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Navigation;
