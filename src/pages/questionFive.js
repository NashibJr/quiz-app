import React from "react";
import Question from "../components/Question";

const QuestionFive = ({ title }) => {
  return (
    <div className="question-content">
      <h2>{title}</h2>
      <Question
        question="The best way to render lists in react.js is using.........."
        option1="forEach()"
        option2="map()"
        option3="for () {}"
        option4="while () {}"
        path="marks"
      />
    </div>
  );
};

export default QuestionFive;
