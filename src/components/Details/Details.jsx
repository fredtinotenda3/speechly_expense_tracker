import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@material-ui/core";
import useStyles from "./styles";
import useTransactions from "../../useTransactions";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// Register components
ChartJS.register(ArcElement, Tooltip, Legend);

const Details = ({ title, subheader }) => {
  const classes = useStyles();
  const { total, chartData } = useTransactions(title);

  return (
    <Card className={title === "Income" ? classes.income : classes.expense}>
      <CardHeader title={title} subheader={subheader} />
      <CardContent>
        <Typography variant="h5">{total}</Typography>
        <Doughnut data={chartData} />
      </CardContent>
    </Card>
  );
};

export default Details;
