import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

function GenresMenu() {
  return (
    <>
      <Container fluid className="px-4 d-flex justify-content-between">
        <div className="d-flex">
          <h2 className="text-light me-4 mb-0">TV Shows</h2>
          <Dropdown className="d-flex">
            <Dropdown.Toggle
              variant="black"
              id="dropdown-basic"
              className="border border-secondary rounded-0 text-light btn-sm"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div id="GenresRight" className="d-flex">
          <a href="#">
            <i className="bi bi-grid"></i>
          </a>
          <a href="#">
            <i className="bi bi-grid-3x3"></i>
          </a>
        </div>
      </Container>
    </>
  );
}
export default GenresMenu;
