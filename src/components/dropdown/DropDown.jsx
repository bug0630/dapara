import React, { useState, useRef, useEffect } from "react";
import "./dropdown.scss";

function Dropdown({ menuItems, defaultItem }) {
  // default -> defaultItem
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(defaultItem); // defaultItem 사용
  const [currentFocus, setCurrentFocus] = useState(-1);
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
    setCurrentFocus(0);
  };

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
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        aria-haspopup="true"
        aria-expanded={isDropdownOpen}
        aria-activedescendant={
          currentFocus >= 0 ? `dropdown-item-${currentFocus}` : undefined
        }
      >
        {selectedItem}
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
