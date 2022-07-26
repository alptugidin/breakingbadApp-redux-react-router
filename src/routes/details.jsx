import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Details() {
  const { state } = useLocation();

  useEffect(() => {
    console.log(state);
  }, []);
  return (
    <div className="flex">
      <div className="basis-1/2">
        {/* <img src={state.img} alt="" /> */}
      </div>
      <div className="basis-1/2">
        <p>ss</p>
      </div>
    </div>
  );
}

export default Details;
