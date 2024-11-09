import React from "react";
import { Link } from "react-router-dom";
export default function List({ list, path }) {
  return (
    <ul className="list">
      {list.map((src, i) => (
        <li key={i}>
          <Link to={path + `${i + 1}`}>
            <img src={src} alt={path + `${i + 1}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
