import React from "react";
import Question from "../components/Question";

const QuestionThree = ({ title }) => {
  return (
    <div className="question-content">
      <h2>{title}</h2>
      <Question
        question="When was HTML invented?"
        option1="1999"
        option2="2000"
        option3="1993"
        option4="2005"
        path="questionfour"
      />
    </div>
  );
};

export default QuestionThree;
