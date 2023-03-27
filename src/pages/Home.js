import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { timeReseter } from "../redux/Timing/timeSlice";
import { Timing } from "../redux/Timing/timeSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const time = useSelector((state) => state.time);
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
          const timer = setInterval(() => {
            dispatch(Timing());
          }, 1000);
          if (time.minutes === 0 && Number(time.seconds) === 0) {
            clearInterval(timer);
          }
          navigate("/questionone");
          dispatch(timeReseter());
        }}
        className="button-content"
      >
        Attempt
      </button>
    </div>
  );
};

export default Home;
