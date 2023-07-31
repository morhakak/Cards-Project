import { Box } from "@mui/material";
import React from "react";
import NavItem from "../../../../routers/components/NavItem";
import ROUTES from "../../../../routers/routeModel";

export default function Notlogged() {
  return (
    <Box>
      <NavItem to={ROUTES.LOGIN} label="Login" sx={{ color: "white" }} />
      <NavItem to={ROUTES.SIGNUP} label="Sign up" sx={{ color: "white" }} />
    </Box>
  );
}
