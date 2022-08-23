import React from "react";

import CloseIcon from '@mui/icons-material/Close';
import GradingIcon from '@mui/icons-material/Grading';

import "./FinishButton.css";

import Reel from 'react-reel'
import "./theme.css"
export default function FinishButton(props) {

  const isFinished = props.userAnswersString.filter((el) => el === "").length === 0

  const [isSubmitted,setIsSubmitted] = React.useState(false)

  function handleClick() {
    if (isFinished)
      {props.answersArr.forEach((ans, index) => {
        if (ans === props.userAnswersString[index]) {
          props.setIsCorrectArr((prevArr) => {
            const newArr = [...prevArr];
            newArr[index] = 1;
            return newArr;
          });
        } else {
          props.setIsCorrectArr((prevArr) => {
            const newArr = [...prevArr];
            newArr[index] = -1;
            return newArr;
          });
        }
      });
     setIsSubmitted(true)
    }
    if (isSubmitted) {
      props.setResponseCode(-1)
    }
  }
//
  return (
    <div className={`finishButton ${isSubmitted ? 'results' : ''} ${isFinished ? "" : "notFinished"}`} onClick={handleClick}>
      {isFinished===false && <CloseIcon sx={{fontSize:100}}/>}
      {isSubmitted === false && isFinished && <GradingIcon sx={{fontSize:100}}/>}
      {isSubmitted && <div>You got <Reel text={String(props.isCorrectArr.filter(el => el===1).length)} delay={100} /> out of 10<div className="again">Click to try again!</div></div>}
      
    </div>
  );
}
