import { Box, IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../provider/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logged from "./Logged";
import { useUser } from "../../../../users/providers/UserProvider";
import Notlogged from "./Notlogged";
import MoreButton from "./MoreButton";
import Search from "./search/Search";
import { makeFirstLetterCapital } from "../../../../forms/utils/algoMethods";
export default function RightNavigation({ user_id }) {
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <Search />
        <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user ? (
          <Logged
            title={`Welcome\n${makeFirstLetterCapital(user.firstName)}`}
          />
        ) : (
          <Notlogged />
        )}
      </Box>

      <MoreButton />
    </>
  );
}
