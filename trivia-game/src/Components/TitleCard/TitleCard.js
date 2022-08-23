import React from "react";

import "./TitleCard.css";

import PlayButton from "./PlayButton";

export default function TitleCard(props) {
  return (
    <section id="titleCard">
      <div className="titleCard">
        <h1 className="titleCard-title">
          Comp<span className="orange">Tri</span>
        </h1>
        <h2 className="titleCard-subtitle">
          The Computer Science <span className="orange">Trivia Game!</span>
        </h2>
      </div>
      <PlayButton
        setResponseCode={props.setResponseCode}
        setQuestionsArray={props.setQuestionsArray}
        setUserAnswers={props.setUserAnswers}
        setUserAnswersString={props.setUserAnswersString}
      />
    </section>
  );
}
