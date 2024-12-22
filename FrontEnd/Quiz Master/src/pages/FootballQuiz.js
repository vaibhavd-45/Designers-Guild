import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from './Image';
import logo from "./Logo.jpg"

const FootballQuiz = () => {
  const [score, setScore] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(5); // Timer starts at 5 seconds

  const navigate = useNavigate();

  const questions = [
    { question: 'Who won the 2018 FIFA World Cup?', options: ['France', 'Brazil', 'Germany'], answer: 'France' },
    { question: 'Who is the all-time top scorer in the Premier League?', options: ['Wayne Rooney', 'Sergio Agüero', 'Harry Kane'], answer: 'Wayne Rooney' },
    { question: 'Which country won the 1998 FIFA World Cup?', options: ['France', 'Brazil', 'Argentina'], answer: 'France' },
  ];

  useEffect(() => {
    if (currentIndex >= questions.length) {
      setShowScore(true); // Show score when all questions are answered
      return;
    }

    // When the timer hits zero, move to the next question
    if (timer === 0) {
      setCurrentIndex(currentIndex + 1);
      setTimer(5); // Reset timer
    }

    const timerInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1); // Decrease the timer every second
      }
    }, 1000);

    // Cleanup interval on unmount or when timer changes
    return () => clearInterval(timerInterval);
  }, [timer, currentIndex]);

  const handleAnswer = (selectedAnswer, correctAnswer) => {
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    // Move to the next question immediately after an answer is selected
    setCurrentIndex(currentIndex + 1);
    setTimer(5); // Reset timer
  };

  const handleGoHome = () => {
    navigate('/'); // Navigate to home
  };

  const handleGoLeaderboard = () => {
    navigate('/leaderboard'); // Navigate to leaderboard
  };

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      fontFamily: "'Press Start 2P', cursive",
      textAlign: 'center',
    },
    questionContainer: {
      margin: '20px 0',
      padding: '20px',
      border: '2px solid #00ffc3',
      borderRadius: '15px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.6)',
      color: '#00ffc3',
    },
    button: {
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#00ffc3',
      color: '#000',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontWeight: 'bold',
      fontSize: '14px',
      textTransform: 'uppercase',
      textShadow: '0 0 10px #000',
      transition: 'all 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#00bfa6',
      transform: 'scale(1.1)',
      boxShadow: '0 0 20px #00ffc3',
    },
    scoreContainer: {
      textAlign: 'center',
    },
    scoreText: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#00ffc3',
      textShadow: '0 0 10px #00ffc3',
    },
  };

  if (showScore) {
    return (
      <div style={styles.container}>
        <div style={styles.scoreContainer}>
          <h1 style={styles.scoreText}>Football Quiz Finished</h1>
          <h2 style={styles.scoreText}>Your Score: {score} / {questions.length}</h2>
          <button
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            onClick={handleGoHome}
          >
            Go to Home
          </button>
          <button
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            onClick={handleGoLeaderboard}
          >
            Go to Leaderboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
       {/* <Image image={logo} /> */}
      
      <div style={styles.questionContainer}>
      <Image image={logo} /><h1 style={styles.scoreText}>Football Quiz</h1>
      <p>Time Remaining: {timer}s</p> {/* Display the timer */}
        <h2>Question {currentIndex + 1}</h2>
        <p>{questions[currentIndex]?.question}</p>
        {questions[currentIndex]?.options.map((option, i) => (
          <button
            key={i}
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
            onClick={() => handleAnswer(option, questions[currentIndex].answer)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FootballQuiz;