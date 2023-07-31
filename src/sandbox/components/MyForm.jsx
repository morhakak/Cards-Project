import { Button, TextField } from "@mui/material";
import React from "react";
import useText from "../hooks/useText";

export default function MyForm() {
  const { text, updateText, resetText, cancelText, submitText } = useText("");
  return (
    <>
      <TextField
        id="filled-basic"
        label="Filled"
        variant="filled"
        onChange={updateText}
        value={text}
      />
      <br />
      <br />
      <br />
      <br />

      <Button variant="contained" type="reset" onClick={resetText}>
        Reset
      </Button>

      <Button variant="contained" onClick={cancelText}>
        Cancel
      </Button>

      <Button variant="contained" onClick={submitText}>
        Submit
      </Button>
    </>
  );
}
