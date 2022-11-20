import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="header-container">
        <button
          className="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Go back to Home?
        </button>
        <button
          onClick={() => {
            navigate("/Signup");
          }}
          className="button"
        >
          Signup
        </button>
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="button"
        >
          Login
        </button>
        <button
          onClick={() => {
            navigate("/characters");
          }}
          className="button"
        >
          Looking for characters?
        </button>
        <button
          onClick={() => {
            navigate("/comics");
          }}
          className="button"
        >
          Looking for comics?
        </button>
      </div>
    </>
  );
};
export default Header;
