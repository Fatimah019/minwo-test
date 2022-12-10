import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";

const AppShell = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export { AppShell };
