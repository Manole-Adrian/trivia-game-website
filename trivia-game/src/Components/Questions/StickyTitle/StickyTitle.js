import React from "react";
import Tooltip from "@mui/material/Tooltip";

import "./StickyTitle.css";

export default function StickyTitle() {
  return (
    <section className="stickyTitle">
      <div className="stickyTitleContainer">
        <h1>
          Comp<span className="orange">Tri</span>
        </h1>
        <h2>The Computer Science Trivia Game!</h2>
      </div>
      <Tooltip title="Created by Manole Adrian using OTDB API" arrow placement="right">
        <div className="info">i</div>
      </Tooltip>
    </section>
  );
}
