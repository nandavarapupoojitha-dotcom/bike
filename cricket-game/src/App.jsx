import { useState } from "react";
import "./App.css";

function App() {
  const [team1, setTeam1] = useState("");
  const [team2, setTeam2] = useState("");
  const [batting, setBatting] = useState("");
  const [score, setScore] = useState(0);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [winner, setWinner] = useState("");

  const toss = () => {
    if (team1 === "" || team2 === "") {
      alert("Enter both team names");
      return;
    }

    const tossWinner = Math.random() > 0.5 ? team1 : team2;
    setBatting(tossWinner);
  };

  const addRun = (run) => {
    if (overs < 5 && wickets < 10) {
      setScore(score + run);
    }
  };

  const wicket = () => {
    if (wickets < 10) {
      setWickets(wickets + 1);
    }
  };

  const over = () => {
    if (overs < 5) {
      setOvers(overs + 1);
    }

    if (overs === 4) {
      setWinner(`${batting} scored ${score} runs`);
    }
  };

  const reset = () => {
    setScore(0);
    setWickets(0);
    setOvers(0);
    setWinner("");
    setBatting("");
  };

  return (
    <div className="container">
      <h1>🏏 Cricket Game</h1>

      <input
        type="text"
        placeholder="Enter Team 1"
        value={team1}
        onChange={(e) => setTeam1(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Team 2"
        value={team2}
        onChange={(e) => setTeam2(e.target.value)}
      />

      <h2>{team1 || "Team 1"} vs {team2 || "Team 2"}</h2>

      <button onClick={toss}>Toss</button>

      {batting && <h3>Batting First: {batting}</h3>}

      <h2>Score: {score}/{wickets}</h2>
      <h3>Overs: {overs}/5</h3>

      <button onClick={() => addRun(1)}>1</button>
      <button onClick={() => addRun(2)}>2</button>
      <button onClick={() => addRun(4)}>4</button>
      <button onClick={() => addRun(6)}>6</button>
      <button onClick={wicket}>Wicket</button>
      <button onClick={over}>Over</button>

      {winner && <h2>{winner}</h2>}

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;