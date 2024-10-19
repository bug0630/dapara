import React from "react";
import "./bottom.scss";

export default function BottomNav({ isSearchActive, onSearchToggle }) {
  return (
    <nav className="bot side center between mob_ui">
      <span className="material-symbols-rounded">menu</span>
      <span
        className="material-symbols-outlined"
        title="검색"
        onClick={onSearchToggle}
      >
        search
      </span>
      <span className="material-symbols-outlined" title="내 정보">
        person
      </span>
      <span className="material-symbols-outlined" title="장바구니">
        shopping_cart
      </span>
      <span className="material-symbols-outlined" title="찜 목록">
        list_alt
      </span>
    </nav>
  );
}
