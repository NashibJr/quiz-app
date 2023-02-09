import * as React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAnswers } from "../redux/marks/marksSlice";

const Question = ({ question, option1, option2, option3, option4, path }) => {
  const navigate = useNavigate();
  const [_question, setQuestion] = React.useState("");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setQuestion(event.target.value);
  };
  const onNextPage = Boolean(_question);
  return (
    <div>
      <form>
        {question}
        <p>
          <input
            type="radio"
            value={option1}
            name={option1}
            onChange={handleChange}
            checked={_question === `${option1}`}
          />
          {option1}
        </p>
        <p>
          <input
            type="radio"
            value={option2}
            name={option2}
            onChange={handleChange}
            checked={_question === `${option2}`}
          />
          {option2}
        </p>
        <p>
          <input
            type="radio"
            value={option3}
            name={option3}
            onChange={handleChange}
            checked={_question === `${option3}`}
          />
          {option3}
        </p>
        <p>
          <input
            type="radio"
            value={option4}
            name={option4}
            onChange={handleChange}
            checked={_question === `${option4}`}
          />
          {option4}
        </p>
      </form>
      <button
        type="button"
        onClick={() => {
          navigate(`/${path}`);
          dispatch(getAnswers(_question));
        }}
        disabled={!onNextPage}
        className="button-content"
      >
        Next
      </button>
    </div>
  );
};

export default Question;
