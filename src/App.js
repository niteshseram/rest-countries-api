import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Country from "./pages/Country";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/country" exact element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
