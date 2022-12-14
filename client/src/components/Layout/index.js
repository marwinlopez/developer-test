import { Outlet, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import './layout.css'

const Layout = () => {
  return (
    <>
      <Navbar bg="primary" expand="lg">
        <Link to="/" className="nav">
          <Navbar.Brand className="link">Mi Blog</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="link" to="/post">Nuevo Posts</Link>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Outlet />
    </>
    
  );
};

export default Layout;
