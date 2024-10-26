import React from "react";
import "./footer.scss";
import Dropdown from "../dropdown/DropDown";
export default function Footer() {
  return (
    <footer>
      <nav className="width side between">
        <ul className="policy center">
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
        <ul className="partners center">
          <Dropdown
            menuItems={["Partners", "Partners 2", "Partners 3", "Partners 4"]}
            defaultItem={"파트너 사이트"}
          ></Dropdown>
        </ul>
      </nav>
      <div className="info width side">
        <h3 style={{ fontFamily: "GmarketSansMedium", color: "black" }}>
          (주) 다 파라
        </h3>
        <span>대표이사: 변웅기</span>
        <span>사업자 등록번호: 120-88-00767</span>
        <span>365 고객센터: 1577-1570(유료)</span>
        <span>서울시 마포구 월드컵로 26길 57</span>
        <span>email: bugbdh@naver.com</span>
        <span>COPYRIGHT (C) 다 파라 ALL RIGHT REVERSED</span>
      </div>
    </footer>
  );
}
