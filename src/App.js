import * as React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyProfile from "./pages/MyProfile";
import MyBooking from "./pages/MyBooking";
import SelectAddress from "./pages/SelectAddress";
import NewAddress from "./pages/NewAddress";
import Booking from "./pages/Booking";
import ServicesList from "./pages/ServiceList";
import BookingConfirmation from "./pages/BookingConfirmation";
import ThankYou from './pages/ThankYou';
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
          {/* Service Lists */}
          <Route exact path="/services" element={<ServicesList />} />
          {/* Checkout routes */}
          <Route  path="/checkout/select-address" element={<SelectAddress />} />
          <Route exact path="/checkout/new-address" element={<NewAddress />} />
          <Route exact path="/checkout/avaibility" element={<Booking />} />
          <Route exact path="/checkout/preview" element={<BookingConfirmation />} />
          <Route exact path="/checkout/booked" element={<ThankYou />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
