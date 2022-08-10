import React from "react";
import { useNavigate } from "react-router-dom";
function Header(props) {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navba1  navbar-light bg-light border border-bottom-2">
        <div className="navDiv d-flex">
          <div className="container-fluid">
            <span
              className="navbar-brand mb-0 fs-2"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Todo App
              <span className="mx-3">
                <img src="./icon/todo.png" alt="logo" width="40" height="40" />
              </span>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
