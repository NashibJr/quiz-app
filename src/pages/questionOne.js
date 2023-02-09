import React from "react";
import Question from "../components/Question";

const QuestionOne = ({ title }) => {
  return (
    <div className="question-content">
      <h2>{title}</h2>
      <Question
        question="What is the most used programming language?"
        option1="HTML"
        option2="JavaScript"
        option3="Java"
        option4="Python"
        path="questiontwo"
      />
    </div>
  );
};

export default QuestionOne;
