import React from "react";

// CONSTRUCT THE WEAPONS MODULE
const WeaponItem = (props) => {
  const { titleWeapon, descWeapon, altWeapon, imgWeapon, upgrade, weaponStrength } = props.dataWeapon;
  const { handleClick } = props;
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center"><h3>{titleWeapon}</h3></h3>
      </div>
      <div className="panel-body text-center">
        <p>{descWeapon}</p>
        <img
          alt={altWeapon}
          src={imgWeapon}
          width="100%"
          onClick={() => handleClick(upgrade)}
        />
        <p>ATTACK STRENGTH: {weaponStrength}</p>
        <p>UGRADE COST: {upgrade}</p>

      </div>
    </div>
  );
};

export default WeaponItem;
