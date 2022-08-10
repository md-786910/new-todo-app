import React from "react";

function Header() {
  return (
    <>
      <nav className="navbar   navbar-light bg-light border border-bottom-2">
        <div
          className="nav "
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div className="container-fluid">
            <span
              className="navbar-brand mb-0 fs-2"
              style={{ cursor: "pointer" }}
            >
              Todo App
              <span className="mx-3">
                <img src="./icon/todo.png" alt="logo" width="40" height="40" />
              </span>
            </span>
          </div>
          <div className="logout">
            <button className="btn btn-outline-success">logout</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
