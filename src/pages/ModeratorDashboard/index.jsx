import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import ModeratorNavBar from "../../components/ModeratorNavBar";
import FoodRequestCard from "../../components/FoodRequestCard";
import MarkedFoodCard from "../../components/MarkedFoodCard";
import foodImg from "../../assets/food1.jpg";
import api from "../../api";
import "./index.css";

export default function ModeratorDashboard() {
  const [foodList, setFoodList] = useState([]);
  useEffect(() => {
    (async () => {
      const foods = await api.food.getAllFoods();
      setFoodList(foods[1].data);
    })();
  }, []);

  return (
    <div className="backContainer">
      <ModeratorNavBar />
      <HeightBox height={10} />
      <Box
        sx={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          borderRadius: 5,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          align="left"
          sx={{
            fontWeight: 700,
            letterSpacing: ".1rem",
            color: "inherit",
          }}
        >
          Food Requests
        </Typography>
        <Box
          sx={{
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            sx={{
              fontWeight: 550,
              color: "#757575",
            }}
          >
            Recent Food Requests
          </Typography>
          {foodList.map((food) => {
            if (foodList.length === 0) {
              return (
                <Typography
                  variant="h6"
                  gutterBottom
                  align="left"
                  sx={{
                    fontWeight: 550,
                  }}
                >
                  There is no Food Requests right now!
                </Typography>
              );
            } else if (food.state === 0) {
              return (
                <FoodRequestCard
                  foodId={food.id}
                  foodName={food.name}
                  calories={food.calory}
                  category={food.foodCategory}
                  foodImage={foodImg}
                />
              );
            }
          })}
        </Box>
        <HeightBox height={30} />
        <Box
          sx={{
            borderRadius: 2,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            align="left"
            sx={{
              fontWeight: 550,
              color: "#757575",
            }}
          >
            Marked Food Requests
          </Typography>
          {foodList.map((food) => {
            if (food.state !== 0) {
              var approved;
              if (food.state === 1) {
                approved = true;
              } else if (food.state === 2) {
                approved = false;
              }
              return (
                <MarkedFoodCard
                  foodName={food.name}
                  calories={food.calory}
                  category={food.foodCategory}
                  foodImage={foodImg}
                  isApproved={approved}
                />
              );
            }
          })}
        </Box>
        <HeightBox height={30} />
      </Box>
    </div>
  );
}
