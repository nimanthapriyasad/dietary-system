import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [63, 15, 22],
      backgroundColor: ["#3F51B5", "#e53935", "#FB8C00"],
      borderWidth: 8,
      borderColor: "#FFFFFF",
      hoverBorderColor: "#FFFFFF",
    },
  ],
  labels: ["Loss", "Gain", "Maintaining"],
};

export function GoalType(props) {
  const theme = useTheme();

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false,
    },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: "index",
      titleFontColor: theme.palette.text.primary,
    },
  };

  const goals = [
    {
      title: "Loss",
      value: 63,
      icon: DirectionsRunIcon,
      color: "#3F51B5",
    },
    {
      title: "Gain",
      value: 15,
      icon: AccessibilityNewIcon,
      color: "#E53935",
    },
    {
      title: "Maintaining",
      value: 23,
      icon: AccessibilityIcon,
      color: "#FB8C00",
    },
  ];

  return (
    <Card {...props}>
      <CardHeader title="Classification by Goal" data-testid="goal_type" />
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 300,
            position: "relative",
          }}
        >
          <Doughnut data={data} options={options} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pt: 2,
          }}
        >
          {goals.map(({ color, icon: Icon, title, value }) => (
            <Box
              key={title}
              sx={{
                p: 1,
                textAlign: "center",
              }}
            >
              <Icon color="action" />
              <Typography color="textPrimary" variant="body1">
                {title}
              </Typography>
              <Typography style={{ color }} variant="h4">
                {value}%
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
}
