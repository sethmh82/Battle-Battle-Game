// Include React
import React from "react";
// We can use a functional component since this component doesnt REALLY have to keep
// track of or modify any of it's own state
// All of the props passed through are automatically on the props argument
const FoodItem = (props) => {
  // since props is a relatively nested object, we can optionally destructure it
  // to make accessing it's data a little easier
  const { title, description, alt, img, food } = props.data;
  const { handleClick } = props;
  // The "return" of a functional component is what ACTUALLY gets rendered
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <h3 className="panel-title text-center">{title}</h3>
      </div>
      <div className="panel-body text-center">
        <h3>{description}</h3>
        {
          /* Since we want to pass our handleClick function an argument of food,
          and onClick needs to be given a callback function, we can put our
          handleClick(food) inside of an arrow function (which is a callback)  */
        }
        <img
          alt={alt}
          src={img}
          width="100%"
          onClick={() => handleClick(food)}
        />
      </div>
    </div>
  );
};

export default FoodItem;
