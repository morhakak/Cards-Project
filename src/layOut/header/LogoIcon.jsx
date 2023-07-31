import { Avatar, IconButton } from "@mui/material";
import React from "react";
import NavBarLink from "../../routers/components/NavBarLink";
import ROUTES from "../../routers/routeModel";

export default function LogoIcon() {
  return (
    <>
      <NavBarLink to={ROUTES.ROOT}>
        <IconButton sx={{ marginBottom: "15px" }}>
          <Avatar alt="logo" src="/assets/images/cardlogo.png" />
        </IconButton>
      </NavBarLink>
    </>
  );
}
