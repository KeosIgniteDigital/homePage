import React from "react";
import {
  Container,
  Box,
  Button,
  Grid,
  mainTheme,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import Pic from "./img/teacher-4784916_1920.png";
import { Route, Routes, Link } from "react-router-dom";

export default function PreFooter() {
  return (
    <div>
      <Box sx={{ padding: "200px" }}>
        <Grid container spacing={2}>
          {/*/picture container */}
          <Grid item md={6} sx={{ display: "flex" }}>
            <img src={Pic} />
          </Grid>

          {/* right hand side container */}
          <Grid item md={6}>
            {/* <Typography variant="text">
              what are you waiting for start teaching Digital Technologies Today
              ! if you need more information we are happy to answer any
              questions you may have.
            </Typography> */}
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 28, md: 45 },
                fontWeight: "900",
                color: "#999999",
                font: "mainTheme.typography.fontFamily",
                // fontSize: { xs: 15, sm: 20, md: 40 },
              }}
            >
              what are you waiting for?
            </Typography>
            <Typography
              sx={{
                font: "mainTheme.typography.fontFamily",
                fontSize: { xs: 15, sm: 28, md: 32 },
                fontWeight: "400",
                color: "#999999",
                // width: "500px",
              }}
            >
              Start teaching Digital Technologies Today.
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: 10, sm: 12, md: 21 },
                mt: "10px",
                color: "#999999",
                fontWeight: "500",
                width: "500px",
                // padding: "100px",
                // fontSize: { xs: 15, sm: 20, md: 25 },
                // color: "#000000",
              }}
            >
              If you need more information we are happy to answer any questions
              you may have.
            </Typography>
            <Grid container xs={10} sx={{ mt: "50px" }}>
              <Grid item xs={6}>
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "#43C0F6",
                    border: "2px solid #43C0F6",
                    color: "#ffffff",
                    marginLeft: "10px",
                    "&:hover": {
                      color: "#43C0F6",
                      background: "white",
                      border: "2px solid #7eabbe",
                    },
                  }}
                >
                  enquire now
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Link to="login-form" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "2px solid #fca4ce",

                      color: "#ffffff",
                      backgroundColor: "#f91c85",
                      marginLeft: "10px",
                      mr: "30px",
                      "&:hover": {
                        color: "#fca4ce",
                        background: "#95104f",
                        border: "2px solid #fca4ce",
                        //   borderRadius: "5px",
                        //   fontSize: { xs: 8, md: 10 },
                        // padding: { xs: "5px", md: "10px" },
                        //   minHeight: 0,
                      },
                    }}
                  >
                    Sign up
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
