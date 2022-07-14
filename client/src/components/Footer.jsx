// import { Container } from "@mui/material";
// import { Grid } from "@mui/material";
// import { Box } from "@mui/material";

// function Footer() {
//   return (
//     <div>
//       <Box
//         p={{ xs: 3, sm: 10 }}
//         color="textFooter.gray"
//         bgcolor="textFooter.blue"
//       >
//         <Container maxWidth="lg">
//           <Grid>
//             <Grid
//               container
//               spacing={5}
//               rowSpacing={2}
//               columnSpacing={2}
//               direction="column"
//               justifyContent={"center"}
//               alignItems={"center"}
//             >
//               <Box>
//                 <h3>COMPANY</h3>
//                 <p>About Us</p>
//                 <p>Careers</p>
//                 <p>Partners</p>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         <Container maxWidth="lg">
//           <Grid>
//             <Grid
//               container
//               spacing={1}
//               rowSpacing={1}
//               columnSpacing={1}
//               direction="column"
//               justifyContent={"center"}
//               alignItems={"center"}
//             >
//               <Box>
//                 <h3>COMPANY</h3>
//                 <p>About Us</p>
//                 <p>Careers</p>
//                 <p>Partners</p>
//               </Box>
//             </Grid>
//           </Grid>
//         </Container>

//         <Box>
//           <Box>
//             <h3>COMPANY</h3>
//             <p>About Us</p>
//             <p>Careers</p>
//             <p>Partners</p>
//           </Box>
//           <p>somethi3gn</p>
//         </Box>
//         <Box>
//           <Box>
//             <h3>COMPANY</h3>
//             <p>About Us</p>
//             <p>Careers</p>
//             <p>Partners</p>
//           </Box>
//           <p>somethi3gn</p>
//         </Box>
//       </Box>
//     </div>
//   );
// }
// export default Footer;

// <Box sx={{height:{xs:"120px",md:"480px"},backgroundImage:'url(${bannerImg})'backgroundRepeat:"no-repeat",backgroundPosition:"50% 50%"}}/>

// import { Container } from "@mui/material";
// import { Grid } from "@mui/material";
// import { Box } from "@mui/material";
import { Box, Grid, ThemeProvider, Container } from "@mui/material";
import mainTheme from "./themes";
function Footer() {
  return (
    <div>
      <Box
        sx={{
          color: "#A5A5A5",
          backgroundColor: "#ADD5EE",
          paddingRight: "10%",
          paddingLeft: "10%",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <Grid container spacing={2} md={12} xs={12} sm={12}>
          <Grid item xs={12} sm={2} md={2}>
            <h3>COMPANY</h3>
            <p>About Us</p>
            <p>Careers</p>
            <p>Partners</p>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <h3>COURSES</h3>
            <p>Register</p>
            <p>Login</p>
            <p>Projects</p>
            <p>Teachers</p>
            <p>Parents</p>
            <p>Resources</p>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <h3>SUPPORT</h3>

            <p>Helpdesk</p>
            <p>Contact Us</p>
          </Grid>
          <Grid item xs={12} sm={2} md={2}>
            <h3>LEGAL </h3>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </Grid>
          <Grid xs={12} sm={4} md={4}>
            <h3>leveUp Works</h3>
            <p>
              LevelUp Works is an Auckland-based enterprise dedicated to
              feveloping game-based learning software to help teachers in
              response to the New Zeland Digital Technilogies & Hangarua
              Matihiko alan@levelupworks.com (021)668185
            </p>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default Footer;
