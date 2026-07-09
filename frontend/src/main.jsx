import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./index.css";
import { ThemeProvider } from "@/context/ThemeContext";
import router from "./router";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <ThemeProvider>

        <RouterProvider router={router} />

      </ThemeProvider>

    </QueryClientProvider>
    <Toaster position="top-right" />
  </React.StrictMode>
);