import React from "react";
//import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Header />
      <ToastContainer />
      <Container fluid>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
