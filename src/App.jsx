import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import RentalListing from "./pages/RentalListing";
import RentalApplications from "./pages/RentalApplications";
import TenentScreening from "./pages/TenantScreening";
import CreditAndBackgroundCheck from "./pages/CreditAndBackgroundCheck";
import OnlineRentCollection from "./pages/OnlineRentCollection";
import MaintenanceTracking from "./pages/MaintenanceTracking";
import RentAnalysis from "./pages/RentAnalysis";
import PropertyAccouting from "./pages/PropertyAccouting";
import PropertyCalculator from "./pages/PropertyCalculator";
import Fastpay from "./pages/Fastpay";
import DigitalLeases from "./pages/DigitalLeases";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/pricing" element={<Pricing />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/rental-listing" element={<RentalListing />}></Route>
        <Route path="/online-rental-applications" element={<RentalApplications />}></Route>
        <Route path="/online-tenant-screening" element={<TenentScreening />}></Route>
        <Route path="/credit-and-background-check" element={<CreditAndBackgroundCheck />}></Route>
        <Route path="/online-rent-collection" element={<OnlineRentCollection />}></Route>
        <Route path="/maintenance-tracking" element={<MaintenanceTracking />}></Route>
        <Route path="/rent-analysis" element={<RentAnalysis />}></Route>
        <Route path="/rental-property-accounting" element={<PropertyAccouting />}></Route>
        <Route path="/rental-property-calculator" element={<PropertyCalculator />}></Route>
        <Route path="/fastpay" element={<Fastpay />}></Route>
        <Route path="/rental-lease-agreement" element={<DigitalLeases />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
