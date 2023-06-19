import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
