import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/Covid_Guest_SignIn_Submit" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
