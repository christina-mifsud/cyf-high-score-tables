import "./App.css";
import allCountryScores from "./scores.js";

function App() {
  const sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  let sortedScores = sortedCountryScores.map((country) => ({
    // for each country object, a new object is created using object spread ({ ...country }), to create a shallow copy of the country object (so OG sortedCountryScores[] isn't changed)
    ...country,
    scores: country.scores.sort((a, b) => b.s - a.s), // 'scores:' - property name - ':' used to assign the result of sorting the country.scores array (right hand side) will be assigned to the scores property of the new object
  }));

  return (
    <div className="App">
      <>
        <h1>High Scores per Country</h1>
        <table className="table">
          <tbody>
            {sortedScores.map((country, index) => {
              // first map to get country.name & country.scores
              return (
                <>
                  <h2 key={index}>HIGH SCORES: {country.name}</h2>
                  {country.scores.map((score, scoreIndex) => {
                    // second map to get into country.scores & get score.n & score.s
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
