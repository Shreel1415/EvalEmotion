import React from "react";
import { Card, Button } from "react-bootstrap";

const Assessment = ({ confidenceLevel, stressLevel }) => {
  return (
    <Card className="p-4 mt-3 shadow-lg bg-light">
      <h3 className="text-primary">📋 Assessment Summary</h3>
      <p>Confidence Level: {confidenceLevel}%</p>
      <p>Stress Level: {stressLevel}%</p>
      <p>
        Suggested Improvements: Practice maintaining eye contact, control breathing for stress
        management, and rehearse responses to common interview questions.
      </p>
      <Button variant="success" className="mt-2">📄 Download PDF</Button>
    </Card>
  );
};

export default Assessment;
