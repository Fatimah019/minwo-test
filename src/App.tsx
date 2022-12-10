import React from "react";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages";
import { AppShell } from "./components/AppShell/AppShell";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route path="products" element={<Products />} />
        {/* <Route>
          <Redirect to="/products" />
        </Route> */}
      </Route>
    </Routes>
  );
}

export default App;
