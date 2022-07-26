import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const activeStyle = {
    textDecoration: 'underline',
    textDecorationColor: 'white',
  };
  return (
    <div className="w-96 mx-auto flex">
      <div className="basis-1/2 cursor-pointer h-12 rounded-bl-xl bg-gray-800 transition-all hover:bg-gray-700">
        <NavLink style={(state) => (state.isActive ? activeStyle : undefined)} to="/">
          <p className="text-white text-center text-xl font-semibold leading-[3rem]">
            Characters
          </p>
        </NavLink>
      </div>
      <div className="basis-1/2 cursor-pointer h-12 rounded-br-xl bg-gray-800 transition-all0 hover:bg-gray-700">
        <NavLink style={(state) => (state.isActive ? activeStyle : undefined)} to="/quotes">
          <p className="text-white text-center text-xl font-semibold leading-[3rem]">
            Quotes
          </p>
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
