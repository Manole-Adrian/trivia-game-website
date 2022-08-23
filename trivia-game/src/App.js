import "./App.css";
import TitleCard from "./Components/TitleCard/TitleCard";
import Questions from "./Components/Questions/Questions";

import React from "react";
import CircularProgress from '@mui/material/CircularProgress';

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

  const [isLoading, setIsLoading] = React.useState(false)
  console.log(isLoading)
  return (
      <div>
        {responseCode === -1 && isLoading === false && (
          <TitleCard
            setResponseCode={setResponseCode}
            setQuestionsArray={setQuestionsArray}
            setUserAnswers={setUserAnswers}
            setUserAnswersString={setUserAnswersString}
            setIsLoading={setIsLoading}
          />
        )}
        {isLoading === true && <div className="loading"><CircularProgress color="inherit" size={"10%"}/></div>}
        {responseCode === 0 && isLoading === false && (
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
