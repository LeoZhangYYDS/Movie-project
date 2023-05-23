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
            className={`me-auto my-2 my-lg-0 ${styles.grid}`}
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <div></div>
            <NavDropdown title="Movies" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/movies">Popular</NavDropdown.Item>
              <NavDropdown.Item href="/movies/upcoming">
                Up Coming
              </NavDropdown.Item>
              <NavDropdown.Item href="/movies/toprated">
                Top Rated
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="TV Shows" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/tvshows">Popular</NavDropdown.Item>
              <NavDropdown.Item href="/tvshows/airingtoday">
                Airing Today
              </NavDropdown.Item>
              <NavDropdown.Item href="/tvshows/toprated">
                Top Rated
              </NavDropdown.Item>
            </NavDropdown>
            <div></div>

            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
