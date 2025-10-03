import { Row } from "react-bootstrap";

function FooterNetflix() {
  return (
    <>
      <footer className="container-fluid">
        <Row className="d-flex justify-content-center mt-5">
          <div className="col col-6">
            <div className="row">
              <div className="col mb-2">
                <a href="#" alt="footer link">
                  <i className="bi bi-facebook footer-icon me-2"></i>
                </a>
                <a href="#" alt="footer link">
                  <i className="bi bi-instagram footer-icon me-2"></i>
                </a>
                <a href="#" alt="footer link">
                  <i className="bi bi-twitter-x footer-icon me-2"></i>
                </a>
                <a href="#" alt="footer link">
                  <i className="bi bi-youtube footer-icon"></i>
                </a>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4">
              <div className="col">
                <div className="row">
                  <div className="col d-flex flex-column">
                    <a href="#" alt="footer link">
                      Audio and Subtitles
                    </a>

                    <a href="#" alt="footer link">
                      Media Center
                    </a>

                    <a href="#" alt="footer link">
                      Privacy
                    </a>

                    <a href="#" alt="footer link">
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col d-flex flex-column">
                    <a href="#" alt="footer link">
                      Audio Description
                    </a>

                    <a href="#" alt="footer link">
                      Investor Relations
                    </a>

                    <a href="#" alt="footer link">
                      Legal Notices
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col d-flex flex-column">
                    <a href="#" alt="footer link">
                      Help Center
                    </a>

                    <a href="#" alt="footer link">
                      Jobs
                    </a>

                    <a href="#" alt="footer link">
                      Cookie Preferences
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="row">
                  <div className="col d-flex flex-column">
                    <a href="#" alt="footer link">
                      Gift Cards
                    </a>
                    <a href="#" alt="footer link">
                      Terms of Use
                    </a>
                    <a href="#" alt="footer link">
                      Corporate Information
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button
                  id="btnFooter"
                  type="button"
                  className="btn btn-sm rounded-0 my-3"
                >
                  Service Code
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col mb-2 mt-2 copyright">
                <p>© 1997-2023 Netflix, Inc.</p>
              </div>
            </div>
          </div>
        </Row>
      </footer>
    </>
  );
}
export default FooterNetflix;
