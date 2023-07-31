import React from "react";
import MuiMenu from "@mui/material/Menu";
import { useUser } from "../../../../users/providers/UserProvider";
import useUsers from "../../../../users/hooks/useUsers";
import { Box, MenuItem } from "@mui/material";
import MenuLinks from "../../../../routers/components/MenuLinks";
import ROUTES from "../../../../routers/routeModel";

const Menu = ({ isOpen, anchorEl, onClose }) => {
  const { user } = useUser();
  const { handleLogout } = useUsers();

  const onLogout = () => {
    handleLogout();
    onClose();
  };

  return (
    <MuiMenu
      open={isOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Box>
        <MenuLinks
          text="about"
          navigateTo={ROUTES.ABOUT}
          onClick={onClose}
          styles={{ display: { xs: "none", md: "none" } }}
        />
        {!user && (
          <>
            <MenuLinks
              text="login"
              navigateTo={ROUTES.LOGIN}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />

            <MenuLinks
              text="singup"
              navigateTo={ROUTES.SIGNUP}
              onClick={onClose}
              styles={{ display: { xs: "block", md: "none" } }}
            />
          </>
        )}

        {user && (
          <>
            <MenuItem onClick={onLogout}>Logout</MenuItem>
          </>
        )}
      </Box>
    </MuiMenu>
  );
};
export default Menu;
