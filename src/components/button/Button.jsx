import React from "react";
import "./button.scss";

export default function Button({ text }) {
  return (
    <button className="buttonComponents">
      <span className="propText">{text} </span>
      <span> 더보기</span>
    </button>
  );
}
