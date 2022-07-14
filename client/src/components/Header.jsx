import Logo from "./img/Star Logo 07-2.png";
import flag1 from "./img/NZ Flag.png";
import flag2 from "./img/Maori flag.png";
import React from "react";
import { Link, Routes, Route, Router } from "react-router-dom";
import LoginModal from "./LoginModal";

import {
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  Stack,
  Grid,
  styled,
  Container,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <AppBar>
      <Toolbar
        sx={{ display: "flex", justifyContent: "space-around", color: "white" }}
      >
        <Stack direction="row">
          <img
            src={Logo}
            className="img-from-src"
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
        </Stack>
        <Stack
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          direction="row"
          gap={2}
          justifyContent="center "
        >
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
              "&:hover": { color: "orange", border: "1px solid gray" },
            }}
          >
            <h3 style={{ marginBottom: 0 }}>HOME </h3>
          </Link>
          <h3 style={{ marginBottom: 0 }}>FEATURES </h3>
          <h3 style={{ marginBottom: 0 }}>TEACHERS </h3>
        </Stack>

        <Stack direction="row" spacing={{ xs: 1, sm: 1, md: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexFlow: "column",
              // backgroundColor: "blue",
              alignItems: "center",
            }}
          >
            {/* <h4>Lang</h4> */}
            <div style={{ display: "flex", flexFlow: "row" }}>
              <span
                style={{
                  fontSize: "12px",
                  marginRight: "10px",
                  lineHeight: "20px",
                  marginBottom: "5px",
                }}
              >
                LANG
              </span>
              <img
                style={{ height: "20px", marginRight: "10px" }}
                src={flag2}
              />
              <img style={{ height: "20px" }} src={flag1} />
            </div>
            <Link
              to="LoginModal"
              style={{
                color: "white",
                textDecoration: "none",
                "&:hover": { color: "orange", border: "1px solid gray" },
              }}
            >
              <h4 style={{ margin: "0 auto" }}>REGISTER | LOGIN </h4>
            </Link>
          </Box>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
export default Header;
