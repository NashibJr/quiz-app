import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearStore } from "../redux/marks/marksSlice";

const Marks = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const marks = useSelector((state) => state.marks.marks);
  return (
    <div className="question-content marks-content">
      <h2>Thanks for attempting the quiz. Your score is{" " + marks}/5.</h2>
      <button
        type="button"
        className="button-content"
        onClick={() => {
          navigate("/");
          dispatch(clearStore());
        }}
      >
        Attempt again?
      </button>
    </div>
  );
};

export default Marks;
