import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";
import logo from "../../assets/img/logo.png";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const isSearchActive = useSelector((state) => state.isSearchActive);
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const threshold = 100; // 임계값을 설정 (10px 정도 차이나야 상태 변경)

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDifference = currentScrollY - lastScrollY;

      if (Math.abs(scrollDifference) > threshold) {
        if (scrollDifference > 0) {
          // 스크롤이 아래로 향할 때
          setIsFixed(true);
        } else {
          // 스크롤이 위로 향할 때
          setIsFixed(false);
        }
        lastScrollY = currentScrollY; // 현재 스크롤 위치를 저장
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
