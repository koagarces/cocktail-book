import React from "react";
import { NavLink, Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Got Cocktail?</h1>
      <div>
        <Link>Search by name</Link>
        <Link>Search by Ingredient</Link>
      </div>
    </div>
  );
};

export default HomePage;
