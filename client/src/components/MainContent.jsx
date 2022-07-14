import { useState } from "react";
import Animation from "./img/Group_5.png";
import Games from "./img/Group_6.png";
import ChatBox from "./img/Group_7.png";
import Augmented from "./img/Group_8.png";
import React from "react";
import { Box, Grid, ThemeProvider, Typography } from "@mui/material";
import { Carousel } from "react-carousel-minimal";
import { mainTheme } from "./themes";
import img1 from "./img/Projects_01.png";
import img2 from "./img/Projects_02.png";
import img3 from "./img/Projects_03.png";
import img4 from "./img/Projects_04.png";
import Button from "@mui/material/Button";
import { Link, Routes, Route, Router } from "react-router-dom";

const data = [
  {
    image: img1,
  },
  {
    image: img2,
  },
  {
    image: img3,
  },
  {
    image: img4,
  },
];

// const data = {
//   image1: { img1 },
//   image2: { img2 },
//   image3: { img3 },
//   image4: { img4 },
// };

function MainContent() {
  const [rightImage, setRightImage] = useState(data);

  const handleClick = (e) => {
    // console.log(e.target.name);
    const a = [
      {
        image: e.target.name,
      },
    ];
    // console.log(a);
    setRightImage(a);
  };

  // const handleOnChange = (index, active) => {
  //   console.log(index);
  //   console.log(active);
  // };
  return (
    <Box
      sx={{
        alignItems: "center",
        padding: "20px",
        mt: { xs: "10px", sm: "30px", md: "50px" },
        ml: { xs: "20px", sm: "70px", md: "180px" },
      }}
    >
      <Grid container xs={12} spacing={2}>
        {/*LeftSide content*/}
        <Grid item xs={12} md={6} sx={{ display: "flex", flexFlow: "column" }}>
          <Box>
            <Typography
              sx={{
                fontSize: { xs: 15, sm: 28, md: 32 },
                fontWeight: "700",
                color: "#999999",
              }}
            >
              What we offer
            </Typography>

            <Typography
              xs={12}
              md={6}
              sx={{
                fontSize: { xs: 10, sm: 12, md: 16 },
                fontWeight: "700",
                mt: "10px",
                color: "#999999",
                lineHeight: "20px",
              }}
            >
              The TEST creative Problem Solving programme is series of digital
              creation projects aimed to encourage self-motivation and student
              agency, design by New Zealand's leading IT industry experts and
              schools.
            </Typography>
          </Box>
          <Box sx={{ mt: { xs: "5px", sm: "10px", md: "20px" } }}>
            <ThemeProvider>
              <Typography
                sx={{
                  fontSize: { xs: 12, sm: 18, md: 23 },
                  fontWeight: "700",
                  color: "#999999",
                }}
              >
                What will students create?
              </Typography>
            </ThemeProvider>
            <Grid container xs={9}>
              <Grid item xs={6} md={3}>
                <Box
                  sx={{ width: "100%", maxHeight: "100%", objectFit: "cover" }}
                >
                  <img
                    onClick={handleClick}
                    name={img1}
                    style={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={Animation}
                  />
                </Box>
              </Grid>
              <Grid item xs={6} md={3}>
                <img
                  onClick={handleClick}
                  name={img2}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  src={Games}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                <img
                  onClick={handleClick}
                  name={img3}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  src={ChatBox}
                />
              </Grid>
              <Grid item xs={6} md={3}>
                {/* <Link to={img4} style={{ textDecoration: "none" }}> */}

                <img
                  onClick={handleClick}
                  name={img4}
                  style={{ maxWidth: "100%", maxHeight: "100%" }}
                  src={Augmented}
                />

                {/* </Link> */}
              </Grid>
            </Grid>
          </Box>
        </Grid>
        {/*Right side carousel*/}
        <Grid item xs={12} md={5} sx={{ ml: { md: "100px" } }}>
          <Carousel
            data={rightImage}
            time={2000}
            width="500px"
            height="350px"
            radius="10px"
            automatic={false}
            dots={true}
            slideBackgroundColor="white"
            slideImageFit="cover"
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default MainContent;
