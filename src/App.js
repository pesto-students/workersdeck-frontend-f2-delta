import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import SelectAddress from "./pages/SelectAddress";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/my-profile" element={<MyProfile />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
