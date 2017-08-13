// Include React
import React, { Component } from "react";

// Here we include the FoodItem sub-component
import FoodItem from "./children/FoodItem";

// Defining our food item data here
// We set the data value inside the component equal to this inside the constructor method
const data = [
  {
    id: 0,
    title: "Mmm Mmm Good!",
    description: "Human Flesh",
    alt: "Scared Girls",
    img: "http://www.toxel.com/wp-content/uploads/2011/10/fear08.jpg",
    food: 25
  },
  {
    id: 1,
    title: "Tasty Treats",
    description: "Frog Livers",
    alt: "Frog",
    img: "http://www.cellphonetaskforce.org/wp-content/uploads/2012/01/frog-left.jpg",
    food: 12
  },
  {
    id: 2,
    title: "Nom Noms",
    description: "Organic Tofu",
    alt: "Tofu",
    img: "http://afcsoyfoods.com/media/2014/02/afc-organic-tofu-firm-14oz.png",
    food: 12
  }
];
// This is the main component, Seymour
class Seymour extends Component {
  constructor() {
    super();
    // If we are assigning an object property to an existing variable with the same name,
    // we can use this shorthand assignment syntax
    // Notice the data property here and the data const defined above the component
    this.state = {
      consumed: 0,
      data
    };
    // We need to bind our feedSeymour method to our component with this syntax in the constructor since we'll be passing it to child components
    this.feedSeymour = this.feedSeymour.bind(this);
  }
  // Notice the shorthand method syntax. Otherwise lifecycle methods are exactly the same
  componentDidUpdate(prevProps, prevState) {
    if (this.state.consumed !== 0) {
      console.log("Updated");
      console.log("Previous state:", prevState);
      console.log("Current state:", this.state);
    }
    else {
      alert("You have done well. Seymour is very full!");
    }
  }
  feedSeymour(food) {
    // We'll use const instead of let, because this value is never reassigned in this method
    const newConsumed = this.state.consumed + food;
    // If Seymour's new consumed state is more than 500, we'll alert the user and
    // reset this.state.consumed to 0
    if (newConsumed > 500) {
      // Otherwise update this.state.consumed with the new value
      this.setState({ consumed: 0 });
    }
    else {
      this.setState({ consumed: newConsumed });
    }
  }
  // This helper method will return an array of JSX containing a bootstrap column and
  // our food data on this.state.data
  renderFood() {
    return this.state.data.map(
      data => // We use each data object's id as a unique key
      // We pass each foodItem component the feedSeymour method, and it's own data object
      (
        <div key={data.id} className="col-md-4">
          <FoodItem data={data} handleClick={this.feedSeymour} />
        </div>
      )
    );
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2>Feed Me Seymour!</h2>
            <p>
              <em>Click on Seymour's Children to Feed Him</em>
            </p>
          </div>
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Seymour</h3>
              </div>
              <div className="panel-body text-center">
                <h1>
                  Food Consumed: {this.state.consumed}
                </h1>
                <img
                  alt="Seymour"
                  src="https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif"
                />
              </div>
            </div>
          </div>
          {/* Here we call our renderFood() method which will return an array
            containing each FoodItem component with it's data passed through */}
          {this.renderFood()}
        </div>
      </div>
    );
  }
}

export default Seymour;
