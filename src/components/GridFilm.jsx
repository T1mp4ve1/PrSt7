import { Component } from "react";
import { Row, Col } from "react-bootstrap";

class GridFilm extends Component {
  state = {
    arrayMovies: [],
  };

  fetchOMDB = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?s=${this.props.yourSearch}&apikey=f9a6e1d8`
      );
      if (res.ok) {
        const fetchSuccess = await res.json();
        this.setState({ arrayMovies: fetchSuccess.Search });
        console.log(this.props.yourSearch, fetchSuccess.Search);
      } else {
        throw new Error("Fetch Failed");
      }
    } catch (err) {
      console.log("Catch", err);
    }
  };
  componentDidMount() {
    this.fetchOMDB();
  }
  render() {
    return (
      <div className="text-light">
        <h4>{this.props.categoryName}</h4>
        <Row xs={1} md={3} lg={6} className="mb-4">
          {this.state.arrayMovies.slice(0, 6).map((movie) => (
            <Col key={movie.imdbID}>
              <a href="#">
                <img className="imgGrid" src={movie.Poster} />
              </a>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}
export default GridFilm;
