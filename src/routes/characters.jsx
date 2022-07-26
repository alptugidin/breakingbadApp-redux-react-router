import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '@/redux/characterSlice';
import Card from '@/components/Card';

let offset = 0;
const page = 0;

function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters.items);
  const error = useSelector((state) => state.characters.error);
  const [counter, setCounter] = useState(0);

  const moreButton = async () => {
    if (offset <= 80) {
      await dispatch(getCharacters({ offset }));
      offset += 20;
      setCounter(counter + 1);
    }
  };

  useEffect(() => {
    dispatch(getCharacters({ offset }));
  }, []);

  useEffect(() => {
    if (counter === 4) {
      document.querySelector('#more-button').classList.add('opacity-50');
      document.querySelector('#more-button').classList.add('pointer-events-none');
    }
  }, [counter]);

  return (
    <div className="flex flex-wrap justify-center gap-10 py-20">
      {characters.map((character, i) => (
        <Card key={`key${i}`} name={character.name} url={character.img} data={character} />
      ))}
      <div className="w-full flex justify-center pt-10">
        <button
          id="more-button"
          type="button"
          onClick={moreButton}
          className="py-1 px-6 rounded-full bg-gray-800 text-white transition-all hover:bg-gray-700 text-lg"
        >
          More
        </button>
      </div>
    </div>
  );
}

export default Characters;
