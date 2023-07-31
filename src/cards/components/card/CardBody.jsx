import React from "react";
import { CardHeader, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import addressType from "../../models/addressType";
import { number, string } from "prop-types";

export default function CardBody({
  title,
  subtitle,
  phone,
  address,
  bizNumber,
}) {
  return (
    <>
      <CardHeader title={title} subheader={subtitle} />
      <Divider variant="middle" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Phone:</strong> {phone}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Address:</strong> {address.street} {address.houseNumber}{" "}
          {address.city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Card number:</strong> {bizNumber}
        </Typography>
      </CardContent>
    </>
  );
}
CardBody.porpTypes = {
  address: addressType.isRequired,
  title: string,
  subtitle: string,
  phone: string.isRequired,
  bizNumber: number,
};
