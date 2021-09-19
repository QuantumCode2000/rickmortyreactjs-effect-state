import React from "react";

const CardCharacter = ({ img, name }) => {
  return (
    <React.Fragment>
      <div>
        <figure>
          <img src={img} alt={name} />
        </figure>
        <h1>{name}</h1>
      </div>
    </React.Fragment>
  );
};

export default CardCharacter;
