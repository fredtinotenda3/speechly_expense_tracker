import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@mui/lab/Alert";

import makeStyles from "./styles";

const CustomizedSnackbar = ({ open, setOpen }) => {
  const classes = makeStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          severity="success"
          elevation={6}
          variant="filled"
        >
          Transaction successfully created.
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default CustomizedSnackbar;
