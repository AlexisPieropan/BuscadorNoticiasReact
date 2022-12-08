import NewspaperIcon from "@mui/icons-material/Newspaper";
import { Navbar } from "react-bootstrap";
import React from "react";
import "../App.css";
//import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from '@mui/icons-material/Home';
import "bootstrap/dist/css/bootstrap.min.css";
function Header() {
  return (
    <Navbar className="custom-navbar" variant="dark">
      <Navbar.Collapse id="basic-navbar-nav">
        <Navbar.Brand href="/">
          <NewspaperIcon />
          <span>TheNewsEngine</span>
        </Navbar.Brand>
      </Navbar.Collapse>
      <Navbar.Text className="navbar-search">
        <Navbar.Brand href="/busqueda">
          <HomeIcon/>
        </Navbar.Brand>
      </Navbar.Text>
    </Navbar>
  );
}

export default Header;
