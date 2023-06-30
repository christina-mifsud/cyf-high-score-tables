import "./App.css";
import allCountryScores from "./scores.js";

function App() {
  const sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="App">
      <>
        <h1>High Scores per Country</h1>
        <table className="table">
          <tbody>
            {sortedCountryScores.map((country, index) => {
              return (
                <>
                  <h2 key={index}>HIGH SCORES: {country.name}</h2>
                  {country.scores.map((score, scoreIndex) => {
                    return (
                      <tr key={scoreIndex}>
                        <td>{score.n}</td>
                        <td>{score.s}</td>
                      </tr>
                    );
                  })}
                </>
              );
            })}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default App;
