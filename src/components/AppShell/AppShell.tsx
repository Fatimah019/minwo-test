import React from "react";
import { Outlet } from "react-router-dom";
import { Tabs } from "../Tabs/Tabs";

const AppShell = () => {
  return (
    <>
      <Tabs />
      <Outlet />
    </>
  );
};

export { AppShell };
