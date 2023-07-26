import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "./components/ui/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Booking from "./pages/Bookings.jsx";
import AuthPage from "./pages/AuthPage.jsx";

function App() {
  const asd = import.meta.env.VITE_SUPABASE_KEY;
  console.log(import.meta.env.DEV, asd);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="bookings" element={<Booking />} />
        </Route>

        <Route path="auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
