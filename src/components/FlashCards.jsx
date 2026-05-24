import { useState } from "react";
import A1 from "../data/A1";
import A2 from "../data/A2";
import B1 from "../data/B1";
import './FlashCards.css'
function FlashCards({ selectedLevel }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);
    const levels = {
        A1,
        A2,
        B1
    };
    const currentLevel = levels[selectedLevel];
    const currentPhrase = currentLevel[currentIndex];
    function handleNextPhrase() {
        setCurrentIndex(prev => prev + 1);
        setShowAnswer(false);
    }

    return (
        <div className="flashcards-screen">
            <div className="flashcard">
                <p className="german-text">
                    {currentPhrase.german}
                </p>
                <p className="english-text">
                    {showAnswer ? currentPhrase.english : ''}
                </p>
                <div className="flashcard-buttons">
                    <button
                    className="answer-btn"
                    onClick={() => setShowAnswer(true)}
                    >
                    Show Answer
                    </button>

                    <button
                    className="next-btn"
                    onClick={handleNextPhrase}
                    >
                    Next
                    </button>
                </div>
            </div>
        </div>
    );
}
export default FlashCards;