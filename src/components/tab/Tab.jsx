import React, { useState } from "react";

export default function Tab({ list }) {
  // index 0이면 focus 클래스 추가하는 토글
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <ul className="tab">
      {list.map((item, index) => (
        <li
          key={index}
          className={activeIndex === index ? "focus" : ""}
          onClick={() => handleClick(index)}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
