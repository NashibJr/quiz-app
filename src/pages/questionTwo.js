import React from "react";
import Question from "../components/Question";

const QuestionTwo = ({ title }) => {
  return (
    <div className="question-content">
      <h2>{title}</h2>
      <Question
        question="Which of the following returns an array?"
        option1="filter()"
        option2="some()"
        option3="find()"
        option4="reduce()"
        path="questionthree"
      />
    </div>
  );
};

export default QuestionTwo;
