import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./header.scss";
import logo from "../../assets/img/logo.png";
export default function Header() {
  const isSearchActive = useSelector((state) => state.isSearchActive);

  return (
    <header
      className={`index ${
        isSearchActive ? "sticky" : "" // isSearchActive를 사용하여 클래스 추가
      }`}
    >
      <nav className={`header_top center`}>
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
    </header>
  );
}
