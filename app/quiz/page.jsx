"use client";
import { useState } from "react";
import styles from "./styles.module.css";

const questions = [
    {
        question: "What is 2 + 2",
        options: [
            { text: "10", correct: false },
            { text: "4", correct: true }
        ]
    },

    {
        question: "What is today's date?",
        options: [
            { text: "16th Jan", correct: true },
            { text: "29th Feb", correct: false }
        ]
    }
];

function Quiz() {
    const[currentIndex, setCurrentIndex] = useState(0);
    const[score, setScore] = useState(0);
    const[answered, setAnswered] = useState(false);
    const[finished, setFinished] = useState(false);
    const[isCorrect, setIsCorrect] = useState(null);

    const handleAnswer = (correct) => {
        if (!answered) {
            setIsCorrect(correct);

            if (correct) {
                setScore(prev => prev + 1);
            }
            setAnswered(true);
        };
    };

    const nextQuestion = () => {
        if (currentIndex + 1 < questions.length) {
            setCurrentIndex(prev => prev + 1);
            setAnswered(false);
            setIsCorrect(null);
        }
        else {
            setFinished(true);
        }
    };

    if (finished) {
        return (
            <div>
                <h2>You have reached the end of the quiz...</h2>
                <p>Your final score is {score} / {questions.length}</p>
            </div>
        );
    };

    const CurrentQuestions = questions[currentIndex];

    return (
        <div className={styles.questionformat}>
            <h2>Question {currentIndex + 1}</h2>
            <p>{CurrentQuestions.question}</p>

            {CurrentQuestions.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.correct)}
                  disabled={answered}
                  style={{display: "block", margin: "8px 0"}}
                >
                    {option.text}
                </button>
            ))}

            {answered && (
                <>
                  <p>
                    {isCorrect ? "Correct" : "Wrong"}
                  </p>

                  <button onClick={nextQuestion}>
                    {currentIndex + 1 === questions.length ? "Check your final score" : "Next Question..."}
                  </button>
                </>
            )}
        </div>
    );
}

export default Quiz;