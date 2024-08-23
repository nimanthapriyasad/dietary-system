import React from "react";
import Card from "@mui/material/Card";
import { Grid, Typography, CardContent, Button } from "@mui/material";
import HeightBox from "../../components/HeightBox";

export default function MarkedFoodCard(props) {
  const { foodName, calories, category, foodImage, isApproved } = props;

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
      <CardContent>
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
                <Typography
                  variant="body2"
                  color="text.primary"
                  data-testid="marked_food_card"
                >
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
            <Button fullWidth disabled variant="contained" size="small">
              {isApproved ? "Approved" : "Rejected"}
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
