import { MenuItem, Select } from "@mui/material";
import React from "react";

function SQFormSelect({ name, selections }) {
  const [value, setValue] = React.useState("");
  return (
    <Select
      labelId={name}
      id={name}
      value={value}
      label={name}
      onChange={setValue}
      name={name}
    >
      {selections.map((selection) => (
        <MenuItem value={selection}>{selection}</MenuItem>
      ))}
    </Select>
  );
}

export default SQFormSelect;
