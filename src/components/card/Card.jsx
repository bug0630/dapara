import React from "react";
import { Link } from "react-router-dom";
export default function Card({
  path,
  head,
  imgSrc,
  description,
  description2,
}) {
  return (
    <Link to={path} className="card">
      {" "}
      <h5>{head}</h5>
      <img src={imgSrc} alt={head} />
      <span>{description} </span>
      <span>{description2} </span>
    </Link>
  );
}
