import React from "react";
import CardMedia from "@mui/material/CardMedia";
import imgType from "../../models/imgType";

export default function CardHeader({ image }) {
  return (
    <>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        image={image.url}
        alt="top image"
      />
    </>
  );
}

CardHeader.propTypes = {
  image: imgType,
};
