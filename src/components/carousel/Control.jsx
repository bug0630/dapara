import React from "react";

export default function Control() {
  return (
    <div className="control">
      <div className="flicking-pagination"></div>
      <div className="arrow">
        <span className="flicking-arrow-prev material-symbols-outlined">
          chevron_left
        </span>
        <span className="flicking-arrow-next  material-symbols-outlined">
          chevron_right
        </span>
      </div>
    </div>
  );
}
