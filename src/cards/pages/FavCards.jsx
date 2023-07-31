import React, { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import { Container, IconButton } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routers/routeModel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "../../provider/ThemeProvider";

export default function FavCards({ id, cardId }) {
  const { value, ...rest } = useCards();
  const { handleDeleteCard, handleGetFavCards, handleLikeCard } = rest;
  const { isLoading, error, cards } = value;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const { isDark } = useTheme();
  const { user } = useUser();
  const navigate = useNavigate();

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const handleLikeCardFav = useCallback(async () => {
    await handleLikeCard(id);
  }, [handleLikeCard]);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
    handleLikeCardFav(id);
  }, []);

  return (
    <Container sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
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
    </Container>
  );
}
