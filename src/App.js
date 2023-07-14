import "./App.css";
import allCountryScores from "./scores.js";
import HighScoresTable from "./HighScoresTable";

function App() {
  return (
    <div className="App">
      <HighScoresTable allCountryScores={allCountryScores} />
    </div>
  );
}

export default App;
