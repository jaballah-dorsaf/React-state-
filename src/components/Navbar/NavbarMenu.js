import React from "react";
import "./Navbar.css";
import { Navbar, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const NavbarMenu = props => {
  return (
    <div>  
      <Navbar  bg="primary" variant="dark" expand="md">
        <nav className="mr-auto">
        <NavbarBrand>
          <Link to="/">Accueil</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to="/apropos">A propos</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to="/admin">Admin</Link>
        </NavbarBrand>
        <NavbarBrand>
          <Link to="/loginregister">Registrer</Link>
        </NavbarBrand>
        </nav>
      </Navbar>
      </div>
   
  );
};

export default NavbarMenu;
