import { Routes, Route, Navigate } from "react-router-dom";
import { AppShell } from "./components";
import { Products } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppShell />}>
        <Route path="products" element={<Products />} />
        <Route path="/" element={<Navigate replace to="/products" />} />
      </Route>
    </Routes>
  );
}

export default App;
