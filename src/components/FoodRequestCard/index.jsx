import React from "react";
import Card from "@mui/material/Card";
import { Grid, Typography, CardContent, Button } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import api from "../../api";

export default function FoodRequestCard(props) {
  const { foodId, foodName, calories, category, foodImage } = props;

  async function acceptFood() {
    try {
      await api.food.updateState(foodId, 1);
      window.location.reload(false);
    } catch (error) {
      throw error;
    }
  }

  async function rejectFood() {
    try {
      await api.food.updateState(foodId, 2);
      window.location.reload(false);
    } catch (error) {
      throw error;
    }
  }

  return (
    <Card
      sx={{
        maxWidth: "auto",
        maxHeight: 140,
        backgroundColor: "#fff",
        boxShadow: 3,
        marginTop: 2,
        marginBottom: 2,
      }}
    >
      <CardContent data-testid="food_request_card">
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <img src={foodImage} alt="dp" style={{ width: 105, height: 105 }} />
          </Grid>
          <Grid item xs={7}>
            <Typography gutterBottom variant="h5" component="div">
              {foodName}
            </Typography>
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="body2" color="text.primary">
                  Calories:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary">
                  {calories}
                </Typography>
              </Grid>
            </Grid>
            <HeightBox height={10} />
            <Grid container>
              <Grid item xs={2}>
                <Typography variant="body2" color="text.primary">
                  Food Category:
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.secondary">
                  {category}
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={3} spacing={4} sx={{ marginTop: 5 }}>
            <Grid container sx={{ marginLeft: 6 }}>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  size="small"
                  color="success"
                  onClick={acceptFood}
                >
                  Approve
                </Button>
              </Grid>
              <Grid item xs={4}>
                <Button
                  variant="contained"
                  size="small"
                  color="error"
                  style={{ minWidth: 90, maxWidth: 90 }}
                  onClick={rejectFood}
                >
                  Reject
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
