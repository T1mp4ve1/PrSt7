import { Row, Col } from "react-bootstrap";
import img1 from "../assets/img/1.png";

function GridFilm() {
  return (
    <div className="text-light">
      {/* Grid-1 */}
      <h4>Trending Now</h4>
      <Row xs md={3} lg={6} className="mb-4">
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
      </Row>

      {/* Grid-2 */}
      <h4>Watch it Again</h4>
      <Row xs md={3} lg={6} className="mb-4">
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
      </Row>

      {/* Grid-3 */}
      <h4>New Releases</h4>
      <Row xs md={3} lg={6} className="mb-4">
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
        <Col>
          <a href="#">
            <img className="img-fluid imgGrid" src={img1} />
          </a>
        </Col>
      </Row>
    </div>
  );
}
export default GridFilm;
