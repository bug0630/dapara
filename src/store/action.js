// src/store/actions.js

export const TOGGLE_SEARCH = "TOGGLE_SEARCH";

// 검색 상태를 토글하는 액션 생성자
export const toggleSearch = () => ({
  type: TOGGLE_SEARCH,
});
