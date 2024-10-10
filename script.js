import React, { useEffect, useState } from 'react';
import '.App.css';

const App = () = {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () = {
    const response = await fetch('httpsapi.quotable.iorandom');
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() = {
    fetchQuote();
  }, []);

  const tweetQuote = () = {
    const tweetUrl = `httpstwitter.comintenttweettext=${quote} - ${author}`;
    window.open(tweetUrl, '_blank');
  };

  return (
    div id=quote-box className=quote-box
      p id=text{quote}p
      p id=author{author}p
      button id=new-quote onClick={fetchQuote}New Quotebutton
      a
        id=tweet-quote
        href=#
        onClick={tweetQuote}
        target=_blank
        rel=noopener noreferrer
      
        Tweet this quote
      a
    div
  );
};

export default App;
