import React from "react";
import { Link } from "react-router-dom";
import "./headerNav.scss";

export default function HeaderNav() {
  return (
    <header className="header_bottom center sticky">
      <nav className="width mob_tap between">
        <ul className=" between side gap">
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
      </nav>
    </header>
  );
}
