import React from 'react';
import { Link } from 'react-router-dom';

const Leaderboard = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: "url('https://wallpapercave.com/wp/wp2768598.jpg') no-repeat center center/cover",
      color: 'white',
      fontFamily: "'Press Start 2P', cursive",
    },
    leaderboardBox: {
      width: '400px',
      padding: '40px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.6)',
      borderRadius: '15px',
      textAlign: 'center',
      color: '#00ffc3',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#00ffc3',
      textShadow: '0 0 10px #00ffc3, 0 0 20px #00ffc3',
    },
    list: {
      listStyleType: 'none',
      padding: '0',
      fontSize: '18px',
    },
    listItem: {
      marginBottom: '10px',
      textShadow: '0 0 5px #00ffc3',
    },
    button: {
      marginTop: '20px',
      padding: '12px 30px',
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
    link: {
      color: '#000',
      textDecoration: 'none',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.leaderboardBox}>
        <h1 style={styles.heading}>Leaderboard</h1>
        <ul style={styles.list}>
          <li style={styles.listItem}>Player 1: 10 Points</li>
          <li style={styles.listItem}>Player 2: 8 Points</li>
          <li style={styles.listItem}>Player 3: 6 Points</li>
          {/* Add leaderboard logic here */}
        </ul>
        <button
          style={styles.button}
          onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
          onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
        >
          <Link to="/" style={styles.link}>Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Leaderboard;
