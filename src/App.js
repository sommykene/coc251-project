import { Routes, Route, Link, Outlet } from "react-router-dom";
import LoginScreen from "@screens/account/LoginScreen";
import SignUpScreen from "@screens/account/SignUpScreen";
import Dashboard from "@screens/main/Dashboard";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Dashboard />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/login" element={<LoginScreen />} />
    </Routes>
  );
}
