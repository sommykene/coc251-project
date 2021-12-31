import { Routes, Route, Link, Outlet } from "react-router-dom";
import SignUpScreen from "./screens/account/SignUpScreen";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
            <Link style={{ display: "block", margin: "1rem 0" }} to={"/signup"}>
              Signup
            </Link>
          </main>
        }
      />
      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
}
