import { Link, Routes, Route, Router } from "react-router-dom";
import { Button, Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { mainTheme } from "./themes";
import { useState } from "react";
import React from "react";
import Mimg1 from "./img/Group 1.png";
import Mimg2 from "./img/Group 4.png";
import Mimg3 from "./img/Group 9.png";
import Mimg4 from "./img/Group 10.png";
import InfoBoard from "./InfoBoard";
import InfoBoard2 from "./InfoBoard 2";
import InfoBoard3 from "./InfoBoard 3";
import InfoBoard4 from "./InfoBoard 4";

export default function Middle() {
  const [content, setContent] = useState("content1");
  const Text = {
    content1: <InfoBoard />,
    content2: <InfoBoard2 />,
    content3: <InfoBoard3 />,
    content4: <InfoBoard4 />,
  };

  return (
    <div>
      <mainTheme>
        <Grid
          sx={{ paddingTop: "3%" }}
          justifyContent="center"
          container
          spacing={0}
          md={12}
        >
          <Typography
            sx={{
              fontSize: { xs: 15, sm: 28, md: 36 },
              fontWeight: "700",
              color: "#999999",
            }}
          >
            Teaching kids programing and digital skills is MORE than just
            writing code.
          </Typography>
        </Grid>
        <Grid
          sx={{ flexGrow: 1, paddingTop: "5%" }}
          justifyContent="center"
          container
          spacing={2}
          md={12}
        >
          <Grid item xs={2}>
            <img src={Mimg1} />
          </Grid>

          <Grid item xs={2}>
            <img src={Mimg2} />
          </Grid>

          <Grid item xs={2}>
            <img src={Mimg3} />
          </Grid>
          <Grid item xs={2}>
            <img src={Mimg4} />
          </Grid>
        </Grid>
        <Grid
          sx={{ flexGrow: 1, paddingTop: "3%" }}
          justifyContent="center"
          container
          spacing={0}
          md={12}
        >
          <Typography
            sx={{
              fontSize: { xs: 15, sm: 28, md: 36 },
              fontWeight: "700",
              color: "#999999",
            }}
          >
            How our programme helps teacher and schools
          </Typography>
        </Grid>

        <Grid
          sx={{ flexGrow: 1, paddingTop: "5%" }}
          justifyContent="center"
          container
          spacing={2}
          md={12}
        >
          <Grid item xs={2}>
            <Button
              onClick={() => {
                setContent("content1");
              }}
              sx={{
                backgroundColor: "#43C0F6",
                border: "2px solid #43C0F6",
                color: "#ffffff",

                "&:hover": {
                  color: "#43C0F6",
                  background: "white",
                  border: "2px solid #7eabbe",
                },
              }}
            >
              LEARNING PATHWAYS{" "}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              onClick={() => {
                setContent("content2");
              }}
              sx={{
                backgroundColor: "#43C0F6",
                border: "2px solid #43C0F6",
                color: "#ffffff",

                "&:hover": {
                  color: "#43C0F6",
                  background: "white",
                  border: "2px solid #7eabbe",
                },
              }}
            >
              DIGITAL TECHNOLOGIES{" "}
            </Button>
          </Grid>

          <Grid item xs={2}>
            <Button
              onClick={() => {
                setContent("content3");
              }}
              sx={{
                backgroundColor: "#43C0F6",
                border: "2px solid #43C0F6",
                color: "#ffffff",

                "&:hover": {
                  color: "#43C0F6",
                  background: "white",
                  border: "2px solid #7eabbe",
                },
              }}
            >
              KEY COMPETENCIES{" "}
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              onClick={() => {
                setContent("content4");
              }}
              sx={{
                backgroundColor: "#43C0F6",
                border: "2px solid #43C0F6",
                color: "#ffffff",

                "&:hover": {
                  color: "#43C0F6",
                  background: "white",
                  border: "2px solid #7eabbe",
                },
              }}
            >
              IR4.0
            </Button>
          </Grid>
        </Grid>
        <Grid
          sx={{ width: "100%", marginTop: "1%", backgroundColor: "#e1e3e4" }}
          justifyContent="center"
          container
          xs={12}
          md={12}
        >
          <Grid
            item
            xs={12}
            md={12}
            sx={{ padding: "3%", alignItems: "center", marginLeft: "20% " }}
          >
            {Text[content]}
          </Grid>
        </Grid>
      </mainTheme>
    </div>
  );
}
