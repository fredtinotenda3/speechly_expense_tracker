import React from "react";
import {
  List as MUIList,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Slide,
} from "@material-ui/core";
import { Delete, MoneyOff } from "@mui/icons-material";
import makeStyles from "./styles";

const List = () => {
  const classes = makeStyles();
  const transactions = [
    {
      id: 1,
      type: "Income",
      category: "Salary",
      amount: 1000,
      date: "2022-01-01",
    },
    {
      id: 2,
      type: "Expense",
      category: "Pets",
      amount: 1000,
      date: "2022-01-01",
    },
    {
      id: 3,
      type: "Income",
      category: "Salary",
      amount: 50,
      date: "2022-01-01",
    },
    {
      id: 4,
      type: "Income",
      category: "Business",
      amount: 1000,
      date: "2022-01-01",
    },
  ];
  return (
    <MUIList dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide
          direction="down"
          in
          mountOnEnter
          unmountOnExit
          key={transaction.id}
        >
          <ListItem>
            <ListItemAvatar>
              <Avatar
                className={
                  transaction.type === "Income"
                    ? classes.avatarIncome
                    : classes.avatarExpense
                }
              >
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={transaction.category}
              secondary={`$${transaction.amount} - ${transaction.date}`}
            />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                // onClick={() => deleteTransaction(transaction.id)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
