import { useMemo } from "react";

export const useSortedCards = (cards, sort) => {
  const sortedCards = useMemo(() => {
    if (sort) {
      return [...cards].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return cards;
  }, [sort, cards]);
  return sortedCards;
};

export const useCards = (cards, sort, query) => {
  const sortedCards = useSortedCards(cards, sort);

  const sortedAndSerchedCards = useMemo(() => {
    return sortedCards.filter((card) =>
      card.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, sortedCards]);
  return sortedAndSerchedCards;
};
