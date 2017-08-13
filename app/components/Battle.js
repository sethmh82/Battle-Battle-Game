import React, { Component } from "react";

import HeroChar from "./children/heroes";
import WeaponItem from "./children/weapons";

// HEROES
const dataHero = [
  {
    id: 0,
    title: "Ranged Weapon",
    description: "Sniper Bob",
    alt: "Fighter Bob",
    img: "http://www.sethcodes.com/wp-content/uploads/2017/08/hero4.png",
    strength: 7
  },
  {
    id: 1,
    title: "Brute Foce",
    description: "Samurai Rick",
    alt: "Samurai",
    img: "http://www.sethcodes.com/wp-content/uploads/2017/08/hero3.png",
    strength: 11
  },
  {
    id: 2,
    title: "Magic",
    description: "Wizard Mike",
    alt: "Wizard",
    img: "http://www.sethcodes.com/wp-content/uploads/2017/08/hero2.png",
    strength: 16
  }
];

// WEAPONS
const dataWeapon = [
  {
    id: 3,
    titleWeapon: "Small Blaster",
    descWeapon: "Accurate but weak",
    altWeapon: "Small Blaster",
    imgWeapon: "./assets/img/gun1.png",
    upgrade: 25,
    weaponStrength: 7
  },
  {
    id: 4,
    titleWeapon: "Brute Foce",
    descWeapon: "Samurai Rick",
    altWeapon: "Samurai",
    imgWeapon: "./assets/img/knife1.png",
    upgrade: 25,
    weaponStrength: 11
  },
  {
    id: 5,
    titleWeapon: "Magic",
    descWeapon: "Wizard Mike",
    altWeapon: "Wizard",
    imgWeapon: "./assets/img/book1.png",
    upgrade: 25,
    weaponStrength: 16
  }
];

// WEAPONS
const dataStats = [
  {
    id: 6,
    statAttack: 0,
    statMoney: 25,
    statHealth: 1000,
  }
];

// EXTENDS THE BATTLE CLASS
class Battle extends Component {
  constructor() {
    super();
    this.state = {
      health: 500,
      money: 25,
      level: 1,
      bossimg: "http://www.sethcodes.com/wp-content/uploads/2017/08/boss3.jpg",
      bossalt: "Boss 1",
      dataHero,
      dataWeapon
    };
    this.attackBoss = this.attackBoss.bind(this);
  }
  
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.health !== 0) {
      console.log("Updated");
      console.log("Previous state:", prevState);
      console.log("Current state:", this.state);
    }
    else {
      alert("You have defeated the boss!");
    }
  }

  // ATTACK THE BOSS
  attackBoss(strength) {
    const newHealth = this.state.health - strength;
    const newMoney= this.state.money + 2;

    if (newHealth < 1) {
      this.setState({ health: 0 });
    }
    else {
      this.setState({ 
        health: newHealth,
        money: newMoney
      });
    }
  /* if (newHealth > 100) {
      this.setState({ level: 2,
        bossimg: "http://www.sethcodes.com/wp-content/uploads/2017/08/boss2.jpg",
        bossalt: "boss man" 
      });
    }
    if (newConsumed > 200) {
      this.setState({ level: 3,
        bossimg: "http://www.sethcodes.com/wp-content/uploads/2017/08/boss1.png",
        bossalt: "boss man"
      });
    } */
  }

  // UPGRADE WEAPON
  upgradeWeapon(upgrade) {
    const newStrength = this.state.strength + 15;
    const newMoney= this.state.money - this.state.upgrade;
    if (newMoney < 0) {
        alert("You don't have enough");
    } else {
      this.setState({ 
        strength: newStrength,
        money: newMoney
      });
    }
  }

  // LOAD ALL HEROS
  renderHeroes() {
    return this.state.dataHero.map(
      dataHero => 
      (
        <div key={dataHero.id} className="col-md-4">
          <HeroChar dataHero={dataHero} handleClick={this.attackBoss} />
        </div>
      )
    );
  }

  // BUILD ALL WEAPONS
  renderWeapons() {
    return this.state.dataWeapon.map(
      dataWeapon => 
      ( <div key={dataWeapon.id} className="col-md-4">
        <WeaponItem dataWeapon={dataWeapon} handleClick={this.upgradeWeapon} />
      </div> )
    );
  }

// RENDER BODY HTML
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
              <div className="col-md-12"><h1>BATTLE BATTLE</h1></div>
                <h3 className="panel-title text-center">Boss</h3>
              </div>
              <div className="panel-body text-center">
          <table>
          <tbody>
            <tr><td>
                  {this.renderHeroes()}
                  <h1>Money: {this.state.money}</h1> 
          </td><td>
              <h1>
                  <p>Hit Points: {this.state.health}</p>
                  <p>Player Level: {this.state.level}</p>
              </h1> 
          <img
          alt={this.state.bossalt}
          src={this.state.bossimg}
          width="400" />
          </td></tr>
          </tbody>
          </table>
                
          <div className="col-md-12">
          {this.renderWeapons()}
            <h3>DAMAGE DEALT: {this.state.strength}</h3>
            <h3>MONEY EARNED: {this.state.money}</h3>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Battle;


///////
/*
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
        <Image source={this.props.source} style={{ width: 60, height: 60,}}/>
      </View>
    );
  }
});
*/
