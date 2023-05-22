import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import styles from "./Header.module.scss";
import Link from "next/link";

function NavScrollExample() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Home Theater</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Movies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/movies">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Up Coming</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Top Rated</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action2">All Shows</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Popular</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Airing Today</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Top Rated</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1">Login</Nav.Link>
            <Nav.Link href="#action2">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
