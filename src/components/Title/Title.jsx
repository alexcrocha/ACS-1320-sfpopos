/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink } from 'react-router-dom';
import RandomSpace from '../RandomSpace/RandomSpace';
import './Title.css';

function Title() {
  return (
    <div className="Title">
      <h1>SFPOPOS</h1>
      <small className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</small>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/"
        >
          List
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? 'nav-link-active' : 'nav-link')}
          to="/about"
        >
          About
        </NavLink>
        <RandomSpace />
      </div>
    </div>
  );
}

export default Title;
