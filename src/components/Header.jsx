import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../img/logo.png";
export default function Header() {
  return (
    <header>
      <nav className="header_top">
        <span className="material-symbols-outlined"> menu </span>
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
        <div className="button_area">
          <span className="material-symbols-outlined"> person </span>
          <span className="material-symbols-outlined"> shopping_cart </span>
          <span className="material-symbols-outlined"> list_alt </span>
        </div>
      </nav>
      <nav className="header_bottom">
        <div className="between width">
          <ul className="between gap20">
            <li>로켓배송</li>
            <li>로켓직구</li>
            <li>베스트</li>
            <li>특가</li>
            <li>이벤트/쿠폰</li>
          </ul>
          <ul className="between gap20">
            <li>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
