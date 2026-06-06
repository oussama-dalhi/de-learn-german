import "./SetupScreen.css";
function SetupScreen({ selectedLevel, setSelectedLevel, setAppStarted }) {
  function handleStart() {
    speechSynthesis.cancel();
    speechSynthesis.getVoices();

    const warmup = new SpeechSynthesisUtterance("");
    warmup.volume = 0;
    speechSynthesis.speak(warmup);

    setAppStarted(true);
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
          <button className="start-btn" onClick={handleStart}>
            Start Learning
          </button>
        </div>
      </div>
    </div>
  );
}
export default SetupScreen;
