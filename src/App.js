import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { app } from "./firebaseConfig";
import Home from "./components/Home";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addTodo" element={<Todo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
