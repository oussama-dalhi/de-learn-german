import { useEffect, useState } from "react";
import { ArrowLeft, House, Volume2 } from "lucide-react";
import { shuffleArray } from "../utils/shuffle";
import A1 from "../data/A1.json";
import A2 from "../data/A2.json";
import B1 from "../data/B1.json";
import "./FlashCards.css";
import useLocalStorage from "../hooks/useLocalStorage";
const levels = {
  A1,
  A2,
  B1,
};
function FlashCards({ selectedLevel, setAppStarted, shuffle }) {
const storageKey = shuffle
  ? `currentIndex-${selectedLevel}-shuffle`
  : `currentIndex-${selectedLevel}`;

const [currentIndex, setCurrentIndex] = useLocalStorage(storageKey, 0);
  const [showAnswer, setShowAnswer] = useState(false);

  const [currentLevel] = useState(() => {
    const level = levels[selectedLevel];
    return shuffle ? shuffleArray(level) : level;
  });

  const currentPhrase = currentLevel[currentIndex];
  function handleNextPhrase() {
    setCurrentIndex((prev) =>
      prev === currentLevel.length - 1 ? 0 : prev + 1,
    );
    setShowAnswer(false);
  }
  function handlePrevPhrase() {
    setCurrentIndex((prev) =>
      prev === 0 ? currentLevel.length - 1 : prev - 1,
    );
    setShowAnswer(false);
  }
  function speak(phrase) {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(phrase);
    utterance.lang = "de-DE";
    utterance.rate = 0.9;
    speechSynthesis.speak(utterance);
  }
  useEffect(() => {
    speak(currentPhrase.german);
  }, [currentPhrase]);
  return (
    <div className="flashcards-screen">
      <div className="flashcard">
        <div className="flashcard-header">
          <button
            className="icon-btn"
            aria-label="Home Button"
            onClick={() => setAppStarted(false)}
          >
            <House size={20} />
          </button>
          <p className="progress">
            Card: <span className="progress-number">{currentIndex + 1}</span>{" "}
            / <span className="progress-number">{currentLevel.length}</span>
          </p>
          <button
            className="icon-btn"
            aria-label="previos phrase"
            onClick={handlePrevPhrase}
          >
            <ArrowLeft size={20} />
          </button>
        </div>
        <div className="german-container">
          <p className="german-text">{currentPhrase.german}</p>

          <button
            className="volume-btn"
            aria-label="Play pronunciation"
            onClick={() => speak(currentPhrase.german)}
          >
            <Volume2 size={18} />
          </button>
        </div>
        <p className="english-text">
          {showAnswer ? currentPhrase.english : ""}
        </p>
        <div className="flashcard-buttons">
          <button className="answer-btn" onClick={() => setShowAnswer(true)}>
            Show Answer
          </button>

          <button className="next-btn" onClick={handleNextPhrase}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
export default FlashCards;
