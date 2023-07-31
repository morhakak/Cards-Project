import { Box } from "@mui/system";
import React from "react";
import NavItem from "../../../../routers/components/NavItem";
import ROUTES from "../../../../routers/routeModel";
import LogoIcon from "../../LogoIcon";
import TextLogo from "../../TextLogo";
import { useUser } from "../../../../users/providers/UserProvider";

export default function LeftNavigation() {
  const { user } = useUser();

  return (
    <>
      <Box>
        <LogoIcon />
        <Box
          sx={{
            display: {
              xs: "none",
              md: "inline-flex",
              alignItems: "center",
              marginTop: "15px",
            },
          }}
        >
          <TextLogo />
          <NavItem to={ROUTES.CARDS} label="Cards" sx={{ color: "white" }} />
          <NavItem to={ROUTES.ABOUT} label="About" sx={{ color: "white" }} />
          {user && (
            <NavItem
              to={ROUTES.FAV_CARDS}
              label="Favorite cards"
              sx={{ color: "white" }}
            />
          )}
          {user?.isBusiness && (
            <NavItem
              to={ROUTES.MY_CARDS}
              label="My cards"
              sx={{ color: "white" }}
            />
          )}
          {user?.isAdmin && (
            <NavItem
              to={ROUTES.SANDBOX}
              label="Sandbox"
              sx={{ color: "white" }}
            />
          )}
        </Box>
      </Box>
    </>
  );
}
