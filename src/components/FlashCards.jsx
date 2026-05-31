import { useState } from "react";
import { ArrowLeft, House } from "lucide-react";
import A1 from "../data/A1.json";
import A2 from "../data/A2.json";
import B1 from "../data/B1.json";
import './FlashCards.css'
function FlashCards({ selectedLevel, setAppStarted }) {
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
        setCurrentIndex(prev => 
            prev === currentLevel.length - 1 ? 0 : prev + 1);
        setShowAnswer(false);
    }
    function handlePrevPhrase() {
        setCurrentIndex(prev => 
            prev === 0 ? currentLevel.length - 1 : prev - 1);
        setShowAnswer(false);
    }
    return (
        <div className="flashcards-screen">
            <div className="flashcard">
                <div className="flashcard-header">
                    <button
                    className="icon-btn"
                    onClick={() => setAppStarted(false)}
                    >
                    <House size={20} />
                    </button>
                    <p className="progress">
                       {currentIndex + 1} / {currentLevel.length}
                    </p>
                    <button
                    className="icon-btn"
                    onClick={handlePrevPhrase}
                    >
                    <ArrowLeft size={20} />
                    </button>
                </div>
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