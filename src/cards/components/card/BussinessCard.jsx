import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "../card/CardHeader";
import CardBody from "../card/CardBody";
import CardActionBar from "../card/CardActionBar";
import cardType from "../../models/cardType";
import { func } from "prop-types";

export default function BussinessCard({
  card,
  handleDelete,
  handleLike,
  changeLikeStatus,
}) {
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardHeader image={card.image} />
      <CardBody
        title={card.title}
        subtitle={card.subtitle}
        address={card.address}
        phone={card.phone}
        bizNumber={card.bizNumber}
      />
      <CardActionBar
        id={card._id}
        user_id={card.user_id}
        handleDelete={handleDelete}
        cardLikes={card.likes}
        handleLike={handleLike}
        onLike={changeLikeStatus}
      />
    </Card>
  );
}

BussinessCard.propTypes = {
  card: cardType.isRequired,
  handleDelete: func,
  handleEdit: func,
  handleLike: func,
};
