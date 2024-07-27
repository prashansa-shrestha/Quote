import { QuoteComponent, quotes } from "./components";
import { getRandomQuote } from "./utils";

const App = () => {
  const randomQuote = getRandomQuote(quotes);

  return (
    <QuoteComponent quote={randomQuote.quote} author={randomQuote.author} />
  );
};

export default App;
