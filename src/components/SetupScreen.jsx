import Papa from "papaparse";
import useLocalStorage from "../hooks/useLocalStorage";
import "./SetupScreen.css";
function SetupScreen({
  selectedLevel,
  setSelectedLevel,
  setAppStarted,
  setShuffle,
  shuffle,
}) {
  const [customCards, setCustomCards] = useLocalStorage("customCards", []);
  function handleInput(e) {
    const file = e.target.files[0];
    if (!file) return;

    Papa.parse(file, {
      complete: (result) => {
        const cards = result.data
          .filter((item) => item[0] && item[1])
          .map((card) => {
            return {
              german: card[0],
              english: card[1],
            };
          });
        setCustomCards((prev) => [...prev, ...cards]);
      },
    });
  }
  return (
    <div className="setup-screen">
      <div className="setup-card">
        <div className="titles">
          <h1>
            <img
              src="https://flagcdn.com/40x30/de.png"
              srcset="https://flagcdn.com/80x60/de.png 2x,
                https://flagcdn.com/120x90/de.png 3x"
              width="40"
              height="30"
              alt="Germany"
            ></img>{" "}
            Learn German
          </h1>

          <p className="description">
            Master vocabulary with flashcards and example sentences
          </p>
          <h2>Choose your current level</h2>
        </div>
        <div className="levels">
          <button
            className={selectedLevel === "A1" ? "active" : ""}
            onClick={() => setSelectedLevel("A1")}
          >
            A1 Beginner
          </button>
          <button
            className={selectedLevel === "A2" ? "active" : ""}
            onClick={() => setSelectedLevel("A2")}
          >
            A2 Elementary
          </button>
          <button
            className={selectedLevel === "B1" ? "active" : ""}
            onClick={() => setSelectedLevel("B1")}
          >
            B1 Intermediate
          </button>

          <button
            disabled={customCards.length === 0}
            title={customCards.length === 0 ? "Import a CSV first" : ""}
            className={`custom-btn ${selectedLevel === "CUSTOM" ? "active" : ""}`}
            onClick={() => setSelectedLevel("CUSTOM")}
          >
            My Cards:{" "}{customCards.length} cards
          </button>
          <label htmlFor="csv-upload" className="csv-upload-btn">
            Import CSV 
          </label>
          <input type="file"
           onChange={handleInput}
            accept=".csv"
            id="csv-upload"
            hidden
             /> 
          <button
            className={`shuffle-btn ${shuffle ? "active" : ""}`}
            onClick={() => setShuffle((prev) => !prev)}
          >
            {shuffle ? "✓ Shuffle Cards" : "Shuffle Cards"}
          </button>
          <button className="start-btn" onClick={() => setAppStarted(true)}>
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}
export default SetupScreen;
