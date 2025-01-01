import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/NavBar";
import GamePage from "./pages/GamePage";
function App() {
  return (
    <div>
      <Navbar />
      <GamePage />
    </div>
  );
}

export default App;
