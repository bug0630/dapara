import { createStore } from "redux";

// 초기 상태
const initialState = {
  isSearchActive: false,
};

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SEARCH":
      return {
        ...state,
        isSearchActive: !state.isSearchActive,
      };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(reducer);

export default store;
