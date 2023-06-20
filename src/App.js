import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DjNamePage from "./pages/DjNamePage/DjNamePage";
import DjSignupPage from "./pages/DjSignupPage/DjSignupPage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* make this a nested route */}
        <Route path="/signup/dj/" element={<DjSignupPage />}>
          {/* <Route path="name" element={<DjNamePage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
