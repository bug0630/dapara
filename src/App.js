import { Route, Routes } from "react-router";
import { Provider } from "react-redux";
import store from "./store/store";
import "./css/reset.css";
import "./css/root.scss";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
