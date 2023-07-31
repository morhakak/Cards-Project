import { Grid, IconButton } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/cardType";
import BussinessCard from "../components/card/BussinessCard";
import { Navigate, useNavigate } from "react-router-dom";
import useCards from "../hooks/useCards";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routers/routeModel";

export default function Cards({
  cards,
  handleDelete,
  handleLike,
  changeLikeStatus,
  user_id,
}) {
  const { user } = useUser();
  const navigate = useNavigate();
  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BussinessCard
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLike}
              onLike={changeLikeStatus}
            />
          </Grid>
        ))}
      </Grid>

      {(user?.isAdmin || user?.user_id) && (
        <IconButton
          sx={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            display: "none",
            "@media (min-width: 900px)": {
              display: "block",
            },
          }}
          onClick={() => navigate(`${ROUTES.CREATE_CARD}`)}
        >
          <AddCircleIcon sx={{ fontSize: 50 }} color="primary" />
        </IconButton>
      )}
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
