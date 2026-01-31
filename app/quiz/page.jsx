"use client";
import { useState, useEffect } from "react";
import styles from "./styles.module.css";

const questions = [
    {
        question: "How does the EMF meter work?",
        options: [
            { text: "It works by using hydroelectric power", correct: false },
            { text: "It works by using fossil fuels", correct: false },
            { text: "It works by using radiowaves", correct: false },
            { text: "It works by responding to anything electronic", correct: true }
        ]
    },

    {
        question: "What does REM pod use?",
        options: [
            { text: "It uses presence detection", correct: true },
            { text: "It uses electronic signals", correct: false },
            { text: "It uses magnetic force", correct: false },
            { text: "It uses binary code", correct: false }
        ]
    },

    {
        question: "When was the Tower of London founded?",
        options: [
            { text: "1026", correct: false },
            { text: "1067", correct: false },
            { text: "1027", correct: false },
            { text: "1066", correct: true }
        ]
    },

    {
        question: "What is Salem most known for?",
        options: [
            { text: "Ghosts from all over the world come here to party", correct: false },
            { text: "The witch trials", correct: true },
            { text: "The massacre of the vampires", correct: false },
            { text: "The site of the deaths of Harry Potter's parents", correct: false }
        ]
    },

    {
        question: "What is the name of the game that is believed to act as a bridge between the living and the spirit world?",
        options: [
            { text: "Duck duck goose", correct: false },
            { text: "Pizza board", correct: false },
            { text: "Ouija board", correct: true },
            { text: "Hide and seek", correct: false }
        ]
    },

    {
        question: "How do you play the Bloody Mary game?",
        options: [
            { text: "You have to wear a wig and impersonate Bloody Mary", correct: false },
            { text: "You have to repeatedly chant 'Bloody Mary' in front of a mirror", correct: true },
            { text: "You have to hold your breath and jump on the spot for 5 seconds", correct: false },
            { text: "You have to bark like a dog from 9pm to 3am", correct: false }
        ]
    },

    {
        question: "Why is La Llorona said to roam near bodies of water?",
        options: [
            { text: "To go swimming", correct: false },
            { text: "To drink water", correct: false },
            { text: "To mourn for her children who she drowned in a fit of rage", correct: true },
            { text: "To learn water bending", correct: false }
        ]
    },

    {
        question: "What are the names of the supernatural beings that people use for financial gain?",
        options: [
            { text: "Toyol and Bloody Mary", correct: false },
            { text: "Babi Ngepet and Toyol", correct: true },
            { text: "Yokai and La Llorona", correct: false },
            { text: "Babi Ngepet and Yokai", correct: false }
        ]
    },

    {
        question: "What was Haw Par Villa previously known as?",
        options: [
            { text: "Axe Gardens", correct: false },
            { text: "Hong Thai Gardens", correct: false },
            { text: "Eagle Gardens", correct: false },
            { text: "Tiger Balm Gardens", correct: true }
        ]
    },

    {
        question: "Where is the German Girl Shrine located at?",
        options: [
            { text: "Pulau Ubin", correct: true },
            { text: "Sentosa", correct: false },
            { text: "Lim Chu Kang", correct: false },
            { text: "Mandai", correct: false }
        ]
    }, 

    {
        question: "What is the significance of Red String Bracelets in Singapore?",
        options: [
            { text: "Trend", correct: false },
            { text: "Style", correct: false },
            { text: "Protective charm", correct: true },
            { text: "Red string theory", correct: false }
        ]
    }

];

function Quiz() {
    const[currentIndex, setCurrentIndex] = useState(0);
    const[score, setScore] = useState(0);
    const[answered, setAnswered] = useState(false);
    const[finished, setFinished] = useState(false);
    const[isCorrect, setIsCorrect] = useState(null);
    const[selectedIndex, setSelectedIndex] = useState(null);
    const[playerName, setPlayerName] = useState("");
    const[started, setStarted] = useState(false);
    const[leaderboard, setLeaderboard] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("leaderboard")) || [];
        setLeaderboard(saved);
    }, []);

    const handleAnswer = (correct, index) => {
        if (!answered) {
            setIsCorrect(correct);
            setSelectedIndex(index);

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
            setSelectedIndex(null);
        }
        else {
            setFinished(true);
        }
    };

    const restartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setAnswered(false);
        setFinished(false);
        setIsCorrect(null);
        setSelectedIndex(null);
        setStarted(false);
        setPlayerName("");
    };

    if (!started) {
        return (
            <div className={styles.questionFormat}>
                <h2>Are you truly prepared to test your knowledge about the paranormal?</h2>
                <input
                    type="text" 
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="Your name"
                />
                <button
                    onClick={() => {
                        if (playerName.trim() !== "") setStarted(true);
                    }}
                >
                    Start Quiz
                </button>
            </div>
        );
    }

    if (finished) {
        const newEntry = { name: playerName, score };
        const updated = [...leaderboard, newEntry].sort((a,b) => b.score - a.score);

        localStorage.setItem("leaderboard", JSON.stringify(updated));

        return (
            <div className={styles.finished}>
                <h2>You have reached the end of the quiz...</h2>
                <p>Your final score is <span className={styles.scoreHighlight}>{score} / {questions.length}</span></p>
                <div className={styles.leaderboardBox}>
                    <h3>Leaderboard</h3>
                    <ol>
                        {updated.map((entry, index) => (
                            <li key={index}>
                                {entry.name} - {entry.score}
                            </li>
                        ))}
                    </ol>
                </div>

                <button onClick={restartQuiz} className={styles.retryButton}>
                    Try Again
                </button>

            </div>
        );
    }

    const CurrentQuestions = questions[currentIndex];

    return (
        <div className={styles.questionFormat}>

            <h2>Question {currentIndex + 1}</h2>

            <div className={styles.progressBarContainer}>
                <div
                    className={styles.progressBarFill}
                    style={{
                        width:`${((currentIndex + 1) / questions.length) * 100}%`
                    }}
                />
            </div>

            <p>{CurrentQuestions.question}</p>

            {CurrentQuestions.options.map((option, index) => {
                let buttonClass = "";

                if (answered) {
                    if (option.correct) {
                        buttonClass = styles.correctOption;
                    } else if (index === selectedIndex) {
                        buttonClass = styles.wrongOption;
                    }
                }

                return (
                    <button
                        key={index}
                        onClick={() => handleAnswer(option.correct, index)}
                        disabled={answered}
                        className={buttonClass}
                    >
                        {option.text}
                    </button>
                );
            })}

            {answered && (
                <>
                  <p className={`${styles.feedback} ${isCorrect ? styles.feedbackCorrect : styles.feedbackWrong}`}>
                    {isCorrect ? "Correct" : "Wrong"}
                  </p>

                  <button onClick={nextQuestion} className={styles.nextButton}>
                    {currentIndex + 1 === questions.length ? "Check your final score" : "Next Question..."}
                  </button>
                </>
            )}
        </div>
    );
}

export default Quiz;