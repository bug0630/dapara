import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";

function Dropdown({ menuItems, defaultItem }) {
  // 드롭다운 토글 상태를 관리하는 state (드롭다운이 열려 있는지 여부)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // 현재 선택된 드롭다운 항목을 관리하는 state (기본값으로 defaultItem 사용)
  const [selectedItem, setSelectedItem] = useState(defaultItem);
  // 키보드 탐색 시 현재 포커스된 항목의 인덱스를 관리하는 state
  // -1로 아무것도 선택되지 않은 상태
  const [currentFocus, setCurrentFocus] = useState(-1);
  // 드롭다운 컴포넌트의 DOM 요소를 참조하기 위한 ref (외부 클릭 감지 및 포커스 설정에 사용)
  const dropdownRef = useRef(null);

  // 토글 전환을 위해 !매개변수
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setCurrentFocus(0);
  };
  // 드롭다운이 닫히고 focus를 초기화
  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setCurrentFocus(-1);
  };

  const handleSelect = (value) => {
    setSelectedItem(value);
    closeDropdown();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      toggleDropdown();
      event.preventDefault();
    }
  };

  const handleMenuKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setCurrentFocus((prevFocus) => (prevFocus + 1) % menuItems.length);
      event.preventDefault();
    } else if (event.key === "ArrowUp") {
      setCurrentFocus(
        (prevFocus) => (prevFocus - 1 + menuItems.length) % menuItems.length
      );
      event.preventDefault();
    } else if (event.key === "Enter") {
      handleSelect(menuItems[currentFocus]);
      event.preventDefault();
    } else if (event.key === "Escape") {
      closeDropdown();
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (isDropdownOpen && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll("li");
      items[currentFocus]?.focus();
    }
  }, [isDropdownOpen, currentFocus]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
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
