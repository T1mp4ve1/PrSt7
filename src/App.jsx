import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Container } from "react-bootstrap";
import MyNavBar from "./components/MyNavBar";
import GenresMenu from "./components/GenresMenu";
import GridFilm from "./components/GridFilm";
import FooterNetflix from "./components/FooterNetflix";
// import FetchTest from "./components/FetchTest";

function App() {
  return (
    <>
      <MyNavBar />
      <Container fluid className="px-4">
        <GenresMenu />
        <main>
          <GridFilm categoryName={"Trending Now"} yourSearch={"Scary Movie"} />
          <GridFilm categoryName={"Watch it Again"} yourSearch={"comedy"} />
          <GridFilm categoryName={"New Releases"} yourSearch={"fantozzi"} />
        </main>
      </Container>
      <FooterNetflix />
    </>
  );
}
export default App;
