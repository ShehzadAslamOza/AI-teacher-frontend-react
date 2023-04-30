import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Comments from "./components/Teacher";

function App() {
  //const [teacherQuery, setTeacherQuery] = useState("");
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
