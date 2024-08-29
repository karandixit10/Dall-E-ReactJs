import React from "react";
import {RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, CreatePost, LoginForm, RegisterForm } from "./pages";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import * as Sentry from '@sentry/react';

// Configure axios defaults
axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

// Create the browser router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/create-post",
    element: <CreatePost />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
]);

// Main App component
const App = () => {
  return (
    <>
      {/* Main content */}
      <main className="sm:p-8 px-8 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        {/* Provide the router */}
        <RouterProvider router={router} />
      </main>
      {/* Toast notifications container */}
      <ToastContainer position="top-center" toastOptions={{ duration: 2000 }} />
      </>
  );
};

export default Sentry.withProfiler(App);
