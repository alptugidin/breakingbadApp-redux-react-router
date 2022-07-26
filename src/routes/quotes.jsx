import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getQuotes } from '@/redux/quoteSlice';

function Quotes() {
  const quotes = useSelector((state) => state.quotes.items);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuotes());
  }, []);
  return (
    <div className="container mx-auto py-20">
      {
        quotes.map((quote) => (
          <div key={quote.quote_id} className="py-3">
            <span className="text-xl font-semibold text-gray-800">
              {'\x22'}
              {quote.quote}
              {'\x22'}
              {' '}
            </span>
            <span className="italic text-xl text-gray-900">
              -
              {quote.author}
            </span>
            <br />
          </div>
        ))
      }
    </div>
  );
}

export default Quotes;
