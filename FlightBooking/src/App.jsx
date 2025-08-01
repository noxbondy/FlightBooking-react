import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { Routes, Route } from "react-router-dom";
import { HashRouter } from 'react-router-dom';

import BookFlight from "./pages/BookFlight";
import MyBooking from "./pages/MyBooking";
import YourFlights from "./pages/YourFlights";
import Dashboard from "./dashboard/Dashboard";
import AllFlights from "./dashboard/AllFlights";
import AvailableFlights from "./dashboard/AvailableFlights";
import CreateFlight from "./dashboard/CreateFlight";
import BookedFlights from "./dashboard/BookedFlights";
import ParentPage from "./dashboard/ParentPage";
import FlightSearch from "./dashboard/FlightSearch";
import FilterByPrice from "./dashboard/FilterByPrice";

const basename = import.meta.env.PROD ? "/FlightBooking-react" : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      
      <Navbar />
      <Routes>
        <Route path="/BookFlight" element={<BookFlight />} />
        <Route path="MyBooking" element={<MyBooking />} />
        <Route path="YourFlights" element={<YourFlights />} />

        <Route path="/" element={<ParentPage />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="AllFlights" element={<AllFlights />} />
          <Route path="AvailableFlights" element={<AvailableFlights />} />
          <Route path="BookedFlights" element={<BookedFlights />} />
          <Route path="CreateFlight" element={<CreateFlight />} />
          <Route path="FlightSearch" element={<FlightSearch />} />
          <Route path="FilterByPrice" element={<FilterByPrice />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;