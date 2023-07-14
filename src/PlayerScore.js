function PlayerScore(player, scoreIndex) {
  return (
    <>
      <tr key={scoreIndex}>
        <td>{player.score.n}</td>
        <td>{player.score.s}</td>
      </tr>
    </>
  );
}
export default PlayerScore;
