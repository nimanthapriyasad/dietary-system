import * as React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { blue } from "@mui/material/colors";
import logo from "../../assets/logo.png";

const LoginButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: "#1a237e",
  "&:hover": {
    backgroundColor: blue[900],
  },
}));

export default function SignNavBar() {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ paddingLeft: 10, paddingRight: 10, color: "#ffffff" }}
      color="transparent"
      style={{
        "background-image":
          "linear-gradient(to right, #1a237e, #1e88e5, #42a5f5)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            component="img"
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              width: 40,
              height: 40,
              marginRight: 1,
            }}
            alt="Logo"
            src={logo}
          />

          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            DIETARY
          </Typography>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            DIETARY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }} />

          <Box sx={{ flexGrow: 0 }}>
            <LoginButton variant="contained" onClick={() => navigate("/login")}>
              LOGIN
            </LoginButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
