import React from "react";
import Tilt from "react-parallax-tilt";

import shuffle from "../../../utils/shuffle";

import "./Question.css";

export default function Question(props) {
  const [answersArray,setAnswersArray] = React.useState([])
  


  const isAnswered = props.userAnswers[props.questionIndex];

  function unescape(string) {
    return new DOMParser()
      .parseFromString(string, "text/html")
      .querySelector("html").textContent;
  }

  function handleClick(ansIndex, answer) {
    if (props.isCorrect === 0) {
      props.setUserAnswers((prevArr) => {
        const newArr = [...prevArr];
        newArr[props.questionIndex] = ansIndex;
        return newArr;
      });
      props.setUserAnswersString((prevArr) => {
        const newArr = [...prevArr];
        newArr[props.questionIndex] = answer;
        return newArr;
      });
    }
  }
  React.useEffect(() => {
   setAnswersArray(shuffle(props.questionData.incorrect_answers.concat(
      props.questionData.correct_answer
    )));
  }, []);

  const isCorrect =
    props.isCorrect === 0
      ? ""
      : props.isCorrect === 1
      ? "correct"
      : "incorrect";

  return (
    <div id="test">
      <img
        style={{ left: props.questionIndex % 2 === 0 ? "90%" : "-10%" }}
        src={`./logos/${props.logosArr[props.questionIndex]}.png`}
        alt="nodejs"
        className={`questionImg ${isAnswered !== -1 ? "animate" : "hide"}`}
      ></img>
      <Tilt
        className="Tilt"
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        scale={1.02}
        transitionSpeed={200}
      >
        <div className="questionContainer">
          <div
            key={props.questionData.question}
            className={`question ${isAnswered !== -1 ? "answered" : ""}`}
          >
            {unescape(props.questionData.question)}

          </div>
          <div className="answers">
            {answersArray.map((answer, index) => {
              return (
                <div
                  onClick={() => handleClick(index, answer)}
                  className={`answer ${
                    isAnswered === index ? "selected" : ""
                  }  ${
                    isAnswered === index && isCorrect !== 0 ? isCorrect : ""
                  }`}
                >
                  {unescape(answer)}
                </div>
              );
            })}
          </div>
        </div>
      </Tilt>
      
    </div>
  );
}
