import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="question-content home">
      <h2>Programming Quiz</h2>
      <p>
        This is a simple programming quiz made with react.js. Click the Attempt
        button and start, after submittion it will show your score.
      </p>

      <button
        type="button"
        onClick={() => {
          navigate("/questionone");
        }}
        className="button-content"
      >
        Attempt
      </button>
    </div>
  );
};

export default Home;
