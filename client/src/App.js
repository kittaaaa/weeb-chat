import { useState } from "react";
import { CssBaseline } from "@mui/material";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";
// import Home from "./compages/Home";
import Login from "./components/pages/Login"
import Signup from "./components/pages/Signup";

function App() {
  const [auth, setAuth] = useState(false);
  const location = useLocation();
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/signup" element={<Signup setAuth={setAuth} />} />
        {/* <Route
          path="/"
          element={
            auth ? (
              <Home setAuth={setAuth} />
            ) : (
              <Navigate to="/login" state={{ from: location }} replace />
            )
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
