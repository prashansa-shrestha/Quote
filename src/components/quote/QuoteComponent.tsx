import "./QuoteComponent.css";

export type Quote = {
  quote: string;
  author: string;
};

export const QuoteComponent = ({ quote, author }: Quote) => {
  return (
    <div className="quote-container">
      <div className="quote-content">
        <p className="quote-text">"{quote}"</p>
        <p className="quote-author">- {author}</p>
      </div>
    </div>
  );
};
