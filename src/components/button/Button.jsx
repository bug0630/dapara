import React from "react";
import { Link } from "react-router-dom";
import "./button.scss";

export default function Button({ text, path }) {
  return (
    <button className="buttonComponents">
      <Link to={path}>
        {" "}
        <span className="propText">{text} </span>
        <span> 더보기</span>
      </Link>
    </button>
  );
}
