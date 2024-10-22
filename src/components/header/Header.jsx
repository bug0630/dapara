import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";
import logo from "../../assets/img/logo.png";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const isSearchActive = useSelector((state) => state.isSearchActive);
  useEffect(() => {
    let timeoutId = null; // 타이머 ID 저장

    const handleScroll = () => {
      if (timeoutId) return; // 이미 타이머가 설정되었으면 무시

      timeoutId = setTimeout(() => {
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setIsFixed(scrollTop > 0); // 스크롤 위치가 1보다 크면 true, 아니면 false

        timeoutId = null; // 타이머 종료 후 초기화
      }, 150); // 0.5초 (500ms) 간격
    };

    window.addEventListener("scroll", handleScroll); // 스크롤 이벤트 추가

    return () => {
      window.removeEventListener("scroll", handleScroll); // 이벤트 제거
      if (timeoutId) clearTimeout(timeoutId); // 컴포넌트 언마운트 시 타이머 제거
    };
  }, []);
  return (
    <header>
      <nav
        className={`header_top center  ${isFixed ? "hide" : ""} ${
          isSearchActive ? "expanded" : "" // isSearchActive를 사용하여 클래스 추가
        }`}
      >
        <div className="width wrap side center">
          <span className="material-symbols-rounded pc_ui">menu</span>
          <h1>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </h1>
          <input
            id="user-search"
            type="search"
            placeholder="어떤 상품을 찾으시나요"
            aria-label="사이트 상품을 검색"
          />
          <div className="button_area pc_ui">
            <span className="material-symbols-outlined" title="내 정보">
              person
            </span>
            <span className="material-symbols-outlined" title="장바구니">
              shopping_cart
            </span>
            <span className="material-symbols-outlined" title="찜 목록">
              list_alt
            </span>
          </div>
        </div>
      </nav>
      <nav className={`header_bottom center`}>
        <div className="mob_tap between width side">
          <ul className="between gap">
            <li>
              <Link to="/rocket-delivery">로켓배송</Link>
            </li>
            <li>
              <Link to="/rocket-import">로켓직구</Link>
            </li>
            <li>
              <Link to="/best">베스트</Link>
            </li>
            <li>
              <Link to="/special-offers">특가</Link>
            </li>
            <li>
              <Link to="/events-coupons">이벤트/쿠폰</Link>
            </li>
          </ul>
          <ul className="between gap pc_ui">
            <li>
              <Link to="/login">로그인</Link>
            </li>
            <li>
              <Link to="/signup">회원가입</Link>
            </li>
            <li>
              <Link to="/customer-service">고객센터</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
