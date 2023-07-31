import { Box } from "@mui/material";
import { node } from "prop-types";
import React from "react";
import { useTheme } from "../../provider/ThemeProvider";

export default function Main({ children }) {
  const { isDark } = useTheme();
  return (
    <>
      <>
        <Box
          sx={{
            minHeight: "87vh",
            backgroundColor: isDark ? "#333333" : " #e3f2fd",
          }}
        >
          {children}
        </Box>
      </>
    </>
  );
}
Main.propsType = {
  children: node,
};
