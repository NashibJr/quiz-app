import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Marks from "./pages/marks";
import QuestionFive from "./pages/questionFive";
import QuestionFour from "./pages/questionFour";
import QuestionOne from "./pages/questionOne";
import QuestionThree from "./pages/questionThree";
import QuestionTwo from "./pages/questionTwo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/questionone"
          element={<QuestionOne title="Question 1" />}
        />
        <Route
          path="/questiontwo"
          element={<QuestionTwo title="Question 2" />}
        />
        <Route
          path="/questionthree"
          element={<QuestionThree title="Question 3" />}
        />
        <Route
          path="/questionfour"
          element={<QuestionFour title="Question 4" />}
        />
        <Route
          path="/questionfive"
          element={<QuestionFive title="Question 5" />}
        />
        <Route path="/marks" element={<Marks />} />
      </Routes>
    </Router>
  );
};

export default App;
