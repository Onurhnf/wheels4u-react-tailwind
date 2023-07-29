import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AppLayout from "./components/ui/AppLayout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import BookingsPage from "./pages/BookingsPage.jsx";
import VehiclesPage from "./pages/VehiclesPage.jsx";
import { Toaster } from "react-hot-toast";
import colors from "tailwindcss/colors.js";
import ProtectedRoute from "./components/ui/ProtectedRoute.jsx";
import Logout from "./components/auth/Logout.jsx";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="wheels" element={<VehiclesPage />} />
            <Route path="logout" element={<Logout />} />
          </Route>

          <Route path="auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 2000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: colors.gray[100],
            color: colors.gray[700],
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
