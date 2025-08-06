import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import SliderBanner from "./SliderBanner";
import { MdFlightTakeoff } from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="logo">
          <MdFlightTakeoff size={24} style={{ marginRight: 8 }} />
          FlightBook
        </div>

        {/* Hamburger button visible on small screens */}
        <button
          className="hamburger"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {/* Simple hamburger icon */}
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </button>

        {/* Navigation links */}
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link to="/BookFlight" onClick={() => setMenuOpen(false)}>Book a flight</Link>
          <Link to="/YourFlights" onClick={() => setMenuOpen(false)}>YourFlights</Link>
          <Link to="/MyBooking" onClick={() => setMenuOpen(false)}>My Bookings</Link>
          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
        </div>
      </nav>

      {/* You can keep SliderBanner outside or inside navbar as you want */}
      <SliderBanner />
    </div>
  );
};

export default Navbar;