import { Button } from "@mui/material";
import React, { memo } from "react";

export default memo(function MyButton({ label, func }) {
  return (
    <>
      <Button variant="contained" onClick={func}>
        {label.data}
      </Button>
    </>
  );
});
