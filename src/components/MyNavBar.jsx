import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/img/logo.png";

function MyNavBar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <div id="navLeft" className="d-flex">
          <Navbar.Brand href="#">
            <img src={logo} alt="NETFLIXlogo" width="99" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <a href="#">Home</a>
              <a href="#">TV Shows</a>
              <a href="#">Movies</a>
              <a href="#">Recently Added</a>
              <a href="#">My List</a>
            </Nav>
          </Navbar.Collapse>
        </div>
        <div id="navRight" className="d-flex">
          <a href="#">
            <i class="bi bi-search"></i>
          </a>
          <a href="#">KIDS</a>
          <a href="#">
            <i class="bi bi-bell"></i>
          </a>
          <a href="#">
            <i class="bi bi-person-circle"></i>
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
