import React from "react";
import "./App.scss";
import Dashboard from "./pages/Dashboard/index.jsx";
import Navbar from "./components/Navbar/index.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Dashboard />
    </>
  );
}

export default App;
