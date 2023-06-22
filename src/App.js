import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DjSignupPage from "./pages/DjSignupPage/DjSignupPage";
import { useState } from "react";
function App() {
  const [user_id, setUser_id] = useState();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/signup"
          element={<SignUpPage setUser_id={setUser_id} />}
        />
        {/* make this a nested route */}
        <Route path="/signup/dj/" element={<DjSignupPage user_id={user_id} />}>
          {/* <Route path="name" element={<DjNamePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
