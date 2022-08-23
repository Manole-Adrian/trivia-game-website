import React from "react";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import "./PlayButton.css";

export default function PlayButton(props) {
  function handleClick() {
    fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        props.setResponseCode(result.response_code);
        props.setQuestionsArray(result.results);
        props.setUserAnswers([-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]);
        props.setUserAnswersString(["", "", "", "", "", "", "", "", "", ""]);
      });
  }

  return (
    <div className="playButton" onClick={handleClick}>
      <PlayArrowIcon sx={{fontSize:80}}/>
    </div>
  );
}
