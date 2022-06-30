import React from "react";

export default function Card({ id, name, age, image }) {
  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{age} years</p>
      </div>
    </article>
  );
}
