import React, { useEffect } from "react";
import CardForm from "../components/card/CardForm";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import { useParams } from "react-router-dom";
import normalizeUser from "../../users/helpers/normalization/normalizeUser";
import mapCardToModel from "../helpers/normalization/mapToModel";
import { Container } from "@mui/material";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routers/routeModel";
import { useTheme } from "../../provider/ThemeProvider";

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, handleGetCard, value } = useCards();
  const { user } = useUser();
  const { isDark } = useTheme();
  const { data, errors, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(value.card._id, {
      ...normalizeUser({ ...data }),
      bizNumber: value.card.bizNumber,
      user_id: value.card.user_id,
    });
  });

  useEffect(() => {
    if (user) {
      const getCard = async () => {
        const cardData = await handleGetCard(id);
        const modeledCard = mapCardToModel(cardData);
        rest.setData(modeledCard);
      };

      getCard();
    }
  }, [handleGetCard, user]);

  // if (!user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: isDark ? "#e3f2fd" : "#333333",
      }}
    >
      {value.card ? (
        <CardForm
          title="edit card"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={data}
          to={ROUTES.CARDS}
        />
      ) : (
        "...loading"
      )}
    </Container>
  );
}
