import { Route, Routes } from "react-router";
import "./css/reset.css";
import Main from "./pages/Main";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
