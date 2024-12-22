import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const user = { email, password };
      await axios.post(
        'https://quiz-master-64a7d-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',
        user
      );

      alert('Signup successful! Please log in.');
      navigate('/login');
    } catch (err) {
      setError('Signup failed. Please try again.');
    }
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      fontFamily: "'Press Start 2P', cursive",
    },
    formContainer: {
      width: '400px',
      padding: '40px',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      boxShadow: '0 10px 30px rgba(0, 255, 255, 0.6)',
      borderRadius: '15px',
      textAlign: 'center',
      color: '#00ffc3',
    },
    logo: {
      width: '100px',
      height: '100px',
      margin: '0 auto',
      borderRadius: '50%',
      border: '4px solid #00ffc3',
      boxShadow: '0 0 20px #00ffc3',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
      color: '#00ffc3',
      textShadow: '0 0 10px #00ffc3, 0 0 20px #00ffc3',
    },
    inputField: {
      width: '100%',
      padding: '12px',
      margin: '10px 0',
      border: '2px solid #00ffc3',
      borderRadius: '8px',
      fontSize: '14px',
      background: 'transparent',
      color: '#00ffc3',
      fontFamily: "'Press Start 2P', cursive",
    },
    inputFieldFocus: {
      boxShadow: '0 0 15px #00ffc3',
    },
    button: {
      width: '100%',
      padding: '14px',
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
    errorText: {
      color: '#ff003c',
      marginTop: '10px',
      fontWeight: 'bold',
      textShadow: '0 0 10px #ff003c',
    },
    signupText: {
      marginTop: '20px',
      fontSize: '12px',
      color: '#00ffc3',
    },
    signupLink: {
      color: '#00ffc3',
      cursor: 'pointer',
      fontWeight: 'bold',
      textDecoration: 'none',
      textShadow: '0 0 10px #00ffc3',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <img src="./Logo.jpeg" alt="Logo" style={styles.logo} />
        <h2 style={styles.heading}>Signup</h2>
        <form onSubmit={handleSignup}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.inputField}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFieldFocus)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.inputField}
            onFocus={(e) => Object.assign(e.target.style, styles.inputFieldFocus)}
            onBlur={(e) => (e.target.style.boxShadow = 'none')}
          />
          {error && <p style={styles.errorText}>{error}</p>}
          <button
            type="submit"
            style={styles.button}
            onMouseOver={(e) => Object.assign(e.target.style, styles.buttonHover)}
            onMouseOut={(e) => Object.assign(e.target.style, styles.button)}
          >
            Signup
          </button>
        </form>
        <p style={styles.signupText}>
          Already have an account?{' '}
          <span
            style={styles.signupLink}
            onClick={() => navigate('/login')}
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
