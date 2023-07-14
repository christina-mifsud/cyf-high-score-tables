import PlayerScore from "./PlayerScore";

//////////////// HELP!! /////////////////////////
// I keep getting an error saying allCountryScores.sort is not a function OR allCountryScores is not iterable
// I tried to use spread on it but it still doesn't work
// I initially had everything all in a single component and it worked fine
////////////////////////////////////////////////

function HighScoresTable(allCountryScores) {
  // alphabetical name sorting
  const sortedCountryScores = allCountryScores.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // numerical score sorting
  const sortedScores = sortedCountryScores.map((country) => ({
    // for each country object, a new object is created using object spread ({ ...country }), to create a shallow copy of the country object (so OG sortedCountryScores[] isn't changed)
    ...country,
    scores: country.scores.sort((a, b) => b.s - a.s), // 'scores:' - property name - ':' used to assign the result of sorting the country.scores array (right hand side) will be assigned to the scores property of the new object
  }));

  return (
    <>
      <table>
        <tbody>
          {sortedScores.map((country, index) => {
            return (
              <>
                <tr>
                  <td key={index}>HIGH SCORES: {country.name}</td>
                </tr>
                {country.scores.map((player, scoreIndex) => {
                  return (
                    <tr>
                      <td>
                        <PlayerScore player={player} scoreIndex={scoreIndex} />
                      </td>
                    </tr>
                  );
                })}
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default HighScoresTable;
