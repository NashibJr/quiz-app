import React from "react";
import Question from "../components/Question";

const QuestionFour = ({ title }) => {
  return (
    <div className="question-content">
      <h2>{title}</h2>
      <Question
        question="...........is a markup language"
        option1="xml"
        option2="html"
        option3="JavaScript"
        option4="Java"
        path="questionfive"
      />
    </div>
  );
};

export default QuestionFour;
