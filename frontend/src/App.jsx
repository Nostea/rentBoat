import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import BoatDetailPage from "./pages/BoatDetailPage";
import AddBoatPage from "./pages/AddBoatPage";
import ReserveBoatPage from "./pages/ReserveBoatPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/boats/addBoat" element={<AddBoatPage />} />
          <Route path="/boats/reserveBoat" element={<ReserveBoatPage />} />
          <Route path="/boats/:boatId" element={<BoatDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
