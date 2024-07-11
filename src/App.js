import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import List from "./pages/List.js";
import Profile from "./pages/Profile.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/kakao" element={<List />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
