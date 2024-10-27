import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";

function Dropdown({ menuItems, defaultItem }) {
  // 드롭다운이 열려 있는지 여부를 관리하는 상태
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 현재 선택된 드롭다운 항목을 관리하는 상태 (초기값은 defaultItem)
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  // 키보드 탐색 시 현재 포커스된 항목의 인덱스를 관리하는 상태 (초기값 -1은 아무 항목도 선택되지 않은 상태)
  const [currentFocus, setCurrentFocus] = useState(-1);
  // 드롭다운 컴포넌트의 DOM 요소를 참조하기 위한 ref (외부 클릭 감지 및 포커스 설정에 사용)
  const dropdownRef = useRef(null);

  // 드롭다운의 열림/닫힘 상태를 전환하고, 열릴 때는 포커스를 첫 번째 항목으로 초기화
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setCurrentFocus(0);
  };

  // 드롭다운을 닫고 포커스를 초기화
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setCurrentFocus(-1);
  };

  // 선택된 항목을 업데이트하고 드롭다운을 닫음
  const handleSelect = (value) => {
    setSelectedItem(value);
    closeDropdown();
  };

  // 버튼에서 키보드 입력을 처리 (Enter 또는 Space 키로 드롭다운 열기/닫기)
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
      event.preventDefault();
    }
  };

  // 드롭다운 메뉴에서 키보드 탐색을 처리
  const handleMenuKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      // 다음 항목으로 포커스를 이동 (끝에서 다시 처음으로 순환)
      setCurrentFocus((prevFocus) => (prevFocus + 1) % menuItems.length);
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      // 이전 항목으로 포커스를 이동 (처음에서 다시 끝으로 순환)
      setCurrentFocus(
        (prevFocus) => (prevFocus - 1 + menuItems.length) % menuItems.length
      );
      event.preventDefault();
    } else if (event.key === "Enter") {
      // Enter 키를 누르면 포커스된 항목을 선택
      handleSelect(menuItems[currentFocus]);
      event.preventDefault();
    } else if (event.key === "Escape") {
      // Escape 키로 드롭다운 닫기
      closeDropdown();
      event.preventDefault();
    }
  };

  // 드롭다운이 열리거나 currentFocus가 변경될 때 현재 포커스된 항목에 포커스를 설정
  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll("li");
      items[currentFocus]?.focus();
    }
  }, [isDropdownOpen, currentFocus]);

  // 드롭다운 외부를 클릭했을 때 드롭다운을 닫도록 처리하는 효과
  useEffect(() => {
    const handleClickOutside = (event) => {
      // 드롭다운 컴포넌트 외부를 클릭하면 드롭다운을 닫음
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      {/* 드롭다운을 여닫는 버튼, 접근성 속성 포함 */}
      <button
        className="between"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        aria-activedescendant={
          currentFocus >= 0 ? `dropdown-item-${currentFocus}` : undefined
        }
      >
        {selectedItem}{" "}
        <span
          className={`material-symbols-outlined ${
            isDropdownOpen ? "rotate" : ""
          }`}
        >
          arrow_drop_down
        </span>
      </button>

      {/* 드롭다운 메뉴 (isDropdownOpen이 true일 때 표시됨) */}
      {isDropdownOpen && (
        <ul className="list" role="listbox" onKeyDown={handleMenuKeyDown}>
          {menuItems.map((item, index) => (
            <li
              key={item}
              id={`dropdown-item-${index}`}
              role="option"
              tabIndex="0"
              aria-selected={selectedItem === item}
              onClick={() => handleSelect(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
