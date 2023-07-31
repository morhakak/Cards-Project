import { Avatar, IconButton, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useMenu } from "../menu/provider/MenuProvider";
import { shape, string } from "prop-types";

export default function Logged({ handleClick, title }) {
  const setOpen = useMenu();
  return (
    <>
      <Typography
        variant="body1"
        sx={{ marginRight: 2, m: 2, fontFamily: "serif", fontSize: "medium" }}
      >
        {title}
      </Typography>
      <Tooltip title="Open settings">
        <IconButton
          sx={{ xs: "none", p: 0, display: "inline-flex", marginLeft: 2 }}
          onClick={() => setOpen(true)}
        >
          <Avatar alt="Bird" src="/assets/images/loginAvatr.jpeg" />
        </IconButton>
      </Tooltip>
    </>
  );
}
Logged.propTypes = {
  user: shape({
    title: string.isRequired,
  }),
};
