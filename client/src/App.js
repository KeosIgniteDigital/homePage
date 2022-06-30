import React from "react";
import Header from "./components/Header";
import { mainTheme } from "./components/themes";
// import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <div>
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
