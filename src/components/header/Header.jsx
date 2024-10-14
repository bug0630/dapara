import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import logo from "../../img/logo.png";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="width">
        <nav className={`header_top ${isFixed ? "fixed" : ""}`}>
          <span className="material-symbols-rounded">menu</span>
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
            <span className="material-symbols-outlined">person</span>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className="material-symbols-outlined">list_alt</span>
          </div>
        </nav>
      </div>

      <nav className="header_bottom">
        <div className="between width side">
          <ul className="between gap20">
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
          <ul className="between gap20">
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
