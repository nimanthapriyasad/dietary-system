import React from "react";
import AdminNavBar from "../../components/AdminNavBar";
import { Box, Container, Grid } from "@mui/material";
import { TotalUsers } from "../../components/dashboardItems/totalUsers";
import { GoalProgress } from "../../components/dashboardItems/goalProgress";
import { TotalFoods } from "../../components/dashboardItems/totalFoods";
import { TotalMealPlans } from "../../components/dashboardItems/totalMealPlans";
import { AppUsage } from "../../components/dashboardItems/appUsage";
import { GoalType } from "../../components/dashboardItems/goalType";
import HeightBox from "../../components/HeightBox";
import "./index.css";

export default function AdminDashboard() {
  return (
    <div>
      <AdminNavBar />
      <HeightBox height={20} />
      <Box
        sx={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          borderRadius: 5,
          boxShadow: 3,
          paddingBottom: 5,
        }}
        className="outContainer"
      >
        <Container maxWidth={false}>
          <Grid container spacing={3}>
            <Grid item lg={3} sm={6} xl={3} xs={12}>
              <TotalUsers />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <GoalProgress />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalMealPlans />
            </Grid>
            <Grid item xl={3} lg={3} sm={6} xs={12}>
              <TotalFoods sx={{ height: "100%" }} />
            </Grid>
            <Grid item lg={8} md={12} xl={9} xs={12}>
              <AppUsage />
            </Grid>
            <Grid item lg={4} md={6} xl={3} xs={12}>
              <GoalType sx={{ height: "100%" }} />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <HeightBox height={20} />
    </div>
  );
}
