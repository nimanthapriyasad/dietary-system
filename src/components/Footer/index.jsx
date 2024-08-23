import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./index.css";
import logo from "../../assets/footerlogo.png";

export default function Footer() {
  return (
    <footer className="footer" data-testid="footer">
      <Box sx={{ paddingLeft: 10, paddingRight: 10 }}>
        <Grid container spacing={4}>
          <Grid item xs={8}>
            <Typography variant="h5" gutterBottom sx={{ color: "#ffffff" }}>
              About Dietary
            </Typography>
            <Typography variant="body2" gutterBottom sx={{ color: "#ffffff" }}>
            Welcome to [Dietary], your ultimate fitness destination! We offer state-of-the-art
             equipment, personalized training, and a vibrant community to help you achieve your fitness
              goals. Whether you're a beginner or a seasoned athlete, we're here to support your
             journey to a healthier, stronger you. Join us today! <br />
            
            </Typography>
            <Box className="icons">
              <Typography
                variant="body2"
                gutterBottom
                sx={{ color: "#ffffff" }}
              >
                Contact us:
              </Typography>
              <FacebookIcon sx={{ color: "#fff" }} />
              <TwitterIcon sx={{ color: "#fff" }} />
              <InstagramIcon sx={{ color: "#fff" }} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box
              component="img"
              sx={{
                height: 150,
                width: 105,
                marginLeft: 20,
              }}
              alt="Logo"
              src={logo}
            />
          </Grid>
        </Grid>
      </Box>
      <Box className="copyright">
        <Typography variant="body2" gutterBottom sx={{ color: "#bdbdbd" }}>
          Copyright &copy; {new Date().getFullYear()}
        </Typography>
      </Box>
    </footer>
  );
}
