import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state.data);
  }, []);
  return (
    <div className="flex py-20">
      <div className="basis-1/2 flex justify-end pr-5">
        <img src={state.data.img} alt="character" className="w-1/2 rounded-2xl" />
      </div>
      <div className="basis-1/4 flex gap-6 flex-col justify-start pl-5">
        <div>
          <span className="text-lg text-gray-500">Name: </span>
          {' '}
          <span className="text-xl">{state.data.name}</span>
        </div>
        <div>
          <span className="text-lg text-gray-500">Birthday: </span>
          {' '}
          <span className="text-xl">{state.data.birthday}</span>
        </div>
        <div>
          <span className="text-lg text-gray-500">Nickname: </span>
          {' '}
          <span className="text-xl">{state.data.nickname}</span>
        </div>
        <div>
          <span className="text-lg text-gray-500">Status: </span>
          {' '}
          <span className="text-xl">{state.data.status}</span>
        </div>
        <div>
          <span className="text-lg text-gray-500">Portrayed: </span>
          {' '}
          <span className="text-xl">{state.data.portrayed}</span>
        </div>
        <div>
          <span className="text-lg text-gray-500">Occupation: </span>
          {' '}
          <span className="text-xl">{state.data.occupation.join(', ')}</span>
        </div>
        <div>
          <span className="text-lg text-gray-500">Appearance: </span>
          {' '}
          <span className="text-xl">{state.data.appearance.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

export default Details;

/*
 appearance: (5) [1, 2, 3, 4, 5]
 better_call_saul_appearance: []
 birthday: "09-07-1958"
 category: "Breaking Bad"
 char_id: 1
 img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg"
 name: "Walter White"
 nickname: "Heisenberg"
 occupation: (2) ['High School Chemistry Teacher', 'Meth King Pin']
 portrayed: "Bryan Cranston"
 status: "Presumed dead"
 */
