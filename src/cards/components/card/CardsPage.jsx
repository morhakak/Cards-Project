import { Container } from "@mui/system";
import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import useCards from "../../hooks/useCards";
import CardsFeedback from "../CardsFeedback";
import { useSearchParams } from "react-router-dom";
import { useTheme } from "@emotion/react";
export default function CardsPage() {
  const { handleGetCards, handleDeleteCard, handleLikeCard, value, cards } =
    useCards();
  const { error, isLoading, filteredCards } = value;
  useSearchParams();
  useEffect(() => {
    handleGetCards();
  }, []);

  const handleDelet = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };
  const handleLike = async (id) => {
    await handleLikeCard(id);
  };
  return (
    <div>
      <Container>
        <PageHeader
          title="cards"
          subtitle="On this page you can find all bussines cards from all caregories"
        />
        <CardsFeedback
          cards={filteredCards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelet}
          handleLike={handleLike}
        />
      </Container>
    </div>
  );
}
