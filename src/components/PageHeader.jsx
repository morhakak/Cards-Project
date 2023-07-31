import { Box, Divider, Typography } from "@mui/material";
import { string } from "prop-types";
import React from "react";
import { useTheme } from "../provider/ThemeProvider";

export default function PageHeader({ title, subtitle }) {
  const { isDark } = useTheme();

  return (
    <Box sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}>
      <Typography variant="h2" component="h1">
        {title}
      </Typography>
      <Typography variant="h5" component="h2">
        {subtitle}
      </Typography>
      <Divider sx={{ my: 2 }} />
    </Box>
  );
}
PageHeader.propTypes = {
  title: string.isRequired,
  subtitle: string.isRequired,
};
