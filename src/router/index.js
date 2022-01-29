import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from '../utils/GlobalStyles';
import Router from './Router';
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </BrowserRouter>
  )
}