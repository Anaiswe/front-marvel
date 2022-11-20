//PKG
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
// Styles
import "./index.css";
import "./App.css";

//Components
import Header from "./Components/Header";
import SoloCharacter from "./Pages/SoloCharacter";

// PAGES
import Home from "./Pages/Home";
import Characters from "./Pages/Characters";
import Comics from "./Pages/Comics";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

const App = () => {
  const [token] = useState(Cookies.get("token") || null);

  const setToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Characters" element={<Characters />} />
        <Route path="/Comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<SoloCharacter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
