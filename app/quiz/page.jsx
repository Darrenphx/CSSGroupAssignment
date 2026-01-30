"use client";
import { useState } from "react";
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
            { text: "Duck duck goose", correct: true },
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
            <div className={styles.finished}>
                <h2>You have reached the end of the quiz...</h2>
                <p>Your final score is <span className={styles.scoreHighlight}>{score} / {questions.length}</span></p>
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
                >
                    {option.text}
                </button>
            ))}

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