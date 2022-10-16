import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import {
  Venues,
  Dashboard,
  Services,
  Support,
} from "./pages";
import VenueSinglePage from "./view/VenueSinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/venues" element={<Venues />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/supports" element={<Support />} />
            <Route path="/venues/:id" element={<VenueSinglePage />} />

          </Routes>
        </Sidebar>
      </BrowserRouter>
    </>
  );
}

export default App;
