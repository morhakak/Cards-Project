import { MenuItem } from "@mui/material";
import React from "react";
import NavBarLink from "./NavBarLink";
import { makeFirstLetterCapital } from "../../forms/utils/algoMethods";
import { func, string } from "prop-types";
import { useTheme } from "../../provider/ThemeProvider";

export default function MenuLinks({ text, navigateTo, onClick, styles }) {
  const { isDark } = useTheme();
  return (
    <NavBarLink to={navigateTo}>
      <MenuItem
        sx={{ ...styles, color: isDark ? "#e3f2fd" : "#333333" }}
        onClick={onClick}
      >
        {makeFirstLetterCapital(text)}
      </MenuItem>
    </NavBarLink>
  );
}

MenuLinks.prpTypes = {
  navigateTo: string.isRequired,
  onClick: func.isRequired,
  text: string.isRequired,
};

MenuLinks.defaultProps = {
  styles: {},
};
