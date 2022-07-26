import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Card({ url, name, data }) {
  const [imgLoad, setImgLoad] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/details', { state: { data } });
  };
  return (
    <>
      <div className={`w-[240px] h-[320px] rounded-2xl animate-pulse bg-gray-300 ${imgLoad ? 'hidden' : ''}`} />
      {/* <Link to="/details" state={{ data }}> */}
      <button
        type="button"
        onClick={handleClick}
        className={`card rounded-2xl relative overflow-hidden cursor-pointer ${imgLoad ? '' : 'hidden'}`}
      >
        <img onLoad={() => setImgLoad(true)} src={url} alt="character" className="card-image object-fill w-60 h-80 rounded-2xl transition-transform" />
        <div className="absolute bottom-0 left-0 w-full rounded-b-2xl bg-gray-800 h-[48px] bg-opacity-80">
          <p className="text-yellow-300 font-semibold text-center leading-[48px]">{name}</p>
        </div>
      </button>
      {/* </Link> */}
    </>
  );
}

export default Card;
