import { HomePage } from "../pages/HomePage";
import { ListTripsPage } from "../pages/ListTripsPage";
import { LoginPage } from "../pages/LoginPage";
import { ApplicationFormPage} from "../pages/ApplicationFormPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminHomePage } from "../pages/AdminHomePage";
import { CreateTripPage} from "../pages/CreateTripPage";

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
