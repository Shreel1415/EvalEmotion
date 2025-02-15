import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button, ListGroup } from "react-bootstrap";
import VideoCall from "./VideoCall";
import Assessment from "./Assessment";
import EmotionTracker from "./EmotionTracker";

const AIInterviewApp = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [emotion, setEmotion] = useState("Neutral");
  const [confidenceLevel, setConfidenceLevel] = useState(50);
  const [stressLevel, setStressLevel] = useState(50);
  const [showAssessment, setShowAssessment] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setQuestions([]);
    setShowAssessment(false);
  };

  const startInterview = () => {
    setQuestions(["Tell us about yourself.", "What are your strengths?", "How do you handle stress?"]);
  };

  return (
    <Container className="mt-5 text-center">
      <h1 className="display-4 text-primary">🎙️ AI Interview System</h1>
      {!isLoggedIn ? (
        <Button onClick={handleLogin} variant="primary" className="px-4 py-2 mt-3">
          🔑 Login with OAuth
        </Button>
      ) : (
        <>
          <EmotionTracker
            emotion={emotion}
            confidenceLevel={confidenceLevel}
            stressLevel={stressLevel}
            setConfidenceLevel={setConfidenceLevel}
            setStressLevel={setStressLevel}
          />
          <Button onClick={startInterview} variant="warning" className="mt-3 px-4 py-2">
            📝 Start Interview
          </Button>
          <ListGroup className="mt-3">
            {questions.map((q, index) => (
              <ListGroup.Item key={index} className="bg-info text-white">
                {q}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <VideoCall />
          <Button onClick={() => setShowAssessment(true)} variant="danger" className="mt-3 px-4 py-2">
            🔚 End Interview
          </Button>
          {showAssessment && <Assessment confidenceLevel={confidenceLevel} stressLevel={stressLevel} />}
          <Button onClick={handleLogout} variant="secondary" className="mt-3 px-4 py-2">
            🚪 Logout
          </Button>
        </>
      )}
    </Container>
  );
};

export default AIInterviewApp;
