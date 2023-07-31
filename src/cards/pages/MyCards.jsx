import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import { Container, IconButton } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../users/providers/UserProvider";
import ROUTES from "../../routers/routeModel";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useTheme } from "../../provider/ThemeProvider";

export default function MyCards() {
  const { cards, isLoading, error, handleGetMyCard, handleDeleteCard } =
    useCards();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const { user } = useUser();
  useEffect(() => {
    handleGetMyCard();
  }, []);
  const handleDelete = async (id) => {
    await handleDeleteCard(id);
    handleGetMyCard();
  };
  return (
    <div>
      <Container sx={isDark ? { color: "#e3f2fd" } : { color: "#333333" }}>
        <PageHeader
          title="cards"
          subtitle="On this page you can find your bussines cards from all caregories"
        />
        <CardsFeedback
          cards={cards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelete}
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
    </div>
  );
}
