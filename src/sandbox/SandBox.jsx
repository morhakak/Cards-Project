import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routers/components/NavItem";
import { useTheme } from "../provider/ThemeProvider";

export default function SandBox() {
  const { isDark } = useTheme();
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            to="first"
            label="firstcomp"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="second"
            label="secondcomp"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="life-cycle"
            label="LifeCycle"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="country"
            label="Country"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="memo"
            label="Memoization"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="counter"
            label="My counter"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="myform"
            label="My form"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="country"
            label="country"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="grand"
            label="Context"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
          <NavItem
            to="form"
            label="Form"
            sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}
          />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
