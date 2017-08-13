import React from "react";

// CONSTRUCT THE HERO CHARACTERS MODULE
const HeroChar = (props) => {
  const { title, description, alt, img, strength } = props.dataHero;
  const { handleClick } = props;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center">{title}</h3>
      </div>
      <div className="panel-body text-center">
        <h3>{description}</h3>
       
        <img
          alt={alt}
          src={img}
          width="100%"
          onClick={() => handleClick(strength)}
        />
      </div>
    </div>
  );
};

export default HeroChar;
