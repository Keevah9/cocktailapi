import React from "react";
import { Link } from "react-router-dom";
export default function Cocktail({item:{ image, name, id, info, glass} }) {
  return (
    <article className="cocktail">
      <Link to={`/cocktail/${id}`}>
        <div className="img-container">
          <img src={image} alt={name} />
        </div>
        <div className="cocktail-footer">
          <h3>{name}</h3>
          <h4>{glass}</h4>
          <p>{info}</p>
        </div>
      </Link>
    </article>
  );
}
