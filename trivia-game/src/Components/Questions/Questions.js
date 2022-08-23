import React, { useEffect } from "react";
import Confetti from 'react-confetti'

import Question from "./Question/Question";
import FinishButton from "./FinishButton/FinishButton";
import StickyTitle from "./StickyTitle/StickyTitle"

import logosArr from "../../utils/logosArray";
import shuffle from "../../utils/shuffle";

import "./Questions.css";


export default function Questions(props) {
  useEffect(() => {
    shuffle(logosArr);
  }, []);

  const [isCorrectArr, setIsCorrectArr] = React.useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);

  const answersArr = props.questionsArray.map((question) => {
    return question.correct_answer;
  });


  return (
    <section className="questionsContainer">
      
      <StickyTitle/>
      {props.questionsArray.map((question, index) => {
        return (
          <Question
            questionData={question}
            questionIndex={index}
            userAnswers={props.userAnswers}
            setUserAnswers={props.setUserAnswers}
            setUserAnswersString={props.setUserAnswersString}
            logosArr={logosArr}
            isCorrect={isCorrectArr[index]}
          />
        );
      })}
      <FinishButton
        answersArr={answersArr}
        userAnswersString={props.userAnswersString}
        setIsCorrectArr={setIsCorrectArr}
        isCorrectArr={isCorrectArr}
        setResponseCode={props.setResponseCode}
      />
    {isCorrectArr.filter(el => el===1).length > 8 && <div className="confetti"><Confetti/></div>}
    </section>
  );
}
