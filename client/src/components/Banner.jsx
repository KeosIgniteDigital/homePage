import bannerImg from "./img/Hero_image_option_1_edit_2.png";
import LoginModal from "./LoginModal";
import { Link, Routes, Route, Router } from "react-router-dom";
import React from "react";
import { Box, Button, Grid, ThemeProvider, Typography } from "@mui/material";
import { mainTheme } from "./themes";

function Banner() {
  return (
    <mainTheme>
      <Box
        sx={{
          height: { xs: "300px", md: "450px" },
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",

          backgroundPosition: "70%",
          mt: "60px",
          padding: { xs: "10px", md: "10px" },
        }}
      >
        <Grid container spacing={2}>
          <Grid
            item
            xs={6}
            md={4}
            sx={{
              alignItems: "center",
              padding: "20px",
              mt: { xs: "10px", sm: "30px", md: "50px" },
              ml: { xs: "20px", sm: "70px", md: "200px" },
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 28, md: 32 },
                fontWeight: "700",
                color: "#999999",
              }}
            >
              Prepare young minds for a better
              <span style={{ color: "#00BFFF", marginLeft: "10px" }}>
                future
              </span>
            </Typography>
            <Typography
              sx={{
                // fontSize: { xs: 10, sm: 12, md: 21 },
                mt: "10px",
                color: "#999999",
                fontWeight: "500",
                // width: "500px",
              }}
            >
              Let us help you advance students In Digital Technologies and other
              learning areas with our project based learning programme.
            </Typography>

            <Grid
              container
              sx={{
                mt: { xs: "10px", md: "20px" },
                ml: { xs: "30px", md: "100px" },
              }}
              spacing={1}
              xs={8}
              md={8}
            >
              <Grid item xs={12} sm={6}>
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
                  LEARN MORE
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Link to="LoginModal" style={{ textDecoration: "none" }}>
                  <Button
                    variant="outlined"
                    sx={{
                      border: "2px solid #fca4ce",

                      color: "#ffffff",
                      backgroundColor: "#f91c85",
                      marginLeft: "10px",
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
                    SIGN UP
                  </Button>
                </Link>

                <Typography
                  // variant="body2"
                  sx={{
                    fontSize: { xs: 5, sm: 10 },
                    color: "#999999",
                    mt: "10px",
                  }}
                >
                  *Basic subscription includes the first 15 project free of
                  charge.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </mainTheme>
  );
}

export default Banner;
