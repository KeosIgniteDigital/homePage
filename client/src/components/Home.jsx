import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { mainTheme } from "./themes";
// import { ThemeProvider } from "@mui/material/styles";
import PreFooter from "./PreFooter";
import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Middle from "./Middle";

export default function Home() {
  return (
    <div>
      {/* <ThemeProvider theme={mainTheme}> */}
      <Header />
      <Banner />
      <MainContent />
      <Middle />

      <PreFooter />
      <Footer />
      {/* </ThemeProvider> */}
    </div>
  );
}
