import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavBar from "../../components/AdminNavBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ModeratorCard from "../../components/ModeratorCard";
import HeightBox from "../../components/HeightBox";
import "./index.css";
import api from "../../api";

export default function ModeratorInfo() {
  const navigate = useNavigate();
  const [modList, setModList] = useState([]);
  useEffect(() => {
    (async () => {
      const users = await api.user.getAllUsers();
      setModList(users[1].data);
    })();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#F7F7F7" }}>
      <AdminNavBar />

      <Box
        sx={{
          paddingLeft: 10,
          paddingRight: 10,
          paddingTop: 3,
        }}
      >
        <Box sx={{ textAlign: "end" }}>
          <Button
            onClick={() => navigate("/admin/add-moderator")}
            variant="outlined"
            size="small"
          >
            Add New Add Moderator
          </Button>
        </Box>
        <Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,

              color: "inherit",
              textDecoration: "none",
            }}
          >
            Employee
          </Typography>
        </Box>
        <HeightBox height={15} />
        <Box>
          {modList.map((e) => {
            if (
              modList.length === 0 &&
              e.role === "MODERATOR" &&
              e.isActive === true
            ) {
              return (
                <Typography
                  variant="h6"
                  gutterBottom
                  align="left"
                  sx={{
                    fontWeight: 550,
                  }}
                >
                  There is no Moderators!
                </Typography>
              );
            } else if (e.role === "MODERATOR" && e.isActive === true) {
              return (
                <ModeratorCard
                  telephoneNo={e.telephoneNo}
                  profilepic={e.photo}
                  name={e.firstName + " " + e.lastName}
                  email={e.email}
                  moderatorID={e.moderatorId}
                  isActive={e.isActive}
                  acceptedCount={22}
                  rejectedCount={2}
                />
              );
            }
          })}
        </Box>

        <Box>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 900,

              color: "#ef5350",
              textDecoration: "none",
            }}
          >
            Removed
          </Typography>
        </Box>

        <Box>
          {modList.map((e) => {
            if (
              modList.length === 0 &&
              e.role === "MODERATOR" &&
              e.isActive === false
            ) {
              return (
                <Typography
                  variant="h6"
                  gutterBottom
                  align="left"
                  sx={{
                    fontWeight: 550,
                  }}
                >
                  There is no removed Moderators!
                </Typography>
              );
            } else if (e.role === "MODERATOR" && e.isActive === false) {
              return (
                <ModeratorCard
                  telephoneNo={e.telephoneNo}
                  profilepic={e.photo}
                  name={e.firstName + " " + e.lastName}
                  email={e.email}
                  moderatorID={e.moderatorId}
                  isActive={e.isActive}
                  acceptedCount={22}
                  rejectedCount={2}
                  colour="#e0e0e0"
                />
              );
            }
          })}
        </Box>
      </Box>
    </Box>
  );
}
