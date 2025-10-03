import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import GenresMenu from "./components/GenresMenu";
import GridFilm from "./components/GridFilm";
import FooterNetflix from "./components/FooterNetflix";

function App() {
  return (
    <>
      <MyNavBar />
      <Container fluid className="px-4">
        <GenresMenu />
        <GridFilm />
      </Container>
      <FooterNetflix />
    </>
  );
}

export default App;
