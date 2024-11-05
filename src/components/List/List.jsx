import React from "react";
import { Link } from "react-router-dom";
export default function List({ list }) {
  return (
    <ul>
      {list.map((src, i) => (
        <li key={i}>
          <Link to={`/product${i + 1}`}>
            <img src={src} alt={`product${i + 1}`} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
