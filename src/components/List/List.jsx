import React from "react";
import Card from "../card/Card";

export default function List({ list, path }) {
  return (
    <ul className="list">
      {list.map((src, i) => (
        <li key={i}>
          <Card
            path={path + `${i + 1}`}
            imgSrc={src}
            description={null}
            description2={null}
          />
        </li>
      ))}
    </ul>
  );
}
