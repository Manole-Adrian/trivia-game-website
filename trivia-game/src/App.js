import "./App.css";
import TitleCard from "./Components/TitleCard/TitleCard";
import Questions from "./Components/Questions/Questions";

import React from "react";

function App() {
  const [responseCode, setResponseCode] = React.useState(-1);

  const [questionsArray, setQuestionsArray] = React.useState([]);

  const [userAnswers, setUserAnswers] = React.useState([
    -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
  ]);

  const [userAnswersString, setUserAnswersString] = React.useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  return (
      <div>
        {responseCode === -1 && (
          <TitleCard
            setResponseCode={setResponseCode}
            setQuestionsArray={setQuestionsArray}
            setUserAnswers={setUserAnswers}
            setUserAnswersString={setUserAnswersString}
          />
        )}
        {responseCode === 0 && (
          <Questions
            questionsArray={questionsArray}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            setUserAnswersString={setUserAnswersString}
            userAnswersString={userAnswersString}
            setResponseCode={setResponseCode}
          />
        )}
      </div>
  );
}

export default App;
