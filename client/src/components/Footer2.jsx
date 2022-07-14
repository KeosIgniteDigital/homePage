import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";

function Footer() {
  return (
    <div>
      <Box
        p={{ xs: 3, sm: 10 }}
        color="textFooter.gray"
        bgcolor="textFooter.blue"
      >
        <Container maxWidth="lg">
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6} md={2}>
              <h3>COMPANY</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Partners</p>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <h3>COMPANY</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Partners</p>
              <p>somethi3gn</p>
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <h3>COMPANY</h3>
              <p>About Us</p>
              <p>Careers</p>
              <p>Partners</p>
              <p>somethi3gn</p>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}
export default Footer;
