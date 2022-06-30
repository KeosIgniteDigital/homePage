import Logo from "./img/Star Logo 07-2.png";
import flag1 from "./img/NZ Flag.png";
import flag2 from "./img/Maori flag.png";
import React from "react";

import {
  Button,
  IconButton,
  MenuItem,
  Toolbar,
  Typography,
  Box,
  Stack,
  styled,
  Grid,
  Container,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";

function Header() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Stack direction="row">
          <img src={Logo} className="img-from-src" />
        </Stack>
        <Stack direction="row" gap={2} alignItems="flex-end">
          <h3 style={{ marginBottom: 0 }}>HOME </h3>
          <h3 style={{ marginBottom: 0 }}>FEATURES </h3>
          <h3 style={{ marginBottom: 0 }}>TEACHERS </h3>
        </Stack>
        {/* <Container maxWidth="sm"> */}
        <Stack
          // sx={{ height: "1vh" }}
          direction="row"
          spacing={{ xs: 1, sm: 1, md: 1 }}
        >
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
                style={{ height: "20px", paddingRight: "10px" }}
                src={flag2}
              />
              <img style={{ height: "20px" }} src={flag1} />
            </div>

            <h3 style={{ margin: "0 auto" }}>REGISTER | LOGIN </h3>
          </Box>
          {/* </Container> */}
        </Stack>
        {/* <Stack direction="row" spacing={{ xs: 1, sm: 1, md: 1 }}> */}
        {/* <h6>LANG</h6> */}
        {/* <img src={flag2}></img> */}
        {/* <img src={flag1}></img> */}
        {/* </Stack> */}
        {/* <box sx={{ height: "1vh" }}></box> */}
      </Toolbar>
    </AppBar>
  );
}
export default Header;

// another version

// function Header() {
//   return (
//     <AppBar position="static">
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         {/* <Container gap={4} sx={{ display: "flex" }}> */}
//         <Grid spacing={1} container item xs={12}>
//           <img src={Logo} />

//           <Box gap={4} sx={{ display: "flex" }}>
//             <h3>HOME </h3>
//             <h3>FEATURES </h3>
//             <h3>TEACHERS </h3>
//           </Box>
//           {/* <div> */}
//           <h6>LANG</h6>
//           <img src={flag2}></img>
//           <img src={flag1}></img>
//           {/* <Stack direction="row" spacing={1}></Stack> */}
//           {/* <Typography> */}
//           <h3>REGISTER | LOGIN </h3>
//           {/* </div> */}
//           {/* </Typography> */}
//         </Grid>
//         {/* </Container> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Header;

// another version

// function Header(){
// {
/* <Button variant="contained">Contained</Button>
  <Button variant="contained" color="secondary">
    Outlined
  </Button> */
// }
//   return(
//   <AppBar position="static">
//       <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//         <Button variant="outlined">variant outlined</Button>
//         <Button variant="outlined">variant outlined</Button>
//         <Box>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuItem />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//         </Box>

//         <Button color="inherit">Login</Button>
//       </Toolbar>
//     </AppBar>
//     );
// };
// export default Header;

// {
/* <AppBar position="static"> */
// }
// <Toolbar
//   sx={{
//     display: "flex",
//     justifyContent: "space-between",
//   }}
// >
//   <Box sx={{ flexGrow: 4 }}>
//     <Grid container spacing={1}>
//       <Grid item xs>
//         <h2>xs</h2>
//       </Grid>
//       <Grid item xs={3}>
//         <h2>xs=6</h2>
//       </Grid>
//       <Grid item xs>
//         <h1>xs</h1>
//       </Grid>
//     </Grid>
//   </Box>
// </Toolbar>
// </AppBar>
//   );
// }

// sx={{
//   width: 300,
//   margin: "auto",
// }}
