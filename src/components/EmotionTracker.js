import React from "react";
import { Card, ProgressBar, Button } from "react-bootstrap";

const EmotionTracker = ({ emotion, confidenceLevel, stressLevel, setConfidenceLevel, setStressLevel }) => {
  return (
    <Card className="p-4 mt-3 shadow-lg bg-light">
      <h4 className="text-secondary">
        Emotion Detected: <span className="text-danger">{emotion}</span>
      </h4>
      <ProgressBar now={confidenceLevel} label={`Confidence: ${confidenceLevel}%`} className="my-2" variant="success" />
      <ProgressBar now={stressLevel} label={`Stress: ${stressLevel}%`} className="my-2" variant="danger" />
      <Button variant="danger" onClick={() => setStressLevel(stressLevel + 10)} className="m-2">
        😟 Increase Stress
      </Button>
      <Button variant="success" onClick={() => setConfidenceLevel(confidenceLevel + 10)} className="m-2">
        😃 Increase Confidence
      </Button>
    </Card>
  );
};

export default EmotionTracker;
