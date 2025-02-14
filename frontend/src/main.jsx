/* eslint-disable no-unused-vars */
import React from "react";
import ReactDom from 'react-dom/client';
import './index.css';
import 'preline';
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
    
  </React.StrictMode>
);