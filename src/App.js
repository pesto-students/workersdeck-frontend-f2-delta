import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import MyBooking from "./pages/MyBooking";
import SelectAddress from "./pages/SelectAddress";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <main>
      <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route  path="/my-profile" element={<MyProfile />} />
          <Route  path="/my-booking" element={<MyBooking />} />
          {/* Checkout routes */}
          <Route  path="/select-address" element={<SelectAddress />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
