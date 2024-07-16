import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import List from "./pages/List.js";
import Profile from "./pages/Profile.js";
import "./reset.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/kakao" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
