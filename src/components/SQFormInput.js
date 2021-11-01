import { TextField } from "@mui/material";
import React from "react";

function SQFormInput({ name }) {
  return <TextField id={name} label={name} name={name} variant="outlined" />;
}

export default SQFormInput;
