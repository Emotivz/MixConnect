import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.scss";
import Landing from "./pages/Landing/Landing";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import DjSignupPage from "./pages/DjSignupPage/DjSignupPage";
import { useState } from "react";
import EventsPage from "./pages/EventsPage/EventsPage";
import Nav from "./components/Nav/Nav";
import Menu from "./components/Menu/Menu";
import MenuIcon from "./assets/icons/menuicon.svg";

function App() {
  const [user_id, setUser_id] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");
  const [djDetails, setDjDetails] = useState(null);

  return (
    <BrowserRouter>
      {isLoggedIn && <Nav fullName={fullName} />}
      {isLoggedIn && (
        <Link className="nav__menu--show">
          <img src={MenuIcon} alt="menu-icon" className="nav__menu-icon" />
        </Link>
      )}
      {isLoggedIn && (
        <Menu
          fullName={fullName}
          djDetails={djDetails}
          setIsLoggedIn={setIsLoggedIn}
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
