import { useCallback, useEffect, useMemo, useState } from "react";
import {
  changeLikeStatus,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
  createCard,
} from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../provider/SnackbarProvider";
import { useUser } from "../../users/providers/UserProvider";
import { Navigate, useSearchParams } from "react-router-dom";
import ROUTES from "../../routers/routeModel";

export default function useCards() {
  const [query, setQuery] = useState("");
  const [filteredCards, setFilter] = useState(null);
  const [searchParams] = useSearchParams();
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();
  const { user } = useUser();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);

  useEffect(() => {
    if (cards) {
      const queryLower = query.toLowerCase();
      setFilter(
        cards.filter(
          (card) =>
            card.title.toLowerCase().includes(queryLower) ||
            String(card.bizNumber).toLowerCase().includes(queryLower)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCard = useCallback(async (id) => {
    try {
      const card = await getCard(id);
      setLoading(false);
      setCard(card);
      return card;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, []);

  const handleGetCards = useCallback(async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All the cards are here!");
      return cards;
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, []);
  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  const handleGetMyCard = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards, null);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = useCallback(
    async (cardId) => {
      try {
        const card = await changeLikeStatus(cardId);
        snack("success", "The business card has been Liked");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await handleGetCards();
      const favCards = cards.filter(
        (card) => !!card.likes.find((id) => id === user.id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user]);

  const handleUpdateCard = useCallback(
    async (cardId, normalaizedCard) => {
      try {
        setLoading(true);
        const card = await editCard(cardId, normalaizedCard);
        requestStatus(false, null, null, card);
        snack("success", "The business card has been successfully updated");
        Navigate(ROUTES.MY_CARDS);
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [snack]
  );

  const handleCreateCard = useCallback(async (card) => {
    try {
      setLoading(true);
      const cardData = await createCard(card);
      setLoading(false);
      setCard(cardData);
      snack("success", "A new business card has been created");
    } catch (err) {
      setLoading(false);
      setError(err.message);
      snack("error", "has a problem to created a new card");
    }
  }, []);
  const value = useMemo(() => {
    return { cards, card, isLoading, error, filteredCards };
  }, [cards, card, isLoading, error, filteredCards]);

  return {
    cards,
    value,
    handleGetCards,
    handleDeleteCard,
    handleGetMyCard,
    handleLikeCard,
    handleGetCard,
    setCards,
    handleGetFavCards,
    handleUpdateCard,
    handleCreateCard,
  };
}
