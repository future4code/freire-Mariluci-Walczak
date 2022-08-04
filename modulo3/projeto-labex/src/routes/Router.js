import {HomePage} from "../pages/Home/HomePage"
import { ListTripsPage } from "../pages/ListTrips/ListTripsPage";
import { LoginPage } from "../pages/Login/LoginPage";
import { ApplicationFormPage} from "../pages/Application/ApplicationFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHome/AdminHomePage";
import { CreateTripPage} from "../pages/Create/CreateTripPage";

export const Router = () => {
  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/list/trips" element={<ListTripsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/trips/application" element={<ApplicationFormPage />} />
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/admin/trips/list" element={<AdminHomePage />} />
        <Route path="/admin/trips/create" element={<CreateTripPage />} />

      </Routes>
    </BrowserRouter>
  );
}
