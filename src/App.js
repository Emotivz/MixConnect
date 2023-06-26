import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DjSignupPage from "./pages/DjSignupPage/DjSignupPage";
import { useState } from "react";
import EventsPage from "./pages/EventsPage/EventsPage";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MenuIcon from "./assets/icons/menuicon.svg";

function App() {
  const [user_id, setUser_id] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [djDetails, setDjDetails] = useState(null);
  const [isDj, setIsDj] = useState(0);

  const sessionIsLoggedIn = sessionStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      {sessionIsLoggedIn && <Nav fullName={fullName} />}
      {sessionIsLoggedIn && (
        <Link className="nav__menu--show">
          <img src={MenuIcon} alt="menu-icon" className="nav__menu-icon" />
        </Link>
      )}
      {sessionIsLoggedIn && (
        <Menu
          fullName={fullName}
          djDetails={djDetails}
          setIsLoggedIn={setIsLoggedIn}
          setDjDetails={setDjDetails}
          setIsDj={setIsDj}
        />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setFullName={setFullName}
              fullName={fullName}
              djDetails={djDetails}
              setDjDetails={setDjDetails}
              isDj={isDj}
              setIsDj={setIsDj}
            />
          }
        />
        <Route
          path="/signup"
          element={<SignUpPage setUser_id={setUser_id} />}
        />
        <Route
          path="/signup/dj/"
          element={<DjSignupPage user_id={user_id} />}
        />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
