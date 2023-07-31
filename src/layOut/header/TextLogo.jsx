import { Typography } from "@mui/material";
import React from "react";

export default function TextLogo() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          display: { xs: "none", md: "inline-flex" },
          marginRight: 2,
          fontFamily: "Georgia, serif",
        }}
      >
        BCards
      </Typography>
    </>
  );
}
