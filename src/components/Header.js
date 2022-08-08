import React, { Component } from 'react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';



export class Header extends Component {
    render() {
      return (
      <div className="Header">
      <DropdownButton id="Home" title="options">
      <Dropdown.Item href="#/action-1"><LoginButton/></Dropdown.Item>
      <Dropdown.Item href="#/action-2"><LogoutButton/></Dropdown.Item>
      </DropdownButton>
        </div>   
        
      )
    }
  }
  
  export default Header;
  