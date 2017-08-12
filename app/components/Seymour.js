// Include React
import React, { Component } from "react";

// Here we include the FoodItem sub-component
import FoodItem from "./children/FoodItem";

// Defining our food item data here
// We set the data value inside the component equal to this inside the constructor method
const data = [
  {
    id: 0,
    title: "Fighter Bob",
    description: "Ranged Weapon",
    alt: "Fighter Bob",
    img: "http://www.sethcodes.com/wp-content/uploads/2017/08/hero4.png",
    food: 7
  },
  {
    id: 1,
    title: "Samurai Rick",
    description: "Brute Force",
    alt: "Samurai",
    img: "http://www.sethcodes.com/wp-content/uploads/2017/08/hero3.png",
    food: 11
  },
  {
    id: 2,
    title: "Wizard Mike",
    description: "Magic Casting",
    alt: "Wizard",
    img: "http://www.sethcodes.com/wp-content/uploads/2017/08/hero2.png",
    food: 16
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
      level: 1,
      img: "https://media.giphy.com/media/pBj0EoGSYjGms/giphy.gif",
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
      alert("You have defeated the boss!");
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
    if (newConsumed > 100) {
      // Otherwise update this.state.consumed with the new value
      this.setState({ level: 2 });
    }
    if (newConsumed > 200) {
      // Otherwise update this.state.consumed with the new value
      this.setState({ level: 3 });
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
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title text-center">Boss</h3>
              </div>
              <div className="panel-body text-center">
                <h1>
                  <p>
                  Hit Points: {this.state.consumed}
                  </p>
                  Player Level: {this.state.level}

              
                </h1>
                <img
                  alt="Boss 1"
                  src="http://www.sethcodes.com/wp-content/uploads/2017/08/boss3.jpg"
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


///////
var SampleApp = React.createClass({
  render: function() {
    var vSource = {uri: 'http://cdn.arstechnica.net/wp-content/uploads/2016/02/5718897981_10faa45ac3_b-640x624.jpg'};
    return (
      <View style={styles.container}>
        <Text>CustomImage Example</Text>
        <CustomImage source={vSource} />
      </View>
    );
  }
});

var CustomImage = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Image source={this.props.source} style={{width: 60,height: 60,}}/>
      </View>
    );
  }
});

