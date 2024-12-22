# Project Title
Quiz Management System

## Introduction
The Quiz Management System is a web-based application designed to facilitate the creation, management, and administration of quizzes for educational institutions, training programs, and individual users. This system provides a user-friendly interface for both quiz creators and participants, enabling an efficient and engaging learning experience.

## Project Type
Frontend | Backend | Fullstack

## Deplolyed App
Frontend: https://deployed-site.whatever
Backend: https://deployed-site.whatever
Database: https://deployed-site.whatever

## Directory Structure

Frontend

node_modules
public
  -logo.svg
src
  -assets
    -components
      -AddQuiz.js
      -QuizList.js
    -pages
      -Home.js
      -Quiz.js
    -utils
      -api.js
  -App.css
  -App.js
  -App.test.js
  -index.css
  -index.js
  -reportWebVitals.js
  -setupTests.js
-.gitignore
-package-lock.json
-package.json

## Video Walkthrough of the project

## Video Walkthrough of the codebase

## Features
1. User Authentication
    Sign Up and Login: Secure registration and login processes for users, allowing them to create accounts and manage their profiles.
    Role-Based Access Control: Different access levels for quiz creators (admins) and participants (students), ensuring appropriate permissions for each user type.
2. Quiz Creation and Management
    Intuitive Quiz Builder: A user-friendly interface for quiz creators to design quizzes with various question types, including:
    -Multiple-choice questions
    -True/false questions
    -Short answer questions
    -Essay questions
3. Quiz Taking
    -Real-Time Participation: Participants can take quizzes in real-time, with a seamless user experience.
    -Immediate Feedback: Instant feedback on answers, allowing participants to learn from their mistakes.
    -Progress Tracking: Visual indicators showing quiz progress, including time remaining and questions completed.
4. Results and Analytics
    -Automatic Grading: Quizzes are automatically graded upon completion, providing instant results to participants.
    -Detailed Results: Participants receive a breakdown of their performance, including scores, correct answers, and areas for improvement.
    -Analytics Dashboard: Quiz creators can access analytics to track participant performance, question difficulty, and overall quiz effectiveness.
5. User Management
    Profile Management: Users can update their profiles, including personal information and password changes.
    User Activity Tracking: Monitor user activity, including quizzes taken, scores achieved, and participation history.

## design decisions or assumptions
1.Architecture Choice:
  Client-Server Architecture: The system is designed using a client-server architecture, with React as the frontend and Node.js/Express as the backend. This separation      allows for better scalability and maintainability.
  Database Selection:

2.MongoDB: 
  Chosen for its flexibility in handling unstructured data and its ability to scale horizontally. The document-based model is suitable for storing quiz questions and user   data.
  
3.User Roles:
  Role-Based Access Control: The system includes different user roles (admin and participant) to manage permissions effectively. Admins can create and manage quizzes, 
  while participants can only take quizzes.
  Responsive Design:

4.obile-First Approach: 
  The user interface is designed to be responsive, ensuring accessibility on various devices (desktops, tablets, and smartphones) to accommodate different user   preferences.
  
5.Real-Time Features:
  WebSocket Integration: For real-time updates (e.g., live quiz results), WebSockets are implemented to provide instant feedback to users without needing to refresh the     page.
  
6.Question Types:
  Diverse Question Formats: The system supports multiple question types (multiple-choice, true/false, short answer, and essay) to cater to different assessment needs.
  
## Installation & Getting started

```bash
npm install my-project
cd my-project
npm start
```

## Credentials
Provide user credentials for autheticated pages

## APIs Used
-Firebase
-Mangodb



## Technology Stack
- React
- Node.js
- Express.js
- MongoDB
- Other libraries/modules
