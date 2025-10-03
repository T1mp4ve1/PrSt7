import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavBar from "./components/MyNavBar";
import GenresMenu from "./components/GenresMenu";

function App() {
  return (
    <>
      <MyNavBar />
      <GenresMenu />
    </>
  );
}

export default App;