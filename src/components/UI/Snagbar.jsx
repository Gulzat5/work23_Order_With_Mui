import { Alert, Snackbar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export const Snagbar = ({ close }) => {
  const { open, message, severity } = useSelector((state) => state.snackbar);
  return (
    <div>
      <Snackbar open={open} autoHideDuration={3000} onClose={close}>
        <Alert onClose={close} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
};
