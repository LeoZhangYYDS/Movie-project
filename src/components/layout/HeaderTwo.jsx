import styles from "./HeaderTwo.module.scss";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const HeaderTwo = () => {
  return (
    <Navbar
      bg="dark"
      expand="md"
      variant="dark"
      className={styles.header}
      fixed="top"
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className={styles.logo}>
          Home Theater
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.flex}>
          <Nav className={`me-auto ${styles.nav}`}>
            <div></div>
            <Nav.Link as={Link} href="/">
              Home
            </Nav.Link>
            <div></div>
            <NavDropdown title="Movies" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} href="/movies">
                Popular Movies
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/movies/toprated">
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/movies/upcoming">
                Up Coming
              </NavDropdown.Item>
            </NavDropdown>
            <div></div>
            <NavDropdown title="TV Show" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} href="/tvshows">
                Popular Shows
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/tvshows/toprated">
                Top Rated
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/tvshows/airingtoday">
                Airing Today
              </NavDropdown.Item>
            </NavDropdown>
            <div></div>
            <Nav.Link as={Link} href="/login">
              Login
            </Nav.Link>
            <div></div>
            <Nav.Link as={Link} href="/register">
              Register
            </Nav.Link>
            <div></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderTwo;
