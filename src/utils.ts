import { Quote } from "./components";

export const getRandomQuote = (quotes: Quote[]) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};
