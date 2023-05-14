import { useMemo } from "react";

export const useSortedCards = (cards, sort) => {
  const sortedCards = useMemo(() => {
    if (sort) {
      if (sort !== "body") {
        return [...cards].sort((a, b) => a[sort].localeCompare(b[sort]));
      } else {
        return [...cards].sort((a, b) => a[sort].length - b[sort].length);
      }
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
