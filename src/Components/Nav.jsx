import React from 'react';
import { Link } from 'react-router-dom'; // Use Link from React Router for navigation

export default function Nav(props) {
  return (
    <Link to={props.linka} className="navlink">
      <img src={props.src} alt={props.title} className="navimage" />
    </Link>
  );
}
