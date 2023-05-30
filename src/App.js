import './styles/App.css';
import { Route, Routes } from "react-router-dom";
import Quizz from "./components/Quizz";
import FilmCard from "./components/FilmCard";
import NavBar from "./components/NavBar";

function App() {
  return (
      <div className="App">
        <NavBar />
       <div class="film">
      <FilmCard />
          <Routes>
                <Route path="/quizz" element={<Quizz />} />
          </Routes>
       </div>
      </div>
  );
}

export default App;
