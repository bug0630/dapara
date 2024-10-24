import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <footer>
      <nav className="width side between">
        <ul className="policy">
          <li style={{ fontFamily: "GmarketSansMedium" }}>개인정보 처리방침</li>
          <li style={{ fontFamily: "GmarketSansMedium" }}>
            영상정보기기 운영 관리 방침
          </li>
          <li>이용약관</li>
          <li>회사소식 </li>
          <li>고객센터 </li>
          <li>CSR경영 </li>
          <li>사이트맵 </li>
        </ul>
        <ul className="sns">
          <li>dropdown </li>
          <li>dropdown</li>
          <li>dropdown</li>
        </ul>
      </nav>
      <div className="info width side">
        <h3 style={{ fontFamily: "GmarketSansMedium", color: "black" }}>
          (주) 다 파라
        </h3>
        <span> 대표이사: 강한승,박대중</span>
        <span>사업자 등록번호: 120-88-00767</span>
        <span>365고객센터: 1577-7011(유료)</span>
        <span>서울시 송파구 송파대로 570</span>
        <span>email: help@dapara.com</span>
        <span>COPYRIGHT (C) 다 파라 ALL RIGHT REVERSED</span>
      </div>
    </footer>
  );
}
