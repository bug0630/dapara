import React from "react";
import "./bottom.scss";
import { useDispatch } from "react-redux";
import { toggleSearch } from "../../store/action";
export default function BottomNav() {
  const dispatch = useDispatch();
  const handleSearchToggle = () => {
    dispatch(toggleSearch()); // 검색 상태 토글 액션 디스패치
  };
  return (
    <nav className="bot side center between mob_ui">
      <span className="material-symbols-rounded">menu</span>
      <span
        className="material-symbols-outlined"
        title="검색"
        onClick={handleSearchToggle}
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
