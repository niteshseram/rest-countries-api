import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Country from "./pages/Country";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

import GlobalStyles from "./Global.styled";
import { darkTheme, lightTheme } from "./themes";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <Navbar onToggle={toggleTheme} theme={theme} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/country" exact element={<Country />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
